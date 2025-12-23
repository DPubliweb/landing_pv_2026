import React from "react";

export default function ComfortSection() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[28px] md:text-[36px] font-bold mb-10 md:mb-16 leading-tight">
          <span style={{ color: '#0D47A1' }}>Passez à </span>
          <span style={{ color: '#1976D2' }}>l'autoconsommation</span>
          <span style={{ color: '#0D47A1' }}> et réalisez des </span>
          <span style={{ color: '#1976D2' }}>économies</span>
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Left: Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://aideregionales.com/1s6ajoj-panneaux-solaire_10bm0bm0bm08o00001g01o.jpg"
              alt="Installation panneaux solaires sur toit"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-5 md:space-y-6 order-1 md:order-2">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3" style={{ color: '#0D47A1' }}>
                Produisez votre propre électricité
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Les panneaux photovoltaïques <strong>transforment la lumière du soleil en électricité</strong>. 
                L'installation alimente directement les circuits électriques de votre maison pour une 
                <strong> autoconsommation maximale</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3" style={{ color: '#0D47A1' }}>
                Vendez votre surplus d'énergie
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Le surplus d'électricité est <strong style={{ color: '#5CB000' }}>revendu à EDF OA</strong> ou 
                stocké dans une batterie pour être utilisé la nuit. Générez un revenu complémentaire 
                tout en réduisant vos factures de <strong>jusqu'à 80%</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3" style={{ color: '#0D47A1' }}>
                Nouvelles aides 2026 pour la transition écologique
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Profitez des <strong>aides régionales et nationales 2026</strong> : MaPrimeRénov' (20 000€), 
                CITE (30% de crédit d'impôt), Éco-PTZ (30 000€). Installation 
                <strong style={{ color: '#1976D2' }}> 100% autofinancée</strong> selon éligibilité.
              </p>
            </div>
          </div>
        </div>

        {/* Certification Logos - Bottom of Page */}
        <div className="flex justify-center items-center gap-12 md:gap-20 pt-8 md:pt-12 border-t-2 border-gray-200">
          <div className="flex items-center justify-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694a53c214a8601edd01e0b0/feafc4f2f_Logo_MTE.png"
              alt="Ministère Transition Écologique"
              className="h-[80px] md:h-[120px] object-contain"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_67d6fe733e18abac6832bd29/2c943b4aa_design_sans_titre_10.png"
              alt="RGE"
              className="h-[80px] md:h-[120px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}