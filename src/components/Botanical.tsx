import React from 'react'

export function BotanicalLeft({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 190 C40 160 60 130 80 100 C100 70 130 45 160 20" stroke="#C4954A" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M80 100 C65 88 52 72 48 55" stroke="#C4954A" strokeWidth="0.9" strokeLinecap="round"/>
      <ellipse cx="38" cy="42" rx="16" ry="9" transform="rotate(-45 38 42)" stroke="#C4954A" strokeWidth="0.8" fill="none"/>
      <path d="M38 42 L48 55" stroke="#C4954A" strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M80 100 C92 85 105 78 118 68" stroke="#C4954A" strokeWidth="0.9" strokeLinecap="round"/>
      <ellipse cx="125" cy="62" rx="15" ry="8" transform="rotate(20 125 62)" stroke="#C4954A" strokeWidth="0.8" fill="none"/>
      <path d="M125 62 L118 68" stroke="#C4954A" strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M50 150 C38 138 30 122 35 105" stroke="#C4954A" strokeWidth="0.9" strokeLinecap="round"/>
      <ellipse cx="30" cy="97" rx="14" ry="8" transform="rotate(-60 30 97)" stroke="#C4954A" strokeWidth="0.8" fill="none"/>
      <path d="M30 97 L35 105" stroke="#C4954A" strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M110 55 C102 42 108 28 118 20" stroke="#C4954A" strokeWidth="0.8" strokeLinecap="round"/>
      <ellipse cx="122" cy="14" rx="11" ry="7" transform="rotate(-30 122 14)" stroke="#C4954A" strokeWidth="0.7" fill="none"/>
      <circle cx="62" cy="160" r="2" fill="#C4954A" opacity="0.5"/>
      <circle cx="130" cy="35" r="1.5" fill="#C4954A" opacity="0.4"/>
      <circle cx="95" cy="120" r="1.5" fill="#C4954A" opacity="0.35"/>
    </svg>
  )
}

export function BotanicalRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ transform: 'scaleX(-1)' }}>
      <path d="M20 190 C40 160 60 130 80 100 C100 70 130 45 160 20" stroke="#C4954A" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M80 100 C65 88 52 72 48 55" stroke="#C4954A" strokeWidth="0.9" strokeLinecap="round"/>
      <ellipse cx="38" cy="42" rx="16" ry="9" transform="rotate(-45 38 42)" stroke="#C4954A" strokeWidth="0.8" fill="none"/>
      <path d="M38 42 L48 55" stroke="#C4954A" strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M80 100 C92 85 105 78 118 68" stroke="#C4954A" strokeWidth="0.9" strokeLinecap="round"/>
      <ellipse cx="125" cy="62" rx="15" ry="8" transform="rotate(20 125 62)" stroke="#C4954A" strokeWidth="0.8" fill="none"/>
      <path d="M125 62 L118 68" stroke="#C4954A" strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M50 150 C38 138 30 122 35 105" stroke="#C4954A" strokeWidth="0.9" strokeLinecap="round"/>
      <ellipse cx="30" cy="97" rx="14" ry="8" transform="rotate(-60 30 97)" stroke="#C4954A" strokeWidth="0.8" fill="none"/>
      <path d="M30 97 L35 105" stroke="#C4954A" strokeWidth="0.7" strokeLinecap="round"/>
    </svg>
  )
}

export function BotanicalDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <line x1="0" y1="20" x2="155" y2="20" stroke="#DDD0B8" strokeWidth="0.8"/>
      <path d="M170 20 C175 12 182 8 190 10 C198 12 200 20 200 20 C200 20 202 28 210 30 C218 32 225 28 230 20" stroke="#C4954A" strokeWidth="1" strokeLinecap="round" fill="none"/>
      <ellipse cx="200" cy="20" rx="5" ry="5" stroke="#C4954A" strokeWidth="0.8" fill="none"/>
      <circle cx="200" cy="20" r="2" fill="#C4954A" opacity="0.6"/>
      <line x1="245" y1="20" x2="400" y2="20" stroke="#DDD0B8" strokeWidth="0.8"/>
      <circle cx="155" cy="20" r="2.5" fill="#C4954A" opacity="0.4"/>
      <circle cx="245" cy="20" r="2.5" fill="#C4954A" opacity="0.4"/>
    </svg>
  )
}

export function LeafIcon({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path d="M12 2 C12 2 4 8 4 14 C4 18.4 7.6 22 12 22 C16.4 22 20 18.4 20 14 C20 8 12 2 12 2Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      <path d="M12 2 L12 22" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
      <path d="M12 10 C9 9 7 11 7 14" stroke="currentColor" strokeWidth="0.7" fill="none"/>
      <path d="M12 14 C15 13 17 11 17 14" stroke="currentColor" strokeWidth="0.7" fill="none"/>
    </svg>
  )
}

export function GoldDivider() {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1 L9.5 6.5 L15 8 L9.5 9.5 L8 15 L6.5 9.5 L1 8 L6.5 6.5 Z" stroke="#C4954A" strokeWidth="0.8" fill="none"/>
      </svg>
      <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
    </div>
  )
}
