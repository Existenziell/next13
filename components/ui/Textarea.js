'use client'

export default function Textarea({ onChange, rows, required, defaultValue, placeholder }) {
  return (
    <textarea
      rows={rows}
      type='text'
      required={required}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={defaultValue}
      autoComplete='off'
      autoCorrect='off'
      spellCheck='false'
      autoCapitalize='false'
      placeholder={placeholder}
      className='p-2 text-sm border-2 border-transparent rounded-sm text-black bg-brand
      dark:text-white dark:bg-brand-dark dark:border-brand-dark dark:focus:border-brand
      focus:outline-none focus:ring-0 focus:border-brand-dark'
    >
    </textarea>
  )
}
