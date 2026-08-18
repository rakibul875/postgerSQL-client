"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export const getUserSession = async () => {
  const cookieStore = await cookies();
  const incomingHeaders = await headers();
  
  const cookieHeader = cookieStore.toString();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/get-session`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieHeader,
          
          "x-forwarded-proto": incomingHeaders.get("x-forwarded-proto") || "https",
          origin: incomingHeaders.get("origin") || process.env.CLIENT_URL || "https://restauranthub-lovat.vercel.app",
        },
        credentials: "include",
        cache: "no-store",
      }
    );

    if (!response.ok) return null;

    const session = await response.json();
    return session?.user ?? null;
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

  if (user?.role !== role) {
    redirect("/unauthorize");
  }

  return user;
};