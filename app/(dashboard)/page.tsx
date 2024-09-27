"use client";

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

// import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const { data: accounts } = useGetAccounts();

  return (
    <div>
      <p>Home Page</p>
    </div>
  );
}
