"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

// ...komponens logika
// Hiba megszűnik, mert már nincs duplikált `ThemedToaster`.

const Home = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Press to login!</h1>
      <Button onClick={handleLogin}>Login</Button>
      <p className="italic mt-3.5">(just for presenting)</p>
    </div>
  );
};

export default Home;
