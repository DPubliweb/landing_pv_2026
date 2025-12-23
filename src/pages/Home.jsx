import React, { useEffect, useState } from "react";
import HeroSection from "../components/landing/HeroSection";
import ComfortSection from "../components/landing/ComfortSection";
import BenefitsGrid from "../components/landing/BenefitsGrid";
import AdvantagesSection from "../components/landing/AdvantagesSection";
import FinalCTA from "../components/landing/FinalCTA";
import FAQ from "../components/landing/FAQ";
import CTAButton from "../components/landing/CTAButton";

export default function Home() {
  const [showStickyButton, setShowStickyButton] = useState(false);
  
  const scrollToForm = () => {
    document.getElementById('eligibility-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyButton(true);
      } else {
        setShowStickyButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Load Manrope font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Rubik:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const ctaTexts = [
    "Utiliser mes aides",
    "J'en profite"
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <HeroSection />
      <ComfortSection />
      <CTAButton text={ctaTexts[0]} />
      <BenefitsGrid />
      <AdvantagesSection />
      <CTAButton text={ctaTexts[1]} />
      <FinalCTA />
      <FAQ />
      
      {/* Sticky CTA Button */}
      {showStickyButton && (
        <button
          onClick={scrollToForm}
          className="fixed bottom-0 left-0 right-0 z-50 w-full px-8 md:px-12 py-4 md:py-5 text-white text-lg md:text-xl font-bold shadow-2xl transition-all duration-300"
          style={{
            backgroundColor: '#4CAF50',
            borderRadius: '0',
            fontFamily: 'Rubik, sans-serif'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#388E3C'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
        >
          Je teste mon éligibilité
        </button>
      )}
    </div>
  );
}