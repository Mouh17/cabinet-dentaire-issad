import { useState } from 'react'
import { BotanicalDivider, BotanicalLeft } from '../components/Botanical'
import { supabase } from '../lib/supabaseClient'

const reasons = [
  'Prise de rendez-vous',
  'Demande de devis',
  'Question sur un traitement',
  'Urgence dentaire',
  'Autre',
]

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', reason: '', message: '' })
  const [sent, setSent] = useState(false)
  const [envoiEnCours, setEnvoiEnCours] = useState(false)
  const [erreurEnvoi, setErreurEnvoi] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnvoiEnCours(true)
    setErreurEnvoi('')

    const { error } = await supabase.from('messages_contact').insert({
      prenom: form.firstName,
      nom: form.lastName,
      email: form.email || null,
      telephone: form.phone,
      raison: form.reason || null,
      message: form.message || null,
    })

    setEnvoiEnCours(false)

    if (error) {
      console.error(error)
      setErreurEnvoi("Une erreur est survenue. Merci de réessayer, ou de nous appeler directement.")
      return
    }

    setSent(true)
  }

  const inputStyle = {
    backgroundColor: 'var(--cream)',
    border: '1px solid var(--border)',
    borderRadius: '10px',
    color: 'var(--text)',
    fontSize: '14px',
    padding: '12px 16px',
    width: '100%',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    fontSize: '11px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-muted)',
    display: 'block',
    marginBottom: '6px',
  }

  return (
    <>
      {/* Header */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--sage-pale)' }}>
        <div className="absolute right-0 top-0 w-64 h-64 opacity-20 pointer-events-none">
          <BotanicalLeft className="w-full h-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Parlons de vous</p>
          <h1 className="font-script text-6xl mb-4" style={{ color: 'var(--sage)' }}>Contactez-nous</h1>
          <BotanicalDivider className="max-w-xs mx-auto mb-6" />
          <p className="font-serif italic text-base" style={{ color: 'var(--text-muted)' }}>
            Notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-10 rounded-2xl" style={{ backgroundColor: 'var(--cream-mid)', border: '1px solid var(--border-light)' }}>
              {sent ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: 'var(--sage-pale)', border: '2px solid var(--sage)' }}>
                    <svg className="w-8 h-8" fill="none" stroke="var(--sage)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="font-script text-3xl mb-2" style={{ color: 'var(--sage)' }}>Message envoyé !</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Nous vous répondrons très prochainement. Merci de votre confiance.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Prénom</label>
                      <input type="text" style={inputStyle} placeholder="Amira"
                        value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} required />
                    </div>
                    <div>
                      <label style={labelStyle}>Nom</label>
                      <input type="text" style={inputStyle} placeholder="Benali"
                        value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input type="email" style={inputStyle} placeholder="exemple@gmail.com"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label style={labelStyle}>
                        Téléphone <span style={{ color: 'var(--gold)' }}>*</span>
                      </label>
                      <input type="tel" style={inputStyle} placeholder="0558 XX XX XX"
                        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Motif du contact</label>
                    <select style={inputStyle} value={form.reason} onChange={e => setForm({ ...form, reason: e.target.value })} required>
                      <option value="">— Sélectionnez un motif —</option>
                      {reasons.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea rows={5} style={{ ...inputStyle, resize: 'none' }}
                      placeholder="Décrivez votre demande..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--gold)' }}>*</span> Champ recommandé pour un contact rapide
                  </p>
                  {erreurEnvoi && (
                    <p className="text-sm" style={{ color: '#B23A3A' }}>{erreurEnvoi}</p>
                  )}
                  <button type="submit" disabled={envoiEnCours}
                    className="w-full py-3.5 rounded-full font-medium tracking-wide text-sm hover:opacity-90 hover:shadow-lg transition-all disabled:opacity-50"
                    style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
                    {envoiEnCours ? 'Envoi...' : 'Envoyer le message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Phone */}
            <div className="flex items-start gap-5 p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--cream-mid)', border: '1px solid var(--border-light)' }}>
              <div className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: 'var(--gold-pale)', border: '1px solid var(--gold-light)' }}>
                <svg className="w-5 h-5" fill="none" stroke="var(--gold)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--gold)' }}>Appelez-nous</div>
                <a href="tel:0558352813" className="font-serif font-medium block hover:underline" style={{ color: 'var(--sage)' }}>
                  0558 35 28 13
                </a>
                <div className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>Sam–Jeu : 08H30–18H00 · Ven : Fermé</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5 p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--cream-mid)', border: '1px solid var(--border-light)' }}>
              <div className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: 'var(--gold-pale)', border: '1px solid var(--gold-light)' }}>
                <svg className="w-5 h-5" fill="none" stroke="var(--gold)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--gold)' }}>Écrivez-nous</div>
                <a href="mailto:dentissad@gmail.com" className="font-serif font-medium hover:underline" style={{ color: 'var(--sage)' }}>
                  dentissad@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-5 p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--cream-mid)', border: '1px solid var(--border-light)' }}>
              <div className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: 'var(--gold-pale)', border: '1px solid var(--gold-light)' }}>
                <svg className="w-5 h-5" fill="none" stroke="var(--gold)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--gold)' }}>Notre cabinet</div>
                <div className="font-serif font-medium text-sm" style={{ color: 'var(--sage)' }}>
                  09 Rue commandant FERRADJ<br />Ex GAMBETTA
                </div>
                <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Sidi-Bel-Abbes, Algérie</div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--gold-pale)', border: '1px solid var(--gold-light)' }}>
              <div className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--gold-dark)' }}>Horaires</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Samedi – Jeudi</span>
                  <span className="font-medium" style={{ color: 'var(--sage)' }}>08H30 – 18H00</span>
                </div>
                <div className="h-px" style={{ backgroundColor: 'var(--gold-light)' }} />
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Vendredi</span>
                  <span style={{ color: 'var(--text-muted)' }}>Fermé</span>
                </div>
              </div>
            </div>

            {/* Map link */}
            <a href="https://maps.app.goo.gl/1AFfReBfmNjAonjc9" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 rounded-2xl transition-all hover:opacity-80"
              style={{ backgroundColor: 'var(--sage)', color: 'white', textDecoration: 'none' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span className="text-sm font-medium">Voir sur Google Maps</span>
              <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
