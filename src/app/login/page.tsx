"use client";

import { SessionProvider, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  return (
    <SessionProvider>
      <LoginComponent />
    </SessionProvider>
  );
}
function LoginComponent() {
  const router = useRouter();
  const session = useSession();

  if (session.status === "loading") return <div>Loading...</div>;

  if (session.status === "authenticated") {
    router.push("/admin");
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center space-y-12 p-24">
        <div className="text-center">
          <h1 className="uppercase text-3xl">Welcome back</h1>
          <h2 className="text-lg">Please login to continue</h2>
        </div>
        <button className="px-2 py-1.5 border border-gray-400" type="button" onClick={() => signIn("spotify")}>
          Login using Spotify
        </button>
      </main>
    );
  }
}
