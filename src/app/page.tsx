
import { HeroLando } from "@/components/sections/HeroLando";
import { AgencyAbout } from "@/components/sections/AgencyAbout";
import { ProjectList } from "@/components/sections/ProjectList";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <HeroLando />
      <ProjectList />
      <AgencyAbout />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
