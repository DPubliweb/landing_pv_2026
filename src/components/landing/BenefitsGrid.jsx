import React from "react";
import { TrendingDown, Zap, Leaf, Sun, TrendingUp, BadgeDollarSign } from "lucide-react";

export default function BenefitsGrid() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Jusqu'à 80% d'économies",
      description: "Réduisez votre facture d'électricité jusqu'à 80% grâce aux panneaux solaires."
    },
    {
      icon: Zap,
      title: "Produisez votre propre électricité",
      description: "Devenez autonome et produisez votre électricité verte directement chez vous."
    },
    {
      icon: Sun,
      title: "Autoconsommation & revente",
      description: "Consommez votre production et revendez le surplus à EDF OA."
    },
    {
      icon: TrendingUp,
      title: "Valorisez votre bien",
      description: "Augmentez la valeur de votre logement de 15 à 25% avec des panneaux solaires."
    },
    {
      icon: Leaf,
      title: "100% écologique",
      description: "Énergie propre et renouvelable pour réduire votre empreinte carbone."
    },
    {
      icon: BadgeDollarSign,
      title: "Aides de l'État 2026",
      description: "Bénéficiez des nouvelles aides régionales et nationales : jusqu'à 10 000€."
    }
  ];

  const scrollToForm = () => {
    document.getElementById('eligibility-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#E8F4F8' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[36px] md:text-[42px] font-bold mb-16 leading-tight">
          <span style={{ color: '#0D47A1' }}>Pourquoi passer aux </span>
          <span style={{ color: '#1976D2' }}>panneaux solaires ?</span>
        </h2>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ borderColor: '#c2d5eb' }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: '#E3F2FD' }}
              >
                <benefit.icon className="w-8 h-8" style={{ color: '#1976D2' }} />
              </div>
              
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0D47A1' }}>
                {benefit.title}
              </h3>
              
              <p className="text-base leading-relaxed text-gray-700">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
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
            Vérifier mon éligibilité
          </button>
        </div>
      </div>
    </section>
  );
}