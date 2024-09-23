"use client";
// import { getCurrentUser } from "@/lib/session";
// import { constructMetadata } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "@/components/dashboard/header";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";
// import Dynamic from "@/components/hydra/dynamic";
import hydra from "./hydra-client";

/* export const metadata = constructMetadata({
  title: "Dashboard – SaaS Starter",
  description: "Create and manage content.",
}); */

export default async function DashboardPage() {
  // const user = await getCurrentUser();
  const user = { role: 'ROLE' };

  console.log('Hydra');
  console.log(hydra);

  //    <Dynamic />

  return (
    <>
      <DashboardHeader
        heading="Dashboard"
        text={`Current Role : ${user?.role} — Change your role in settings.`}
      />
    </>
  );
}
