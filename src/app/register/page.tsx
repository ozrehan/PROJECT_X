import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="h-screen overflow-hidden relative">

      {/* Background */}
      <Image
        src="/images/auth/jack.png"
        alt="background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Main Card */}
      <div className="relative z-10 h-screen flex items-center justify-center p-8">

        <div className="w-[1200px] h-[650px] backdrop-blur-md bg-black/35 border border-white/10 rounded-[25px] overflow-hidden shadow-2xl">

          <div className="grid grid-cols-2 h-full">

            {/* LEFT */}
            <div className="flex flex-col justify-center px-16 text-white">

              <h1 className="text-6xl font-bold">
                Let's Get Started
              </h1>

              <p className="mt-6 text-gray-300 leading-8 max-w-[420px]">
                Welcome to Oz marketplace. Create your account and
                discover the best fashion experience.
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-center">

              <div className="w-[420px]">

                <h2 className="text-white text-4xl font-bold mb-12">
                  Sign up
                </h2>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-gray-500 py-4 text-white outline-none mb-6"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-transparent border-b border-gray-500 py-4 text-white outline-none mb-6"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent border-b border-gray-500 py-4 text-white outline-none mb-6"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full bg-transparent border-b border-gray-500 py-4 text-white outline-none"
                />

                <button className="w-full h-[50px] rounded-lg bg-green-700 hover:bg-green-800 text-white font-semibold mt-10">
                  Sign Up
                </button>

                <div className="flex justify-between items-center mt-8">

                  <span className="text-gray-300">
                    Already a member?
                  </span>

                  <button className="text-white underline">
                    Sign in
                  </button>

                </div>

                {/* Social */}
                <div className="flex gap-4 mt-10">

                  <button className="w-12 h-12 rounded-full border border-white text-white">
                    f
                  </button>

                  <button className="w-12 h-12 rounded-full border border-white text-white">
                    X
                  </button>

                  <button className="w-12 h-12 rounded-full border border-white text-white">
                    G
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}