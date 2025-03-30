"use client";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About</h1>
      <button
        onClick={() => router.push("/")}
        className="p-2 bg-gray-300 text-black rounded "
      >
        Go to Home
      </button>
    </div>
  );
};

export default About;
