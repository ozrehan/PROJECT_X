export default function LoginPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{
        backgroundImage: "url('/images/auth/register-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Card */}
      <div className="
        relative z-10
        w-[82vw]
        max-w-[1400px]
        h-[82vh]
        rounded-[32px]
        backdrop-blur-xl
        bg-black/30
        border border-white/10
        shadow-2xl
        overflow-hidden
      ">

        <div className="grid grid-cols-2 h-full">

          {/* LEFT */}
          <div className="flex flex-col justify-center px-20">

            <h1 className="text-white text-5xl font-bold leading-tight">
              Let's Get
              <br />
              Started
            </h1>

            <p className="text-white/80 text-lg mt-8 max-w-[420px] leading-9">
              Welcome to Oz marketplace.
              Sign in to your account and enjoy
              the best fashion experience.
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col px-20 py-14">

            <h2 className="text-white text-4xl font-bold">
              Login
            </h2>

            {/* EMAIL */}
            <div className="mt-14">
              <input
                type="email"
                placeholder="Your email"
                className="
                  w-full
                  bg-transparent
                  border-b
                  border-white/30
                  py-3
                  text-lg
                  text-white
                  placeholder:text-white/60
                  outline-none
                "
              />
            </div>

            {/* PASSWORD */}
            <div className="mt-10">
              <input
                type="password"
                placeholder="Password"
                className="
                  w-full
                  bg-transparent
                  border-b
                  border-white/30
                  py-3
                  text-lg
                  text-white
                  placeholder:text-white/60
                  outline-none
                "
              />
            </div>

            {/* FORGOT */}
            <div className="flex justify-end mt-8">
              <button className="text-white text-lg">
                Forgot password?
              </button>
            </div>

            {/* BUTTON */}
            <button
              className="
                w-full
                h-[58px]
                bg-[#009933]
                rounded-xl
                text-white
                text-xl
                font-semibold
                mt-6
              "
            >
              Login
            </button>

            {/* OR */}
            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-white/20"></div>

              <span className="mx-8 text-white text-lg">
                OR
              </span>

              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            {/* SIGNUP */}
            <div className="text-center text-white text-lg">
              Don't have an account?

              <span className="underline ml-2">
                Sign up
              </span>
            </div>

            {/* SOCIAL */}
            <div className="flex justify-center gap-6 mt-8">

              <button className="
                w-12
                h-12
                rounded-full
                border
                border-white
                text-white
              ">
                f
              </button>

              <button className="
                w-12
                h-12
                rounded-full
                border
                border-white
                text-white
              ">
                X
              </button>

              <button className="
                w-12
                h-12
                rounded-full
                border
                border-white
                text-white
              ">
                G
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}