import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";
import { writeClient } from "./sanity/lib/write-client";
import { FETCH_AUTHOR_DETAILS_BY_EMAIL_QUERY } from "./sanity/lib/queries";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account, profile }) {
      const existingUser = await client.fetch(
        FETCH_AUTHOR_DETAILS_BY_EMAIL_QUERY,
        {
          email: user?.email,
        }
      );
      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id: user?.id,
          name: user?.name,
          email: user?.email,
          image: user?.image,
        });
      }
      return true;
    },
    async jwt({ token, account, user }) {
      if (account && user) {
        const author = await client.fetch(FETCH_AUTHOR_DETAILS_BY_EMAIL_QUERY, {
          email: user?.email,
        });
        if (author) {
          token.id = author._id;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.id = token.id; // Attach user ID to the session
      }
      return session;
    },
  },
});
