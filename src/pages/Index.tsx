
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Benefits from '../components/Benefits';
import StartupInfo from '../components/StartupInfo';
import FAQ from '../components/FAQ';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Benefits />
      <StartupInfo />
      <FAQ />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
