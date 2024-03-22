import React from 'react'
import { useData } from '../context/dataContext'
import { ItemSell } from '../components/ItemSell';

export const Sells = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {
        data.map(sell => <li key={sell.id}>
          <ItemSell sell={sell} />
        </li>)
      }
    </ul>
  )
}
