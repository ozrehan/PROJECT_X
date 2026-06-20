export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-20 border p-8 rounded-xl">
      <h1 className="text-3xl font-bold mb-6">
        Login
      </h1>

      <input
        className="border p-3 w-full mb-4 rounded"
        placeholder="Email"
      />

      <input
        type="password"
        className="border p-3 w-full mb-4 rounded"
        placeholder="Password"
      />

      <button className="bg-orange-500 text-white w-full py-3 rounded">
        Login
      </button>
    </div>
  );
}