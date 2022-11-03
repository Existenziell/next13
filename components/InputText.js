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
    />
  )
}
