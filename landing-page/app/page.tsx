'use client';

import Background3D from "@/components/Background3D";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import SocialProof from "@/components/SocialProof";
import Differentiation from "@/components/Differentiation";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Background3D />
      <Hero />
      <div className="bg-brand-light-gray/50 relative backdrop-blur-sm z-10">
        <Problem />
      </div>
      <Solution />
      <div className="bg-white/80 backdrop-blur-md z-10 relative">
        <SocialProof />
      </div>
      <Differentiation />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
