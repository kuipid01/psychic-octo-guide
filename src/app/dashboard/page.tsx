import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }
  return (
    <div className="h-screen w-full bg-gradient-to-r from-lime-400 to-zinc-50">
      Dashboard
    </div>
  );
};

export default Dashboard;
