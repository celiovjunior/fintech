import { InterfaceSell } from '../context/dataContext'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type SaleDay = {
  data: string,
  pago: number,
  processando: number,
  falha: number
}

function transformData(data: InterfaceSell[]): SaleDay[] {
  const days = data.reduce((acc: {[ key: string ]: SaleDay}, item) => {
    const day = item.data.split(" ")[0];

    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0
      }
    }
    
    acc[day][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(days).map((day) => ({
    ...day,
    data: day.data.substring(5)
  }));
}

export const SalesChart = ({ data }: { data:InterfaceSell[] }) => {
  const transformedDate = transformData(data);

  return (
    <ResponsiveContainer width={"99%"} height={400}>
      <LineChart data={transformedDate}>
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
