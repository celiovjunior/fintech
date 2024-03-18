import React, { useState } from 'react'
import { DateInput } from './DateInput'
import { useData } from '../context/dataContext'

export const DateRange = () => {
  const { start, setStart, finish, setFinish } = useData();

  return (
    <form className='box flex' onSubmit={(e) => e.preventDefault()}>
      <DateInput 
        label="start" 
        value={start} 
        onChange={({ target }) => setStart(target.value)} 
      />


      <DateInput 
        label="finish" 
        value={finish} 
        onChange={({ target }) => setFinish(target.value)}
      />

    </form>
  )
}
