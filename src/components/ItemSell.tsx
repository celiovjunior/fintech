import React from 'react'
import { InterfaceSell } from '../context/dataContext'
import { NavLink } from 'react-router-dom'

export const ItemSell = ({ sell }: {sell: InterfaceSell}) => {
  return (
    <div className='sell box'>
      <NavLink to={`/sales/${sell.id}`} style={{fontFamily: 'monospace'}}>{sell.id}</NavLink>
      <div>{sell.nome}</div>
      <div>{sell.preco.toLocaleString('eng', {style: 'currency', currency: 'USD'})}</div>
    </div>
  )
}
