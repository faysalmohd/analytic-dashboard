import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import db from "@/lib/db";
import { randomUUID } from "crypto";

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    
    CredentialsProvider({
      async authorize(credentials) {
        const user = db
          .prepare("SELECT * FROM users WHERE email = ?")
          .get(credentials.email);

        if (!user) return null;

        const valid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!valid) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),

    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const existingUser = db
          .prepare("SELECT * FROM users WHERE email = ?")
          .get(user.email);

        if (!existingUser) {
          db.prepare(`
            INSERT INTO users (id, name, email, image)
            VALUES (?, ?, ?, ?)
          `).run(
            randomUUID(),
            user.name,
            user.email,
            user.image
          );
        }
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
