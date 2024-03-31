import React from 'react'
import { DateRange } from './DateRange';
import { Months } from './Months';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [title, setTitle] = React.useState("Summary");
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle('Summary');
      document.title = "Fintech | Summary";
    } else if (location.pathname === "/sells") {
      setTitle('Sells');
      document.title = "Fintech | Sales";
    }
  }, [location])

  return (
    <header className='mb'>
      <div className='daterange mb'>
        <DateRange />
        <h1 className='box bg-3'>{title}</h1>
      </div>
      <Months />
    </header>
  )
}
