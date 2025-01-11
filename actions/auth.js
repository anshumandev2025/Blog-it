"use server";

import { auth, signIn, signOut } from "@/auth";

export async function handleSignIn() {
  await signIn("google");
}

export async function handleSignOut() {
  await signOut();
}

export async function sessionUser() {
  const session = await auth();
  return session?.user;
}
