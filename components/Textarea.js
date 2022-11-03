'use client'

export default function Textarea({ onChange, rows, required, defaultValue }) {
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
    >
    </textarea>
  )
}
