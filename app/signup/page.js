"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { GoogleLogo } from "../components/svg/google";
import Logo from "../components/svg/logo";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"; // install heroicons: npm i @heroicons/react

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed.");
        return;
      }

      setSuccess("Account created successfully! Redirecting...");

      setTimeout(() => {
        window.location.href = "/login";
      }, 1200);
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#155DFC]">
      <div className="flex flex-col justify-center items-center bg-white pb-20 pt-15 px-10 rounded-xl">
        <div className="flex gap-3 justify-center items-center">
          <Logo height={55} width={55} />
          <p className="text-5xl font-black">Chartly</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto mt-10 space-y-4"
        >
          <p className="text-gray-400 m-0">Create your account</p>
          <p className="font-bold text-3xl mb-8">Sign up</p>

          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded focus:outline-gray-300 p-2 w-full"
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded focus:outline-gray-300 p-2 w-full"
          />

          {/* Password input */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded focus:outline-gray-300 p-2 w-full pr-10 box-border"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button
            disabled={loading}
            className="bg-blue-500 text-white w-full p-2 font-semibold active:bg-blue-400 rounded disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {/* Google signup */}
        <div className="w-full flex flex-col gap-2 mt-6">
          <button
            onClick={() => signIn("google", { callbackUrl: "/main/dashboard" })}
            className="flex justify-center items-center gap-4 text-sm bg-white w-full p-2 border border-gray-200 active:bg-gray-100 rounded"
          >
            <GoogleLogo className="w-5 h-5" />
            Sign up with Google
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 font-semibold underline active:text-blue-400"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
