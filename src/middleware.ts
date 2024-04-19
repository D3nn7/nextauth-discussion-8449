import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: `${process.env.NEXTAUTH_URL}/login`,
    },
  }
);

export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|image|favicon.ico|login|manifest).*)",
  ],
};
