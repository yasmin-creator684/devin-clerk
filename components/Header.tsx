import Link from "next/link";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { appConfig } from "@/app.config";

export function Header() {
  return (
    <header className="border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span aria-hidden>{appConfig.emoji}</span>
          {appConfig.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/dashboard" className="hover:text-accent">
            Dashboard
          </Link>
          <Show when="signed-out">
            <div className="flex items-center gap-4">
              <SignInButton mode="redirect">
                <button
                  type="button"
                  className="font-medium text-black/70 transition hover:text-accent"
                >
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="redirect">
                <button
                  type="button"
                  className="rounded-full px-4 py-2 font-medium text-white shadow-sm transition hover:opacity-90"
                  style={{ backgroundColor: appConfig.accent }}
                >
                  Sign up
                </button>
              </SignUpButton>
            </div>
          </Show>
          <Show when="signed-in">
            <UserButton
              appearance={{ variables: { colorPrimary: appConfig.accent } }}
            />
          </Show>
        </nav>
      </div>
    </header>
  );
}
