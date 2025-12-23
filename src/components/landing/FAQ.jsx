import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Comment fonctionnent les panneaux solaires ?",
      answer: "Les panneaux photovoltaïques captent la lumière du soleil et la transforment en électricité grâce à des cellules photovoltaïques. Cette électricité alimente directement votre maison (autoconsommation), le surplus peut être revendu à EDF OA ou stocké dans une batterie."
    },
    {
      question: "Quelles sont les nouvelles aides 2026 ?",
      answer: "En 2026, vous pouvez bénéficier de MaPrimeRénov' (jusqu'à 20 000€), du CITE - Crédit d'Impôt pour la Transition Énergétique (30% de déduction), de l'Éco-PTZ (jusqu'à 30 000€), et des primes CEE. Ces nouvelles aides régionales et nationales visent à encourager la transition écologique."
    },
    {
      question: "Quels sont les critères d'éligibilité ?",
      answer: "Vous devez être propriétaire d'une maison individuelle. Le logement doit être construit depuis plus de 2 ans. L'installation doit être réalisée par un artisan certifié RGE (Reconnu Garant de l'Environnement). Les aides varient selon vos revenus."
    },
    {
      question: "Quelle économie puis-je réaliser ?",
      answer: "Vous pouvez réaliser jusqu'à 80% d'économie sur votre facture d'électricité. L'installation est généralement rentabilisée en 7 à 10 ans. Sur la durée de vie des panneaux (25-30 ans), vous réalisez des économies considérables, d'autant plus avec la hausse du prix de l'électricité."
    },
    {
      question: "Quelle est la durée de vie des panneaux solaires ?",
      answer: "Les panneaux solaires ont une durée de vie de 25 à 30 ans en moyenne. Ils conservent environ 80% de leur capacité de production après 25 ans. L'entretien est minimal (nettoyage occasionnel) et la plupart des fabricants offrent une garantie de 20 à 25 ans."
    },
    {
      question: "Puis-je revendre mon surplus d'électricité ?",
      answer: "Oui ! Vous pouvez revendre votre surplus d'électricité à EDF OA (Obligation d'Achat) à un tarif réglementé. Vous pouvez également choisir de stocker ce surplus dans une batterie pour l'utiliser la nuit ou les jours moins ensoleillés."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[900px] mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[36px] md:text-[42px] font-bold mb-4" style={{ color: '#0D47A1' }}>
          Questions fréquentes
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Tout ce que vous devez savoir sur les panneaux solaires et les aides 2026
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 rounded-xl overflow-hidden transition-all duration-300"
              style={{ 
                borderColor: openIndex === index ? '#1976D2' : '#E0E0E0',
                backgroundColor: openIndex === index ? '#E3F2FD' : 'white'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300"
              >
                <span 
                  className="text-lg font-bold pr-4"
                  style={{ color: openIndex === index ? '#1976D2' : '#0D47A1' }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: openIndex === index ? '#1976D2' : '#0D47A1' }}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-base leading-relaxed text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl" style={{ backgroundColor: '#E8F4F8' }}>
          <h3 className="text-2xl font-bold mb-3" style={{ color: '#0D47A1' }}>
            Vous avez d'autres questions ?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Notre équipe d'experts est là pour vous répondre
          </p>
          <button
            onClick={() => document.getElementById('eligibility-form').scrollIntoView()}
            className="px-10 py-4 text-white text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{
              backgroundColor: '#4CAF50',
              borderRadius: '10px',
              fontFamily: 'Rubik, sans-serif'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#388E3C'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}