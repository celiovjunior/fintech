import React, { useState } from 'react'
import { DateInput } from './DateInput'

export const DateRange = () => {
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');

  return (
    <form className='box flex' onSubmit={(e) => e.preventDefault()}>
      <DateInput 
        label="start" 
        value={start} 
        onChange={({ target }) => setStart(target.value)} 
      />

      {/* { start } */}

      <DateInput 
        label="finish" 
        value={finish} 
        onChange={({ target }) => setFinish(target.value)}
      />

      {/* { finish } */}
    </form>
  )
}
