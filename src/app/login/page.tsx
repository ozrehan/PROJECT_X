export default function LoginPage() {
  return (
    <div className="w-full min-h-screen px-4 sm:px-6 py-8 sm:py-12 flex items-center justify-center">
      <div className="w-full max-w-md border border-gray-300 p-6 sm:p-8 rounded-lg sm:rounded-xl bg-white shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Login
        </h1>

        <div className="space-y-4">
          <input
            className="border border-gray-300 p-3 sm:p-4 w-full rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm sm:text-base"
            placeholder="Email"
            type="email"
          />

          <input
            type="password"
            className="border border-gray-300 p-3 sm:p-4 w-full rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm sm:text-base"
            placeholder="Password"
          />

          <button className="bg-amber-500 text-white w-full py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-600 transition text-sm sm:text-base mt-6">
            Login
          </button>
        </div>

        <p className="text-center mt-4 text-xs sm:text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-amber-500 hover:text-amber-600 font-semibold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}