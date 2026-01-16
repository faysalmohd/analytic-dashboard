"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { GoogleLogo } from "../components/svg/google";
import Logo from "../components/svg/logo";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (email && password) {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Incorrect email or password!");
      } else {
        window.location.href = "/main/dashboard";
      }
    } else {
      setError("Please enter your details.");
    }
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#155DFC]">
      <div className=" flex flex-col justify-center items-center bg-white pb-20 pt-15 px-10 rounded-xl">
        <div className="flex gap-3 justify-center items-center">
          <Logo height={55} width={55}></Logo>
          <p className="text-5xl font-black">Chartly</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto mt-10 space-y-4 "
        >
          <p className="text-gray-400 m-0">Please enter your details</p>
          <p className="font-bold text-3xl mb-8">Welcome back</p>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            className="border border-gray-300 rounded focus:outline-gray-300 focus:border p-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            className="border border-gray-300 rounded focus:outline-gray-300 focus:border p-2 w-full"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button className="bg-blue-500 text-white w-full p-2 font-semibold active:bg-blue-400 rounded">
            Login
          </button>
          <div className="flex justify-end pr-2 m-0 mb-8">
            <Link
              href=""
              className="text-blue-600 text-sm underline active:text-blue-400"
            >
              Forgot password
            </Link>
          </div>
        </form>
        <div className="w-full flex flex-col gap-2">
          <button
            onClick={() => signIn("google", { callbackUrl: "/main/dashboard" })}
            className="flex justify-center items-center gap-4 text-sm bg-white w-full p-2 border border-gray-200 active:bg-gray-100 rounded"
          >
            <GoogleLogo className="w-5 h-5" />
            Sign in with Google
          </button>
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-600 font-semibold underline active:text-blue-400"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
