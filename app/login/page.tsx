"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

function LogoMark({ dark = false }: { dark?: boolean }) {
  const color = dark ? "bg-white" : "bg-[#6C5CE7]";
  return (
    <div className="relative w-6 h-6 shrink-0">
      <span
        className={`absolute left-0 top-0 w-4 h-2.5 rounded-[2px] skew-x-[-20deg] ${color}`}
      />
      <span
        className={`absolute right-0 bottom-0 w-4 h-2.5 rounded-[2px] skew-x-[-20deg] ${color}`}
      />
    </div>
  );
}

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <LogoMark dark={dark} />
      <span
        className={`font-bold tracking-wide text-base ${
          dark ? "text-white" : "text-[#1A1A1E]"
        }`}
      >
        SHIPNOW
      </span>
    </div>
  );
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Validate login credentials here

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white">
      {/* Purple panel */}
      <div className="relative w-full lg:w-1/2 lg:min-h-screen bg-gradient-to-br from-[#8B7CF6] to-[#6C5CE7] flex flex-col px-6 sm:px-10 lg:px-16 py-10 lg:py-12">
        <Logo dark />

        <div className="flex-1 flex items-center justify-center py-10 lg:py-12">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <Image
              src="/shipnow-hero.jpg"
              alt="Delivery illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center max-w-sm mx-auto pb-2 lg:pb-4">
          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">
            Welcome to ShipNow
          </h1>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed">
            Manage your shipments, fleet, and warehouse in one smart dashboard.
          </p>
        </div>
      </div>

      {/* White panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10 py-12 lg:py-16 bg-white">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-6">
            <LogoMark />
          </div>

          <h2 className="text-center text-2xl font-bold text-[#1A1A1E] mb-1.5">
            Welcome Back
          </h2>

          <p className="text-center text-sm text-gray-500 mb-8">
            Log in to continue managing your logistics with ShipNow
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800 mb-1.5"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter a valid email address"
                className="w-full rounded-lg bg-gray-100 border border-transparent px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:bg-white transition"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-800 mb-1.5"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-lg bg-gray-100 border border-transparent px-4 py-3 pr-11 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:bg-white transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  defaultChecked
                  className="cursor-pointer"
                />
                Remember Me
              </label>

              <a
                href="#"
                className="text-[#6C5CE7] font-medium hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 text-white font-semibold py-3 text-sm hover:bg-slate-700 transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="text-[#6C5CE7] font-semibold hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}