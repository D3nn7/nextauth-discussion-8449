import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  debug: true,
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: `${process.env.NEXTAUTH_URL}/login`,
  },
});
export { handler as GET, handler as POST };
