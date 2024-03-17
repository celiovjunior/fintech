import React from 'react'
import { useData } from '../context/dataContext'

export const Header = () => {
  const { data } = useData();
  console.log(data);
  
  return (
    <div>Header</div>
  )
}
