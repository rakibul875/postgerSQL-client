"use server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const getUserSession = async () => {
  const requestHeaders = await headers();

  const cookie = requestHeaders.get("cookie");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/get-session`,
    {
      headers: {
        Cookie: cookie || "",
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return null;
  }

  const session = await response.json();

  return session?.user ?? null;
};

// export const getToken = async () => {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });
//   return session?.session?.token || null;
// };

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
