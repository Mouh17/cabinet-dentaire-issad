import { useState } from 'react'
import { BotanicalLeft, BotanicalDivider } from '../components/Botanical'
import { supabase } from '../lib/supabaseClient'

const treatments = [
  'Orthodontie (ODF)',
  'Prothèse dentaire (couronne, bridge)',
  'Prothèse amovible (partielle ou totale)',
  'Implant dentaire',
  'Soins dentaire (caries, obturations)',
  'Détartrage & hygiène professionnelle',
  'Endodontie (dévitalisation)',
  'Radiologie panoramique',
  'Radiologie 3D (cone beam)',
  'Scanner intra-oral / RVG',
  'Bilan bucco-dentaire',
  'Urgence dentaire',
]

export default function BookPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', date: '', service: '' })
  const [submitted, setSubmitted] = useState(false)
  const [envoiEnCours, setEnvoiEnCours] = useState(false)
  const [erreurEnvoi, setErreurEnvoi] = useState('')

  const inputStyle = {
    backgroundColor: 'white',
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

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnvoiEnCours(true)
    setErreurEnvoi('')

    const { error } = await supabase.from('rendez_vous').insert({
      prenom: form.firstName,
      nom: form.lastName,
      telephone: form.phone,
      email: form.email || null,
      date_disponible: form.date || null,
      service: form.service,
    })

    setEnvoiEnCours(false)

    if (error) {
      console.error(error)
      setErreurEnvoi("Une erreur est survenue. Merci de réessayer, ou de nous appeler directement.")
      return
    }

    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: 'var(--sage-pale)' }}>
        <div className="absolute right-0 top-0 w-64 h-64 opacity-20 pointer-events-none">
          <BotanicalLeft className="w-full h-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--gold)' }}>En ligne · Simple · Rapide</p>
          <h1 className="font-script text-6xl mb-4" style={{ color: 'var(--sage)' }}>Prendre Rendez-vous</h1>
          <BotanicalDivider className="max-w-xs mx-auto" />
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left column */}
          <div className="lg:col-span-2">
            <h2 className="font-script text-4xl mb-3" style={{ color: 'var(--sage)' }}>Réservez en ligne</h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Après réception de votre demande, notre équipe vous contacte pour confirmer la date et l'heure de votre rendez-vous.
            </p>

            <div className="space-y-4">
              {[
                { n: '01', t: 'Remplissez le formulaire', d: 'Vos coordonnées et le soin souhaité' },
                { n: '02', t: 'Nous vous rappelons', d: 'Confirmation rapide par téléphone' },
                { n: '03', t: 'Venez au cabinet', d: '09 Rue FERRADJ · Sidi-Bel-Abbes' },
              ].map(s => (
                <div key={s.n} className="flex items-start gap-4 p-5 rounded-xl"
                  style={{ backgroundColor: 'var(--cream-mid)', border: '1px solid var(--border-light)' }}>
                  <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-serif font-semibold text-sm"
                    style={{ backgroundColor: 'var(--gold-pale)', color: 'var(--gold-dark)', border: '1px solid var(--gold-light)' }}>
                    {s.n}
                  </div>
                  <div>
                    <div className="font-medium text-sm mb-0.5" style={{ color: 'var(--sage)' }}>{s.t}</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-xl" style={{ backgroundColor: 'var(--gold-pale)', border: '1px solid var(--gold-light)' }}>
              <div className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--gold-dark)' }}>Urgence ?</div>
              <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
                Appelez-nous directement pour une prise en charge prioritaire.
              </p>
              <a href="tel:0558352813" className="font-serif font-medium text-lg" style={{ color: 'var(--sage)' }}>
                0558 35 28 13
              </a>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Sam–Jeu · 08H30 – 18H00</p>
            </div>
          </div>

          {/* Right column — wizard */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ backgroundColor: 'white', border: '1px solid var(--border-light)' }}>
              {/* Steps */}
              <div className="flex" style={{ borderBottom: '2px solid var(--border-light)' }}>
                {[{ n: 1, label: 'Coordonnées' }, { n: 2, label: 'Choisir un soin' }].map(t => (
                  <div key={t.n} className="flex-1 py-4 px-6 flex items-center gap-2.5 relative"
                    style={{ backgroundColor: step === t.n ? 'white' : 'var(--cream-mid)' }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                      style={{ backgroundColor: step >= t.n ? 'var(--gold)' : 'var(--border)', color: step >= t.n ? 'white' : 'var(--text-muted)' }}>
                      {step > t.n ? '✓' : t.n}
                    </div>
                    <span className="text-sm font-medium" style={{ color: step === t.n ? 'var(--sage)' : 'var(--text-muted)' }}>
                      {t.label}
                    </span>
                    {step === t.n && <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: 'var(--gold)' }} />}
                  </div>
                ))}
              </div>

              {submitted ? (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: 'var(--sage-pale)', border: '2px solid var(--sage)' }}>
                    <svg className="w-8 h-8" fill="none" stroke="var(--sage)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="font-script text-3xl mb-3" style={{ color: 'var(--sage)' }}>Demande envoyée !</h3>
                  <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                    Merci, {form.firstName}. Nous vous contacterons très prochainement pour confirmer votre rendez-vous.
                  </p>
                  <p className="text-xs" style={{ color: 'var(--gold)' }}>dentissad@gmail.com · 0558 35 28 13</p>
                </div>
              ) : step === 1 ? (
                <form onSubmit={handleNext} className="p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Prénom</label>
                      <input type="text" style={inputStyle} placeholder="Mohamed"
                        value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} required />
                    </div>
                    <div>
                      <label style={labelStyle}>Nom</label>
                      <input type="text" style={inputStyle} placeholder="Benali"
                        value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} required />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>
                      Téléphone <span style={{ color: 'var(--gold)' }}>*</span>
                    </label>
                    <input type="tel" style={inputStyle} placeholder="0558 XX XX XX"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input type="email" style={inputStyle} placeholder="exemple@gmail.com"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label style={labelStyle}>Disponibilité souhaitée</label>
                    <input type="date" style={inputStyle}
                      min={new Date().toISOString().split('T')[0]}
                      value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                    <p className="text-xs mt-1.5" style={{ color: 'var(--text-muted)' }}>
                      Date indicative — nous confirmons selon nos disponibilités.
                    </p>
                  </div>
                  <button type="submit"
                    className="w-full py-4 rounded-full font-medium tracking-wide text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                    style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
                    Étape suivante →
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                  <div>
                    <label style={labelStyle}>Choisissez une prestation</label>
                    <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                      {treatments.map(t => (
                        <label key={t}
                          className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors"
                          style={{
                            border: `1px solid ${form.service === t ? 'var(--gold)' : 'var(--border)'}`,
                            backgroundColor: form.service === t ? 'var(--gold-pale)' : 'white',
                          }}>
                          <input type="radio" name="service" value={t}
                            checked={form.service === t}
                            onChange={() => setForm({ ...form, service: t })}
                            className="sr-only" />
                          <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                            style={{ borderColor: form.service === t ? 'var(--gold)' : 'var(--border)' }}>
                            {form.service === t && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />}
                          </div>
                          <span className="text-sm" style={{ color: form.service === t ? 'var(--sage)' : 'var(--text)' }}>
                            {t}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {erreurEnvoi && (
                    <p className="text-sm" style={{ color: '#B23A3A' }}>{erreurEnvoi}</p>
                  )}
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)}
                      className="flex-1 py-3.5 rounded-full text-sm font-medium"
                      style={{ border: '1.5px solid var(--border)', color: 'var(--text-muted)' }}>
                      ← Retour
                    </button>
                    <button type="submit" disabled={!form.service || envoiEnCours}
                      className="flex-1 py-3.5 rounded-full text-sm font-medium disabled:opacity-40 hover:opacity-90 transition-all"
                      style={{ backgroundColor: 'var(--gold)', color: 'white' }}>
                      {envoiEnCours ? 'Envoi...' : 'Confirmer la demande'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
