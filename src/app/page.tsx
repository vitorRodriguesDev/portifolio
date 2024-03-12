import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <div style={{marginTop: 30}} ></div>
    <HeroSection />
    <ProjectsSection />
    <Footer />
    </>
  );
}
