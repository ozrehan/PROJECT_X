import { ArrowRight, ShieldCheck, Sparkles, Store } from "lucide-react";

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.16),_transparent_32%),linear-gradient(135deg,_#111827_0%,_#1f2937_100%)] px-4 py-6 text-white sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl lg:flex-row">
        <section className="flex-1 p-6 sm:p-8 lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-200">
            <Sparkles size={16} />
            Fashion marketplace
          </div>

          <h1 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Sign in to shop smarter and faster.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Discover curated clothing, save favorites, and get personalized recommendations that feel like a premium app experience.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <ShieldCheck size={16} className="text-amber-300" />
                Secure checkout
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Protected payments and trusted sellers.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Store size={16} className="text-amber-300" />
                Curated stores
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Explore local and premium fashion brands.
              </p>
            </div>
          </div>
        </section>

        <section className="flex-1 bg-slate-950/80 p-6 sm:p-8 lg:p-10">
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              Welcome back
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Continue your style journey</h2>

            <div className="mt-6 space-y-3">
              <label className="block text-sm text-slate-300">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500"
                />
              </label>

              <label className="block text-sm text-slate-300">
                Password
                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500"
                />
              </label>
            </div>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
              Sign in
              <ArrowRight size={16} />
            </button>

            <p className="mt-4 text-center text-sm text-slate-400">
              New here? Create an account in minutes.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
