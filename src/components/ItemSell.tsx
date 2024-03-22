import React from 'react'
import { InterfaceSell } from '../context/dataContext'

export const ItemSell = ({ sell }: {sell: InterfaceSell}) => {
  return (
    <div className='sell box'>
      <a href="" style={{fontFamily: 'monospace'}}>{sell.id}</a>
      <div>{sell.nome}</div>
      <div>{sell.preco.toLocaleString('eng', {style: 'currency', currency: 'USD'})}</div>
    </div>
  )
}
