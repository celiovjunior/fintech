import React from 'react'

const generalStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: "var(--color-primary-light)",
  padding: "var(--gap-s) 0.75rem",
  backgroundColor: "var(--background)",
  borderRadius: "var(--gap)",
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: '600',
  ...generalStyle,
}

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,
}

type InterfaceDateInput = React.ComponentProps<'input'> & {
  label: string,
}

export const DateInput = ({ label, ...props }: InterfaceDateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input style={inputStyle} id={label} name={label} type="date" {...props} />
    </div>
  )
}
