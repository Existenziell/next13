'use client'

export default function InputText({ onChange, required, defaultValue }) {
  return (
    <input
      type='text'
      required={required}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={defaultValue}
      autoComplete='off'
      autoCorrect='off'
      spellCheck='false'
      autoCapitalize='false'
      className='p-2 text-sm border-2 border-transparent rounded-sm text-black bg-brand
        dark:text-white dark:bg-brand-dark dark:border-brand-dark dark:focus:border-brand
        focus:outline-none focus:ring-0 focus:border-brand-dark'
    />
  )
}
