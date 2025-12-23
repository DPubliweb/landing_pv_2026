import React from "react";

export default function AdvantagesSection() {
  const scrollToForm = () => {
    document.getElementById('eligibility-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#E3F2FD' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Main Highlight */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold leading-tight">
            <span style={{ color: '#0D47A1' }}>Jusqu'à </span>
            <span style={{ color: '#1976D2', fontSize: '48px' }}>80 %</span>
            <span style={{ color: '#0D47A1' }}> d'économie</span>
            <br />
            <span style={{ color: '#0D47A1' }}>sur vos factures d'électricité</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="max-w-[800px] mx-auto">
          {/* Info Blocks */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4" style={{ borderColor: '#1976D2' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0D47A1' }}>
                Valorisez votre bien immobilier
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Une installation photovoltaïque augmente la valeur de votre logement de{' '}
                <strong>15 à 25%</strong> et améliore son diagnostic de performance énergétique (DPE). 
                Installation réalisée par des <strong>artisans locaux certifiés RGE</strong>.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4" style={{ borderColor: '#42A5F5' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0D47A1' }}>
                Nouvelles aides régionales et nationales 2026
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Bénéficiez des <strong>nouvelles aides 2026</strong> pour la transition écologique : 
                <strong>MaPrimeRénov'</strong> (jusqu'à 20 000€), <strong>CITE</strong> (30% de crédit d'impôt), 
                <strong>Éco-PTZ</strong> (jusqu'à 30 000€), et <strong>primes CEE</strong>. 
                Installation <strong style={{ color: '#5CB000' }}>100% autofinancée</strong> selon éligibilité.
              </p>
            </div>

            {/* CTA Button between the two blocks */}
            <div className="flex justify-center py-4">
              <button
                onClick={scrollToForm}
                className="px-8 md:px-12 py-4 md:py-5 text-white text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: '#4CAF50',
                  borderRadius: '10px',
                  fontFamily: 'Rubik, sans-serif'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#388E3C'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
              >
                Je calcule mes aides
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border-2" style={{ borderColor: '#4CAF50' }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4CAF50' }}>
                    <span className="text-white text-2xl font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#0D47A1' }}>
                    Rentabilité garantie
                  </h4>
                  <p className="text-base text-gray-700">
                    Avec la hausse du prix de l'électricité, votre installation est{' '}
                    <strong>rentabilisée en 7 à 10 ans</strong> et vous garantit des économies 
                    sur <strong>25 à 30 ans</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-4xl font-extrabold mb-2" style={{ color: '#1976D2' }}>
              10 000€
            </p>
            <p className="text-lg font-semibold" style={{ color: '#0D47A1' }}>
              Aides 2026 maximales
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-4xl font-extrabold mb-2" style={{ color: '#1976D2' }}>
              80%
            </p>
            <p className="text-lg font-semibold" style={{ color: '#0D47A1' }}>
              Économie sur votre facture
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-4xl font-extrabold mb-2" style={{ color: '#1976D2' }}>
              25-30 ans
            </p>
            <p className="text-lg font-semibold" style={{ color: '#0D47A1' }}>
              Durée de vie des panneaux
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}