'use client'
// mode: primary || outline || cta || cancel
// size: sm || md || lg
export default function Button({ label, onClick, mode = 'primary', size = 'md', disabled }) {
  return (
    <button
      onClick={onClick}
      className={`
        transition-all max-w-max rounded 
        hover:shadow-none hover:text-white dark:hover:text-black
        ${size === 'sm' ? `px-4 py-2 text-xs shadow` : ``} 
        ${size === 'md' ? `px-6 py-[12px] shadow` : ``} 
        ${size === 'lg' ? `px-10 py-4 text-2xl shadow-xl` : ``} 
        ${mode === 'primary' && !disabled ? `bg-brand-dark dark:bg-brand text-brand dark:text-brand-dark` : ``} 
        ${mode === 'outline' ? `border border-brand-dark` : ``} 
        ${mode === 'cta' ? `bg-cta text-brand-dark` : ``} 
        ${mode === 'cancel' ? `shadow-none px-0 py-0 hover:underline` : ``} 
        ${disabled ? `cursor-not-allowed shadow-none bg-brand text-brand-dark` : ``}
      `}
      disabled={disabled}
    >
      {label}
    </button >
  )
}
