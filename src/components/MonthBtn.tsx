import React from 'react'

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-secondary)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-primary-light)",
  fontWeight: "600",
  textTransform: "capitalize",
}

function monthName(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat('eng', { month: "long" }).format(date)
}

export const MonthBtn = ({ n }: { n: number }) => {
  monthName(n);
  return (
    <button style={style}>
      { monthName(n) }
    </button>
  )
}
