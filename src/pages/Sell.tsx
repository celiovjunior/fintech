import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { InterfaceSell } from '../context/dataContext'
import { Loading } from '../components/Loading';

type SellWithoutDate = Omit<InterfaceSell, 'data'>;

export const Sell = () => {
  const { id } = useParams()
  // console.log(id)
  const { data, loading } = useFetch<SellWithoutDate>(`https://data.origamid.dev/vendas/${id}`)
  
  if(loading === true) return <Loading />
  if(data === null) return null
  
  return (
    <div>
      <div className='box mb'>ID: {data.id}</div>
      <div className='box mb'>Name: {data.nome}</div>
      <div className='box mb'>Price: {data.preco.toLocaleString("en", {
        style: "currency",
        currency: "USD",
      })}</div>
      <div className='box mb'>Status: {data.status}</div>
      <div className='box mb'>Payment method: {data.pagamento}</div>
      {/* <div className='box mb'>Date: {data.data}</div> */}
    </div>
  )
}
