import { useState } from 'react'
import { Page } from '../App'
import { BotanicalLeft, BotanicalRight, BotanicalDivider, GoldDivider } from '../components/Botanical'
import clinic20 from '@/imports/20.jpg'
import clinic30 from '@/imports/30.jpg'
import instruments from '@/imports/10.jpg'
import drPhoto from '@/imports/dr_issad_slimene.jpg'
import beforeAfter1 from '@/imports/480804126_945736511009595_7667340089062612132_n.jpg'

interface HomePageProps {
  navigate: (p: Page) => void
}

const services = [
  {
    title: 'Orthodontie (ODF)',
    desc: "Correction des malpositions dentaires par bagues ou aligneurs pour un sourire aligné et harmonieux.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/>
      </svg>
    ),
    img: clinic30,
  },
  {
    title: 'Prothèse Dentaire',
    desc: "Couronnes, bridges et prothèses amovibles sur-mesure pour restaurer l'esthétique et la fonction.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    img: clinic20,
  },
  {
    title: 'Implantologie Orale',
    desc: "Remplacement de dents manquantes par des implants en titane — solution durable et naturelle.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    img: instruments,
  },
  {
    title: 'Radiologie 3D & Numérique',
    desc: "Panoramique, RVG, scan intra-oral et cone beam 3D pour un diagnostic précis et complet.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    img: clinic20,
  },
]

const testimonials = [
  {
    name: 'Amira B.',
    quote: "Un cabinet d'une douceur et d'un professionnalisme rares. Le Dr. ISSAD a transformé mon sourire et ma confiance en moi. Je recommande les yeux fermés.",
    rating: 5,
    treatment: 'Orthodontie',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
  },
  {
    name: 'Karim D.',
    quote: "Peur du dentiste toute ma vie… jusqu'à cette consultation. L'équipe est rassurante, les soins indolores. Le cabinet est moderne et impeccable.",
    rating: 5,
    treatment: 'Soins dentaire',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
  },
  {
    name: 'Nadia M.',
    quote: "Mon traitement d'orthodontie a été suivi avec beaucoup d'attention et de précision. Les résultats sont au-delà de mes espérances !",
    rating: 5,
    treatment: 'Prothèse dentaire',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format',
  },
]

export default function HomePage({ navigate }: HomePageProps) {
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const t = testimonials[testimonialIdx]

  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-stone-300">
          <img src={clinic30} alt="Cabinet dentaire Dr. ISSAD Slimene, Sidi-Bel-Abbes"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(250,247,242,0.97) 40%, rgba(250,247,242,0.65) 65%, rgba(250,247,242,0.1) 100%)' }} />
        </div>

        <div className="absolute top-8 right-0 w-72 h-72 opacity-25 pointer-events-none">
          <BotanicalRight className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 right-16 w-48 h-48 opacity-15 pointer-events-none">
          <BotanicalLeft className="w-full h-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
              Cabinet Dentaire · Sidi-Bel-Abbes
            </p>
            <h1 className="font-script leading-tight mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: 'var(--sage)' }}>
              Votre Sourire,<br />Notre Art
            </h1>
            <p className="font-serif italic text-lg leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>
              Dr. ISSAD Slimene
            </p>
            <p className="text-xs tracking-widest uppercase mb-8" style={{ color: 'var(--gold)' }}>
              Chirurgien-Dentiste
            </p>
            <p className="text-sm leading-relaxed mb-10 max-w-md" style={{ color: 'var(--text-muted)' }}>
              Un cabinet moderne et bienveillant, équipé des dernières technologies, pour des soins dentaires d'excellence à Sidi-Bel-Abbes.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigate('book')}
                className="px-8 py-3.5 rounded-full font-medium tracking-wide text-sm transition-all hover:opacity-90 hover:shadow-xl"
                style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
                Prendre rendez-vous
              </button>
              <button onClick={() => navigate('services')}
                className="px-8 py-3.5 rounded-full font-medium tracking-wide text-sm transition-colors"
                style={{ border: '1.5px solid var(--sage)', color: 'var(--sage)' }}
                onMouseEnter={e => { (e.currentTarget).style.backgroundColor = 'var(--sage)'; (e.currentTarget).style.color = 'white' }}
                onMouseLeave={e => { (e.currentTarget).style.backgroundColor = 'transparent'; (e.currentTarget).style.color = 'var(--sage)' }}>
                Découvrir nos soins
              </button>
            </div>

            <div className="flex gap-10 mt-14">
              {[['6', 'Spécialités'], ['Lun–Sam', 'Ouvert'], ['Sidi-Bel-Abbes', 'Localisation']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-serif text-xl font-semibold" style={{ color: 'var(--sage)' }}>{n}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── Services preview ───── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Ce que nous offrons</p>
          <h2 className="font-script text-5xl mb-4" style={{ color: 'var(--sage)' }}>Nos Prestations</h2>
          <BotanicalDivider className="max-w-sm mx-auto" />
          <p className="font-serif italic text-base mt-6 max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
            De la prévention à la reconstruction, nous vous accompagnons à chaque étape de votre parcours dentaire.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(s => (
            <div key={s.title} className="group rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: 'var(--cream-mid)', border: '1px solid var(--border-light)' }}>
              <div className="relative h-48 bg-stone-200 overflow-hidden">
                <img src={s.img} alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(61,92,53,0.5), transparent)' }} />
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
                  {s.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif font-medium text-base mb-2" style={{ color: 'var(--sage)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
                <button onClick={() => navigate('services')}
                  className="text-xs tracking-wide flex items-center gap-1.5 transition-all group-hover:gap-2.5"
                  style={{ color: 'var(--gold)' }}>
                  En savoir plus
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button onClick={() => navigate('services')}
            className="px-8 py-3 rounded-full text-sm font-medium tracking-wide"
            style={{ border: '1.5px solid var(--gold)', color: 'var(--gold)' }}>
            Voir toutes nos prestations →
          </button>
        </div>
      </section>

      {/* ───── About teaser ───── */}
      <section className="py-20 overflow-hidden" style={{ backgroundColor: 'var(--sage-pale)' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl"
              style={{ border: '1.5px solid var(--gold-light)', borderRadius: '1rem' }} />
            <img src={drPhoto} alt="Dr. ISSAD Slimene en consultation"
              className="relative rounded-2xl w-full object-cover shadow-xl"
              style={{ maxHeight: '540px', objectPosition: 'top' }} />
            <div className="absolute -bottom-6 -right-6 px-6 py-4 rounded-xl shadow-lg"
              style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
              <div className="font-script text-xl" style={{ color: 'var(--sage)' }}>Dr. ISSAD Slimene</div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Chirurgien-Dentiste · Sidi-Bel-Abbes</div>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>À propos</p>
            <h2 className="font-script text-5xl mb-6" style={{ color: 'var(--sage)' }}>Une passion pour l'excellence</h2>
            <GoldDivider />
            <p className="font-serif italic leading-relaxed mt-4 mb-6 text-base" style={{ color: 'var(--text-muted)' }}>
              "Je crois que chaque patient mérite d'être reçu avec douceur, écouté avec attention et soigné avec précision."
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Le Dr. ISSAD Slimene exerce au sein d'un cabinet moderne équipé des dernières technologies — panoramique, cone beam 3D, scanner intra-oral — pour offrir des soins de précision dans un cadre bienveillant.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              Son approche : écoute, transparence et excellence technique au service de votre sourire.
            </p>
            <button onClick={() => navigate('about')}
              className="px-8 py-3 rounded-full text-sm font-medium"
              style={{ backgroundColor: 'var(--sage)', color: 'white' }}>
              En savoir plus →
            </button>
          </div>
        </div>
      </section>

      {/* ───── Gallery teaser ───── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Transformations réelles</p>
          <h2 className="font-script text-5xl mb-4" style={{ color: 'var(--sage)' }}>Avant / Après</h2>
          <BotanicalDivider className="max-w-xs mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 max-w-xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg cursor-pointer" onClick={() => navigate('gallery')}
            style={{ border: '1px solid var(--border-light)' }}>
            <img src={beforeAfter1} alt="Cas clinique — Avant/Après orthodontie — Dr. ISSAD Slimene"
              className="w-full object-cover" />
            <div className="p-4 text-center" style={{ backgroundColor: 'var(--cream-mid)' }}>
              <p className="text-sm font-serif italic" style={{ color: 'var(--sage)' }}>
                Traitement orthodontique — Dr. ISSAD S.
              </p>
              <button className="mt-2 text-xs" style={{ color: 'var(--gold)' }}>
                Voir toute la galerie →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--sage-pale)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <BotanicalLeft className="absolute -left-8 top-0 w-64 h-64" />
          <BotanicalRight className="absolute -right-8 bottom-0 w-64 h-64" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Ce qu'ils disent</p>
          <h2 className="font-script text-5xl mb-4" style={{ color: 'var(--sage)' }}>Témoignages</h2>
          <BotanicalDivider className="max-w-sm mx-auto mb-12" />

          <div className="relative rounded-3xl p-10 md:p-14"
            style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border-light)', boxShadow: '0 8px 40px rgba(61,92,53,0.08)' }}>
            <div className="font-script text-8xl absolute top-4 left-8 leading-none pointer-events-none" style={{ color: 'var(--gold-light)', opacity: 0.6 }}>"</div>
            <div className="flex justify-center mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="var(--gold)" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="font-serif italic text-lg md:text-xl leading-relaxed mb-8 relative z-10" style={{ color: 'var(--text)' }}>
              "{t.quote}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover"
                style={{ border: '2px solid var(--gold-light)' }} />
              <div className="text-left">
                <div className="font-medium text-sm" style={{ color: 'var(--sage)' }}>{t.name}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.treatment}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTestimonialIdx(i)}
                className="rounded-full transition-all"
                style={{ width: i === testimonialIdx ? '24px' : '8px', height: '8px', backgroundColor: i === testimonialIdx ? 'var(--gold)' : 'var(--border)' }} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA Banner ───── */}
      <section className="mx-6 mb-12 rounded-3xl overflow-hidden relative" style={{ backgroundColor: 'var(--sage)' }}>
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <BotanicalLeft className="absolute -left-4 -bottom-4 w-56 h-56" />
          <BotanicalRight className="absolute -right-4 -top-4 w-56 h-56" />
        </div>
        <div className="relative px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-script text-4xl md:text-5xl mb-2" style={{ color: 'var(--gold-light)' }}>
              Prêt pour votre consultation ?
            </h3>
            <p className="text-sm opacity-70" style={{ color: 'var(--cream)' }}>
              Appelez le <strong>0558 35 28 13</strong> ou prenez rendez-vous en ligne.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:0558352813"
              className="flex-shrink-0 px-8 py-3.5 rounded-full font-medium text-sm tracking-wide"
              style={{ backgroundColor: 'white', color: 'var(--sage)' }}>
              📞 0558 35 28 13
            </a>
            <button onClick={() => navigate('book')}
              className="flex-shrink-0 px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:opacity-90"
              style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
              Réserver en ligne
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
