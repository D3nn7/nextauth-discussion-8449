"use client";
import { SessionProvider, signOut, useSession } from "next-auth/react";

function Page() {
  const session = useSession().data?.user;
  return (
    <main className="flex min-h-screen flex-col items-center space-y-12 p-24">
      <h1 className="uppercase text-4xl">
        Welcome back <b>{session?.name}</b>
      </h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <div>
        <button type="button" onClick={() => signOut()}>
          logout
        </button>
      </div>
    </main>
  );
}

export default function PageComponent() {
  return (
    <SessionProvider>
      <Page />
    </SessionProvider>
  );
}
