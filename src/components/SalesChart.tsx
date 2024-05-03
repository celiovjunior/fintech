import React from 'react'
import { InterfaceSell } from '../context/dataContext'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const chartData = [
  {
    date: '2023-05-03',
    pago: 30000,
    processando: 3000,
    falha: 2000
  },
  {
    date: '2023-05-06',
    pago: 38000,
    processando: 5000,
    falha: 6000
  },
  {
    date: '2023-05-07',
    pago: 42000,
    processando: 5880,
    falha: 8450
  },
]

export const SalesChart = ({ data }: { data:InterfaceSell[] }) => {
  return (
    <ResponsiveContainer width={"99%"} height={400}>
      <LineChart data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3} />
        <Line type="monotone" dataKey="processando" stroke="#fbcb21" strokeWidth={3} />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  )
}
