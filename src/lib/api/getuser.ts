"use server";

import { headers } from "next/headers";
import { authClient } from "../auth-client";
import { redirect } from "next/navigation";

export const getUserSession = async () => {
  try {
    const session = await authClient.getSession({
      fetchOptions: {
        headers: await headers(),
      },
    });

    return session?.data?.user ?? null;
  } catch (error) {
    console.error("Session error:", error);
    return null;
  }
};

export const roleBaseSession = async (role: string) => {
  const user = await getUserSession();

  if (!user) {
    redirect("/auth/signin");
  }

  if ((user as any).role  !== role) {
    redirect("/unauthorize");
  }

  return user;
};