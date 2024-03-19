import React from 'react'
import { useData } from '../context/dataContext';

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

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

export const MonthBtn = ({ n }: { n: number }) => {
  const { setStart, setFinish } = useData();

  function setMonth(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    
    setStart(formatDate(firstDay));
    setFinish(formatDate(lastDay));
  }

  return (
    <button style={style} onClick={() => setMonth(n)}>
      { monthName(n) }
    </button>
  )
}
