"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Hyperspeed from "@/components/ui/Hyperspeed";

const Home = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth");
  };

  return (
    <div className="flex flex-col">
      <div className="justify-items-center p-0 gap-0 ">
        <h1 className="text-3xl font-bold">Press to login!</h1>
        <Button onClick={handleLogin}>Login</Button>
        <p className="italic">(just for presenting)</p>
      </div>

      <div className="flex flex-col items-center overflow-x-scroll-hidden">
        <Hyperspeed />
      </div>
    </div>
  );
};

export default Home;
