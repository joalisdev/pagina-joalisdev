import Forms from "@/components/sections/Forms";
import Hero from "@/components/sections/Hero";
import Needs from "@/components/sections/Needs";
import Problems from "@/components/sections/Problems";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problems />
      <Needs />
      <Process />
      <Forms />
    </main>
  );
}