import { useState } from 'react'
import { Page } from '../App'
import { BotanicalDivider, BotanicalLeft, GoldDivider } from '../components/Botanical'
import drPhoto from '@/imports/dr_issad_slimene.jpg'
import clinic20 from '@/imports/20.jpg'
import clinic30 from '@/imports/30.jpg'

interface AboutPageProps {
  navigate: (p: Page) => void
}

const values = [
  { title: "Douceur & Bienveillance", desc: "Chaque patient est accueilli avec chaleur et empathie, dans un cadre apaisant conçu pour réduire l'anxiété dentaire." },
  { title: "Expertise & Précision", desc: "Des techniques maîtrisées et une formation continue pour des soins de la plus haute qualité." },
  { title: "Technologie de pointe", desc: "Panoramique, cone beam 3D, scanner intra-oral RVG — pour un diagnostic précis et des soins modernes." },
  { title: "Transparence", desc: "Devis détaillé avant chaque traitement. Vous êtes informé et co-acteur de vos soins." },
]

const services = [
  'Orthodontie (ODF)',
  'Prothèse dentaires',
  'Implantologie orale',
  'Soins dentaire',
  'Endodontie',
  'Radiologie (3D · Panoramique · RVG · Scan intra-oral)',
]

export default function AboutPage({ navigate }: AboutPageProps) {
  const [bioExpanded, setBioExpanded] = useState(false)

  return (
    <>
      {/* Header */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--sage-pale)' }}>
        <div className="absolute right-0 top-0 w-64 h-64 opacity-20 pointer-events-none">
          <BotanicalLeft className="w-full h-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Notre cabinet</p>
          <h1 className="font-script text-6xl mb-4" style={{ color: 'var(--sage)' }}>À propos du Dr. ISSAD</h1>
          <BotanicalDivider className="max-w-xs mx-auto" />
        </div>
      </section>

      {/* Doctor section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Photo */}
          <div className="lg:col-span-2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl pointer-events-none"
              style={{ border: '1.5px solid var(--gold-light)', borderRadius: '1rem' }} />
            <img src={drPhoto} alt="Dr. ISSAD Slimene en consultation au cabinet"
              className="relative w-full rounded-2xl shadow-xl object-cover"
              style={{ maxHeight: '580px', objectPosition: 'top center' }} />
            <div className="absolute -bottom-8 -right-4 p-5 rounded-xl shadow-xl max-w-xs"
              style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
              <div className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>Spécialités</div>
              <div className="flex flex-wrap gap-2">
                {['Orthodontie', 'Implantologie', 'Endodontie', 'Prothèse'].map(s => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--sage-pale)', color: 'var(--sage)', border: '1px solid var(--border)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3 pt-4">
            <h2 className="font-script text-4xl mb-1" style={{ color: 'var(--sage)' }}>Dr. ISSAD Slimene</h2>
            <p className="font-serif italic mb-6" style={{ color: 'var(--gold)' }}>
              Chirurgien-Dentiste · Cabinet Dentaire — Sidi-Bel-Abbes
            </p>
            <GoldDivider />

            <div className="mt-6 space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                Passionné par la dentisterie, le Dr. ISSAD Slimene a fondé son cabinet avec une vision claire : offrir des soins d'excellence dans un environnement moderne et bienveillant, au cœur de Sidi-Bel-Abbes.
              </p>
              <p>
                Son cabinet est équipé des technologies les plus avancées — radiologie 3D, cone beam, scanner intra-oral — pour garantir des diagnostics précis et des traitements adaptés à chaque patient.
              </p>

              {bioExpanded && (
                <div className="space-y-4">
                  <p>
                    Sa philosophie du soin repose sur l'écoute : chaque consultation commence par une conversation approfondie pour comprendre les attentes, les craintes et les objectifs du patient. Un plan de traitement est ensuite élaboré de manière transparente.
                  </p>
                  <p>
                    Le Dr. ISSAD propose une prise en charge complète : des soins de routine à l'implantologie, de l'orthodontie à l'endodontie avancée. Chaque traitement est réalisé avec le souci du détail et le confort du patient.
                  </p>
                  <p>
                    L'équipe du cabinet veille à ce que chaque visite soit une expérience positive — du premier appel à la fin du traitement. La confiance et la relation patient-praticien sont au cœur de tout.
                  </p>
                </div>
              )}

              <button onClick={() => setBioExpanded(!bioExpanded)}
                className="flex items-center gap-2 text-xs tracking-wide pt-2"
                style={{ color: 'var(--gold)' }}>
                {bioExpanded ? 'Réduire' : 'Lire la biographie complète'}
                <svg className="w-3.5 h-3.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  style={{ transform: bioExpanded ? 'rotate(180deg)' : 'none' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
            </div>

            {/* Services list */}
            <div className="mt-10 p-6 rounded-2xl" style={{ backgroundColor: 'var(--sage-pale)', border: '1px solid var(--border-light)' }}>
              <h3 className="font-serif font-medium text-sm mb-4" style={{ color: 'var(--sage)' }}>
                Nos Prestations
              </h3>
              <ul className="space-y-3">
                {services.map(s => (
                  <li key={s} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div className="mt-6 p-6 rounded-2xl" style={{ backgroundColor: 'var(--gold-pale)', border: '1px solid var(--gold-light)' }}>
              <h3 className="font-serif font-medium text-sm mb-3" style={{ color: 'var(--sage)' }}>
                Horaires d'ouverture
              </h3>
              <div className="space-y-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>
                <div className="flex justify-between">
                  <span>Samedi – Jeudi</span>
                  <span className="font-medium" style={{ color: 'var(--sage)' }}>08H30 – 18H00</span>
                </div>
                <div className="flex justify-between">
                  <span>Vendredi</span>
                  <span className="font-medium" style={{ color: 'var(--text-muted)' }}>Fermé</span>
                </div>
              </div>
            </div>

            <button onClick={() => navigate('book')}
              className="mt-8 px-8 py-3 rounded-full text-sm font-medium"
              style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
              Consulter le Dr. ISSAD →
            </button>
          </div>
        </div>
      </section>

      {/* Clinic photos */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--gold)' }}>Notre espace</p>
          <h2 className="font-script text-4xl" style={{ color: 'var(--sage)' }}>Le Cabinet</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden h-72 bg-stone-200">
            <img src={clinic20} alt="Salle de soins — Cabinet Dr. ISSAD Slimene, Sidi-Bel-Abbes"
              className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden h-72 bg-stone-200">
            <img src={clinic30} alt="Fauteuil dentaire moderne — Cabinet Dr. ISSAD Slimene"
              className="w-full h-full object-cover" />
          </div>
        </div>
        <p className="text-center text-xs mt-4 font-serif italic" style={{ color: 'var(--text-muted)' }}>
          09 Rue commandant FERRADJ Ex GAMBETTA · Sidi-Bel-Abbes
        </p>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--sage-pale)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Notre philosophie</p>
            <h2 className="font-script text-5xl" style={{ color: 'var(--sage)' }}>Nos Valeurs</h2>
            <BotanicalDivider className="max-w-xs mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="p-6 rounded-2xl transition-all hover:-translate-y-1"
                style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border-light)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-serif text-lg font-semibold"
                  style={{ backgroundColor: 'var(--gold-pale)', color: 'var(--gold-dark)' }}>
                  {i + 1}
                </div>
                <h3 className="font-serif font-medium text-base mb-2" style={{ color: 'var(--sage)' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
