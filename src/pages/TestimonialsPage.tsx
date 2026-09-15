import { useState } from 'react'
import { BotanicalDivider, BotanicalLeft, BotanicalRight } from '../components/Botanical'

const testimonials = [
  {
    name: 'Amira B.',
    quote: "Un cabinet d'une douceur et d'un professionnalisme rares. Le Dr. ISSAD a transformé mon sourire et ma confiance en moi. Je recommande les yeux fermés — c'est une vraie artiste du sourire.",
    rating: 5,
    treatment: 'Blanchiment & Facettes',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
  },
  {
    name: 'Karim D.',
    quote: "Peur du dentiste toute ma vie… jusqu'à cette consultation. L'équipe est rassurante, les soins indolores. Le cabinet ressemble à un spa, pas à une clinique. Je me sens entre de bonnes mains.",
    rating: 5,
    treatment: 'Soins de routine',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
  },
  {
    name: 'Nadia M.',
    quote: "Mon traitement d'orthodontie invisible a été suivi avec beaucoup d'attention et de précision. Les résultats sont au-delà de mes espérances ! Mon sourire a changé ma vie.",
    rating: 5,
    treatment: 'Orthodontie invisible',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format',
  },
  {
    name: 'Youcef H.',
    quote: "J'ai fait poser deux implants dentaires et le résultat est parfait. La douleur était minime, le suivi excellent. Je mange normalement depuis le premier mois. Merci infiniment.",
    rating: 5,
    treatment: 'Implants dentaires',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format',
  },
  {
    name: 'Sonia R.',
    quote: "Le blanchiment en cabinet a donné des résultats immédiats et naturels. Le Dr. ISSAD a pris soin de tout expliquer avant de commencer. Un vrai luxe de dentisterie.",
    rating: 5,
    treatment: 'Blanchiment dentaire',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&auto=format',
  },
  {
    name: 'Farid K.',
    quote: "Le cabinet est magnifique, lumineux et apaisant. Dès l'accueil, on se sent bien. Le Dr. ISSAD est très à l'écoute et ne pratique aucun soin inutile. Honnêteté et excellence.",
    rating: 5,
    treatment: 'Bilan & soins de routine',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format',
  },
]

export default function TestimonialsPage() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <>
      {/* Header */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--sage-pale)' }}>
        <div className="absolute right-0 top-0 w-64 h-64 opacity-20 pointer-events-none">
          <BotanicalLeft className="w-full h-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Ils nous font confiance</p>
          <h1 className="font-script text-6xl mb-4" style={{ color: 'var(--sage)' }}>Témoignages</h1>
          <BotanicalDivider className="max-w-xs mx-auto mb-6" />
          <p className="font-serif italic text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            La satisfaction de nos patients est notre plus belle récompense. Voici ce qu'ils partagent.
          </p>
        </div>
      </section>

      {/* Featured testimonial carousel */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <BotanicalLeft className="absolute -left-8 top-0 w-72 h-72" />
          <BotanicalRight className="absolute -right-8 bottom-0 w-72 h-72" />
        </div>
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative rounded-3xl p-10 md:p-16 transition-all"
            style={{ backgroundColor: 'var(--cream-mid)', border: '1px solid var(--border-light)', boxShadow: '0 12px 50px rgba(61,92,53,0.08)' }}>
            <div className="font-script text-9xl absolute top-2 left-8 leading-none pointer-events-none"
              style={{ color: 'var(--gold-light)', opacity: 0.5 }}>"</div>

            <div className="flex justify-center mb-5">
              {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="var(--gold)" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>

            <p className="font-serif italic text-xl md:text-2xl leading-relaxed mb-10 relative z-10 text-center"
              style={{ color: 'var(--text)' }}>
              "{testimonials[activeIdx].quote}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <img src={testimonials[activeIdx].img} alt={testimonials[activeIdx].name}
                className="w-14 h-14 rounded-full object-cover"
                style={{ border: '2px solid var(--gold-light)' }} />
              <div>
                <div className="font-medium" style={{ color: 'var(--sage)' }}>{testimonials[activeIdx].name}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--gold)' }}>{testimonials[activeIdx].treatment}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => setActiveIdx((activeIdx - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
              style={{ border: '1.5px solid var(--border)', color: 'var(--text-muted)' }}>
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveIdx(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === activeIdx ? '24px' : '8px',
                    height: '8px',
                    backgroundColor: i === activeIdx ? 'var(--gold)' : 'var(--border)',
                  }} />
              ))}
            </div>
            <button onClick={() => setActiveIdx((activeIdx + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
              style={{ border: '1.5px solid var(--border)', color: 'var(--text-muted)' }}>
              →
            </button>
          </div>
        </div>
      </section>

      {/* All testimonials grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="font-script text-4xl text-center mb-12" style={{ color: 'var(--sage)' }}>Tous les avis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className="p-6 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: activeIdx === i ? 'var(--sage-pale)' : 'var(--cream-mid)',
                border: `1px solid ${activeIdx === i ? 'var(--sage)' : 'var(--border-light)'}`,
              }}
              onClick={() => { setActiveIdx(i); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4" fill="var(--gold)" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="font-serif italic text-sm leading-relaxed mb-5" style={{ color: 'var(--text)' }}>
                "{t.quote.substring(0, 120)}…"
              </p>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-9 h-9 rounded-full object-cover" style={{ border: '1.5px solid var(--gold-light)' }} />
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--sage)' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.treatment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-6 mb-16 rounded-3xl p-12 text-center" style={{ backgroundColor: 'var(--gold-pale)', border: '1px solid var(--gold-light)' }}>
        <h2 className="font-script text-4xl mb-3" style={{ color: 'var(--sage)' }}>
          Rejoignez nos patients satisfaits
        </h2>
        <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
          Votre sourire mérite les meilleurs soins. Prenez rendez-vous dès aujourd'hui.
        </p>
        <a href="#"
          onClick={e => e.preventDefault()}
          className="inline-block px-10 py-3.5 rounded-full text-sm font-medium"
          style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
          Prendre rendez-vous
        </a>
      </section>
    </>
  )
}
