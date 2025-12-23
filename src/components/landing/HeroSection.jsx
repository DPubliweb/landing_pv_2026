import React from "react";
import EligibilityForm from "./EligibilityForm";

export default function HeroSection() {
  return (
    <section className="py-2 md:py-8 px-3 md:px-6" style={{ backgroundColor: '#E3F2FD' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Top Bar with Official Logos */}
        <div className="bg-white rounded-lg md:rounded-xl shadow-md p-2 md:p-4 mb-3 md:mb-6 flex justify-center items-center gap-3 md:gap-12">
          <div className="text-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694a53c214a8601edd01e0b0/feafc4f2f_Logo_MTE.png"
              alt="Ministère Transition Écologique"
              className="h-[35px] md:h-[70px] object-contain mx-auto" />

          </div>

          <div className="text-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_67d6fe733e18abac6832bd29/2c943b4aa_design_sans_titre_10.png"
              alt="RGE"
              className="h-[35px] md:h-[70px] object-contain mx-auto" />

          </div>

          <div className="text-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694a53c214a8601edd01e0b0/3ecfa0dea_Electricite_de_France_logosvg.png"
              alt="EDF"
              className="h-[35px] md:h-[70px] object-contain mx-auto" />

          </div>
        </div>

        {/* Main Headline with PAC Image */}
        <div className="mb-3 md:mb-6 flex items-center gap-2 md:gap-4">
          <h1
            className="text-[20px] md:text-[42px] leading-tight flex-1"
            style={{
              fontWeight: 800,
              color: '#0D47A1',
              fontFamily: 'Manrope, sans-serif',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>

            Profitez des aides de l'État pour l'installation de vos{' '}
            <span
              style={{
                fontWeight: 900,
                color: '#0D47A1',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
              panneaux solaires
            </span>
            {' '}en 2026
          </h1>
          <div className="flex-shrink-0">
            <img
              src="https://aideregionales.com/1s6ajoj-panneaux-solaire_10bm0bm0bm08o00001g01o.jpg"
              alt="Panneaux solaires"
              className="h-[70px] md:h-[180px] w-auto object-contain rounded-lg shadow-lg" />

          </div>
        </div>

        {/* Subheadline */}
        <h2
          className="text-center text-[14px] md:text-[28px] leading-snug mb-3 md:mb-8 px-2"
          style={{ fontWeight: 700 }}>

          <span style={{ color: '#0D47A1' }}>Testez votre éligibilité en </span>
          <span style={{ color: '#1976D2' }} className="">2 questions</span>
          <span style={{ color: '#0D47A1' }} className=""> et bénéficiez d'une installation </span>
          <span style={{ color: '#1976D2' }}>autofinancée</span>
          <span style={{ color: '#0D47A1' }}> grâce aux aides régionales et nationales 2026</span>
        </h2>

        {/* Eligibility Form */}
        <div id="eligibility-form" className="mb-4 md:mb-8">
          <EligibilityForm />
        </div>

        {/* Partner Logos - Only TotalEnergies and Engie */}
        <div className="flex justify-center gap-4 md:gap-8 mb-4 md:mb-8 max-w-[600px] mx-auto">
          <div className="flex items-center justify-center bg-white rounded-lg md:rounded-xl p-3 md:p-6 shadow-sm flex-1">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_67d6fe733e18abac6832bd29/5bb3d9233_logo_totalenergies.png"
              alt="TotalEnergies"
              className="h-[35px] md:h-[65px] w-auto object-contain" />

          </div>
          <div className="flex items-center justify-center bg-white rounded-lg md:rounded-xl p-3 md:p-6 shadow-sm flex-1">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_67d6fe733e18abac6832bd29/455a11f90_logo_engie.png"
              alt="Engie"
              className="h-[35px] md:h-[65px] w-auto object-contain" />

          </div>
        </div>

        {/* Main CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={() => document.getElementById('eligibility-form').scrollIntoView()}
            className="px-6 md:px-12 py-3 md:py-5 text-white text-base md:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{
              backgroundColor: '#4CAF50',
              borderRadius: '10px',
              fontFamily: 'Rubik, sans-serif'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#388E3C'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}>

            Je teste mon éligibilité
          </button>
        </div>
      </div>
    </section>);

}