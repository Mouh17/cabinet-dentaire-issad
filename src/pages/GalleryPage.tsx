import { useState } from 'react'
import { BotanicalDivider, BotanicalLeft } from '../components/Botanical'
import case1 from '@/imports/480804126_945736511009595_7667340089062612132_n.jpg'
import case2 from '@/imports/481993162_952875313629048_8154125272468130304_n.jpg'
import case3 from '@/imports/525381249_1056261699957075_2768175709173493173_n.jpg'
import clinic10 from '@/imports/10.jpg'
import clinic20 from '@/imports/20.jpg'
import clinic30 from '@/imports/30.jpg'

const categories = ['Tous', 'Prothèse', 'Soins & Restauration', 'Orthodontie', 'Cabinet']

const cases = [
  {
    category: 'Orthodontie',
    label: 'Correction orthodontique — Cas clinique 01',
    img: case1,
    desc: "Traitement de l'encombrement dentaire et alignement des incisives. Résultat : sourire harmonieux et naturel.",
    isComposite: true,
  },
  {
    category: 'Soins & Restauration',
    label: 'Restauration composite — Cas clinique 02',
    img: case2,
    desc: "Restauration des dents antérieures dégradées par composite photopolymérisable. Résultat esthétique et fonctionnel.",
    isComposite: true,
  },
  {
    category: 'Prothèse',
    label: 'Prothèse céramique — Cas clinique 03',
    img: case3,
    desc: "Reconstruction prothétique des incisives centrales et latérales. Harmonie parfaite avec les dents naturelles.",
    isComposite: true,
  },
  {
    category: 'Cabinet',
    label: 'Notre plateau technique',
    img: clinic10,
    desc: "Instruments et matériaux stérilisés de haute qualité pour des soins sûrs et efficaces.",
    isComposite: false,
  },
  {
    category: 'Cabinet',
    label: 'Salle de soins — Cabinet Dr. ISSAD',
    img: clinic20,
    desc: "Un espace de soins moderne et lumineux, équipé des dernières technologies dentaires.",
    isComposite: false,
  },
  {
    category: 'Cabinet',
    label: 'Fauteuil & équipement numérique',
    img: clinic30,
    desc: "Fauteuil ergonomique et moniteur intra-oral pour visualiser vos soins en temps réel.",
    isComposite: false,
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [lightbox, setLightbox] = useState<null | typeof cases[0]>(null)

  const filtered = activeCategory === 'Tous' ? cases : cases.filter(c => c.category === activeCategory)

  return (
    <>
      {/* Header */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--sage-pale)' }}>
        <div className="absolute right-0 top-0 w-64 h-64 opacity-20 pointer-events-none">
          <BotanicalLeft className="w-full h-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Résultats & transformations</p>
          <h1 className="font-script text-6xl mb-4" style={{ color: 'var(--sage)' }}>Galerie de Soins</h1>
          <BotanicalDivider className="max-w-xs mx-auto mb-6" />
          <p className="font-serif italic text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Cas cliniques réels du Dr. ISSAD Slimene — chaque sourire est une transformation unique.
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

      {/* Gallery grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(c => (
            <article key={c.label}
              className="group rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: 'var(--cream-mid)', border: '1px solid var(--border-light)' }}
              onClick={() => setLightbox(c)}>
              <div className="relative bg-stone-200 overflow-hidden">
                {c.isComposite && (
                  <div className="absolute top-3 left-3 z-10 flex gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ backgroundColor: 'rgba(0,0,0,0.55)', color: 'white' }}>Avant</span>
                    <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ backgroundColor: 'rgba(61,92,53,0.85)', color: 'white' }}>Après</span>
                  </div>
                )}
                <img src={c.img} alt={c.label}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ maxHeight: c.isComposite ? '420px' : '240px', objectFit: 'cover' }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(250,247,242,0.9)' }}>
                    <svg className="w-5 h-5" fill="none" stroke="var(--sage)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-sm font-medium leading-snug" style={{ color: 'var(--sage)' }}>
                    {c.label}
                  </h3>
                  <span className="text-xs ml-2 flex-shrink-0 px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: 'var(--gold-pale)', color: 'var(--gold-dark)' }}>
                    {c.category}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
          onClick={() => setLightbox(null)}>
          <div className="relative max-w-2xl w-full rounded-2xl overflow-hidden"
            style={{ backgroundColor: 'var(--cream)' }}
            onClick={e => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
              ✕
            </button>
            <img src={lightbox.img} alt={lightbox.label} className="w-full object-contain" style={{ maxHeight: '70vh' }} />
            <div className="px-6 py-4">
              <h3 className="font-serif font-medium text-sm mb-1" style={{ color: 'var(--sage)' }}>{lightbox.label}</h3>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <p className="text-xs font-serif italic" style={{ color: 'var(--text-muted)' }}>
          Les photos des cas cliniques sont publiées avec le consentement des patients. Les résultats individuels peuvent varier selon chaque cas.
        </p>
      </div>
    </>
  )
}
