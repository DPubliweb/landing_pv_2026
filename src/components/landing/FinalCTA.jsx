import React from "react";
import { Calendar } from "lucide-react";

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('eligibility-form').scrollIntoView();
  };

  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#0D47A1' }}>
      <div className="max-w-[1000px] mx-auto text-center">
        {/* Main Message */}
        <h2 className="text-white text-[28px] md:text-[38px] font-bold leading-snug mb-12">
          Devenez <span style={{ color: '#42A5F5' }}>autonome en énergie</span> 
          {' '}et réalisez jusqu'à{' '}
          <span style={{ color: '#42A5F5' }}>80% d'économies</span>
          {' '}sur votre facture d'électricité
        </h2>

        {/* Benefits Icons */}
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <div className="text-white">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#4CAF50' }}>
              <span className="text-3xl">☀️</span>
            </div>
            <p className="text-lg font-semibold">Autoconsommation</p>
            <p className="text-sm opacity-90 mt-2">Produisez votre propre électricité</p>
          </div>

          <div className="text-white">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#4CAF50' }}>
              <span className="text-3xl">💰</span>
            </div>
            <p className="text-lg font-semibold">80% d'économies</p>
            <p className="text-sm opacity-90 mt-2">Réduisez drastiquement vos factures</p>
          </div>

          <div className="text-white">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#4CAF50' }}>
              <span className="text-3xl">🌱</span>
            </div>
            <p className="text-lg font-semibold">100% écologique</p>
            <p className="text-sm opacity-90 mt-2">Énergie propre et renouvelable</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToForm}
          className="px-16 py-6 text-white text-2xl font-extrabold transition-all duration-300 transform hover:scale-110 shadow-2xl mb-6"
          style={{
            backgroundColor: '#4CAF50',
            borderRadius: '12px',
            fontFamily: 'Rubik, sans-serif'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#388E3C'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
        >
          J'en profite
        </button>

        {/* Deadline Notice */}
        <div className="flex items-center justify-center gap-3 text-white">
          <Calendar className="w-5 h-5" />
          <p className="text-lg font-semibold">
            Profitez des nouvelles aides <span style={{ color: '#42A5F5' }}>2026</span>
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/80 text-sm mb-4">Nos garanties :</p>
          <div className="flex flex-wrap justify-center gap-6 text-white text-sm font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-xl" style={{ color: '#4CAF50' }}>✓</span>
              <span>Devis gratuit sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl" style={{ color: '#4CAF50' }}>✓</span>
              <span>Artisans certifiés RGE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl" style={{ color: '#4CAF50' }}>✓</span>
              <span>Garantie décennale</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl" style={{ color: '#4CAF50' }}>✓</span>
              <span>SAV dédié</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}