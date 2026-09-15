import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import BookPage from './pages/BookPage'
import TestimonialsPage from './pages/TestimonialsPage'
import AdminPage from './pages/AdminPage'

export type Page = 'home' | 'services' | 'about' | 'gallery' | 'contact' | 'book' | 'testimonials'
export type Lang = 'fr' | 'ar'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [lang, setLang] = useState<Lang>('fr')

  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Page d'administration : accessible uniquement via l'URL directe /admin,
  // volontairement absente du menu de navigation public.
  if (window.location.pathname === '/admin') {
    return <AdminPage />
  }

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh', direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      <Nav page={page} navigate={navigate} lang={lang} setLang={setLang} />
      <main>
        {page === 'home' && <HomePage navigate={navigate} />}
        {page === 'services' && <ServicesPage navigate={navigate} />}
        {page === 'about' && <AboutPage navigate={navigate} />}
        {page === 'gallery' && <GalleryPage />}
        {page === 'contact' && <ContactPage />}
        {page === 'book' && <BookPage />}
        {page === 'testimonials' && <TestimonialsPage />}
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}
