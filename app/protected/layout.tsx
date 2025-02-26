import type React from "react";
import getUser from "@/actions/auth";
import { redirect } from "next/navigation";
import Navigation from "@/components/Navegation"

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navigation user={user}/>
      {children}
    </div>
  );
}
