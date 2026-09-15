import { useState } from 'react'
import { Page, Lang } from '../App'
import { LeafIcon } from './Botanical'

interface NavProps {
  page: Page
  navigate: (p: Page) => void
  lang: Lang
  setLang: (l: Lang) => void
}

const links: { label: string; labelAr: string; page: Page }[] = [
  { label: 'Accueil', labelAr: 'الرئيسية', page: 'home' },
  { label: 'Services', labelAr: 'الخدمات', page: 'services' },
  { label: 'Galerie', labelAr: 'المعرض', page: 'gallery' },
  { label: 'À propos', labelAr: 'عن الطبيب', page: 'about' },
  { label: 'Témoignages', labelAr: 'آراء المرضى', page: 'testimonials' },
  { label: 'Contact', labelAr: 'اتصل بنا', page: 'contact' },
]

export default function Nav({ page, navigate, lang, setLang }: NavProps) {
  const [open, setOpen] = useState(false)
  const isAr = lang === 'ar'

  return (
    <header style={{ backgroundColor: 'var(--cream)', borderBottom: '1px solid var(--border-light)' }}
      className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <button onClick={() => navigate('home')} className="flex items-center gap-2 group">
          <LeafIcon className="w-6 h-6 transition-transform group-hover:scale-110" style={{ color: 'var(--gold)' }} />
          <div className="flex flex-col leading-none">
            <span className="font-script text-2xl" style={{ color: 'var(--sage)' }}>Dr. ISSAD Slimene</span>
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--text-muted)', fontSize: '9px' }}>
              Cabinet Dentaire
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <button key={l.page} onClick={() => navigate(l.page)}
              className="text-sm tracking-wide transition-colors relative group"
              style={{ color: page === l.page ? 'var(--gold)' : 'var(--text-muted)', fontWeight: page === l.page ? 500 : 400 }}>
              {isAr ? l.labelAr : l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: 'var(--gold)' }} />
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language toggle */}
          <div className="flex items-center rounded-full overflow-hidden" style={{ border: '1px solid var(--border)', fontSize: '12px' }}>
            <button onClick={() => setLang('fr')}
              className="px-3 py-1.5 transition-colors"
              style={{ backgroundColor: lang === 'fr' ? 'var(--sage)' : 'transparent', color: lang === 'fr' ? 'white' : 'var(--text-muted)' }}>
              FR
            </button>
            <button onClick={() => setLang('ar')}
              className="px-3 py-1.5 transition-colors"
              style={{ backgroundColor: lang === 'ar' ? 'var(--sage)' : 'transparent', color: lang === 'ar' ? 'white' : 'var(--text-muted)' }}>
              AR
            </button>
          </div>

          {/* CTA */}
          <button onClick={() => navigate('book')}
            className="px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
            {isAr ? 'احجز موعداً' : 'Prendre RDV'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)}>
          <span className="block w-6 h-px transition-all" style={{ backgroundColor: 'var(--sage)', transform: open ? 'rotate(45deg) translate(2px, 2px)' : 'none' }} />
          <span className="block w-6 h-px transition-all" style={{ backgroundColor: 'var(--sage)', opacity: open ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all" style={{ backgroundColor: 'var(--sage)', transform: open ? 'rotate(-45deg) translate(2px, -2px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden px-6 pb-6 flex flex-col gap-4" style={{ borderTop: '1px solid var(--border-light)', backgroundColor: 'var(--cream)' }}>
          {links.map(l => (
            <button key={l.page} onClick={() => { navigate(l.page); setOpen(false) }}
              className="text-left text-sm py-2 tracking-wide"
              style={{ color: page === l.page ? 'var(--gold)' : 'var(--text-muted)', borderBottom: '1px solid var(--border-light)' }}>
              {isAr ? l.labelAr : l.label}
            </button>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center rounded-full overflow-hidden" style={{ border: '1px solid var(--border)', fontSize: '12px' }}>
              <button onClick={() => setLang('fr')} className="px-3 py-1.5"
                style={{ backgroundColor: lang === 'fr' ? 'var(--sage)' : 'transparent', color: lang === 'fr' ? 'white' : 'var(--text-muted)' }}>FR</button>
              <button onClick={() => setLang('ar')} className="px-3 py-1.5"
                style={{ backgroundColor: lang === 'ar' ? 'var(--sage)' : 'transparent', color: lang === 'ar' ? 'white' : 'var(--text-muted)' }}>AR</button>
            </div>
            <button onClick={() => { navigate('book'); setOpen(false) }}
              className="flex-1 py-2.5 rounded-full text-sm font-medium text-center"
              style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
              {isAr ? 'احجز موعداً' : 'Prendre RDV'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
