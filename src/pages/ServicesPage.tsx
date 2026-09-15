import { useState } from 'react'
import { Page } from '../App'
import { BotanicalDivider, BotanicalLeft } from '../components/Botanical'
import clinic10 from '@/imports/10.jpg'
import clinic20 from '@/imports/20.jpg'
import clinic30 from '@/imports/30.jpg'
import drPhoto from '@/imports/dr_issad_slimene.jpg'
import case1 from '@/imports/480804126_945736511009595_7667340089062612132_n.jpg'
import case3 from '@/imports/525381249_1056261699957075_2768175709173493173_n.jpg'

interface ServicesPageProps {
  navigate: (p: Page) => void
}

const categories = ['Tous', 'Orthodontie', 'Prothèse', 'Implantologie', 'Soins', 'Radiologie']

const services = [
  {
    category: 'Orthodontie',
    title: 'Orthodontie (ODF)',
    desc: "Correction des malpositions dentaires et des malocclusions par appareillage fixe (bagues) ou amovible. Traitement enfant, adolescent et adulte.",
    img: case1,
    duration: 'Sur devis',
  },
  {
    category: 'Prothèse',
    title: 'Prothèse Dentaire',
    desc: "Conception et pose de couronnes, bridges, inlays, onlays et prothèses amovibles totales ou partielles. Matériaux de haute esthétique.",
    img: case3,
    duration: 'Sur devis',
  },
  {
    category: 'Implantologie',
    title: 'Implantologie Orale',
    desc: "Remplacement de dents manquantes par des implants en titane. Solution durable, confortable et esthétique pour retrouver une mastication normale.",
    img: clinic30,
    duration: '3–6 mois',
  },
  {
    category: 'Soins',
    title: 'Soins Dentaires',
    desc: "Détartrage, bilan bucco-dentaire, traitement des caries par obturations composites, soins des gencives (parodontologie).",
    img: clinic10,
    duration: '30–60 min',
  },
  {
    category: 'Soins',
    title: 'Endodontie',
    desc: "Traitement des canaux radiculaires (dévitalisation) pour sauvegarder les dents infectées ou nécrosées. Technique de pointe, indolore.",
    img: drPhoto,
    duration: '1–2 séances',
  },
  {
    category: 'Radiologie',
    title: 'Radiologie 3D & Numérique',
    desc: "Panoramique, rétro-alvéolaire numérique (RVG), cone beam 3D et scanner intra-oral pour un diagnostic complet et précis.",
    img: clinic20,
    duration: 'Immédiat',
  },
]

export default function ServicesPage({ navigate }: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous' ? services : services.filter(s => s.category === activeCategory)

  return (
    <>
      {/* Header */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--sage-pale)' }}>
        <div className="absolute right-0 top-0 w-64 h-64 opacity-20 pointer-events-none">
          <BotanicalLeft className="w-full h-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Ce que nous proposons</p>
          <h1 className="font-script text-6xl mb-4" style={{ color: 'var(--sage)' }}>Nos Prestations</h1>
          <BotanicalDivider className="max-w-xs mx-auto mb-6" />
          <p className="font-serif italic text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Six spécialités pour une prise en charge complète de votre santé bucco-dentaire.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-20 z-40 py-4 px-6"
        style={{ backgroundColor: 'rgba(250,247,242,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map(c => (
            <button key={c} onClick={() => setActiveCategory(c)}
              className="flex-shrink-0 px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all"
              style={{
                backgroundColor: activeCategory === c ? 'var(--sage)' : 'var(--cream-mid)',
                color: activeCategory === c ? 'white' : 'var(--text-muted)',
                border: activeCategory === c ? '1px solid var(--sage)' : '1px solid var(--border)',
              }}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(s => (
            <article key={s.title}
              className="group rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: 'var(--cream-mid)', border: '1px solid var(--border-light)' }}>
              <div className="relative h-52 bg-stone-200 overflow-hidden">
                <img src={s.img} alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }} />
                <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full font-medium"
                  style={{ backgroundColor: 'rgba(250,247,242,0.92)', color: 'var(--sage)', border: '1px solid var(--border-light)' }}>
                  {s.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif font-medium text-base leading-snug" style={{ color: 'var(--sage)' }}>
                    {s.title}
                  </h3>
                  <span className="text-xs ml-3 flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }}>{s.duration}</span>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
                <button onClick={() => navigate('book')}
                  className="text-xs tracking-wide flex items-center gap-1.5 transition-all group-hover:gap-3"
                  style={{ color: 'var(--gold)' }}>
                  Prendre rendez-vous
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Hours + CTA */}
      <section className="mx-6 mb-16 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-3">
        {/* Hours */}
        <div className="p-10 lg:col-span-1" style={{ backgroundColor: 'var(--sage-pale)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', borderLeft: '1px solid var(--border-light)' }}>
          <h3 className="font-script text-3xl mb-5" style={{ color: 'var(--sage)' }}>Horaires</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span style={{ color: 'var(--text-muted)' }}>Samedi – Jeudi</span>
              <span className="font-medium" style={{ color: 'var(--sage)' }}>08H30 – 18H00</span>
            </div>
            <div className="h-px" style={{ backgroundColor: 'var(--border)' }} />
            <div className="flex justify-between text-sm">
              <span style={{ color: 'var(--text-muted)' }}>Vendredi</span>
              <span style={{ color: 'var(--text-muted)' }}>Fermé</span>
            </div>
          </div>
          <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>📍 09 Rue commandant FERRADJ Ex GAMBETTA · Sidi-Bel-Abbes</p>
            <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>📞 0558 35 28 13</p>
          </div>
        </div>
        {/* CTA */}
        <div className="p-10 lg:col-span-2 flex flex-col justify-center" style={{ backgroundColor: 'var(--sage)' }}>
          <h3 className="font-script text-4xl mb-3" style={{ color: 'var(--gold-light)' }}>Une question sur un soin ?</h3>
          <p className="text-sm mb-8 opacity-70" style={{ color: 'var(--cream)' }}>
            Notre équipe est disponible pour vous orienter vers le traitement adapté à vos besoins.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:0558352813"
              className="px-8 py-3 rounded-full text-sm font-medium"
              style={{ backgroundColor: 'white', color: 'var(--sage)' }}>
              📞 0558 35 28 13
            </a>
            <button onClick={() => navigate('book')}
              className="px-8 py-3 rounded-full text-sm font-medium"
              style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
              Prendre RDV
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
