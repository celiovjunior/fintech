import { SalesChart } from "../components/SalesChart";
import { useData } from "../context/dataContext";

const Summary = () => {
  const { data } =  useData();
  if (data === null) return null;

  return (
    <section>
      <div className="summary flex mb">
        <div className="box">
          <h2>Sales</h2>
          <span>
            { data.reduce((acc, item) => acc + item.preco, 0).toLocaleString('eng', { style: 'currency', currency: "USD" }) }
          </span>
        </div>
        <div className="box">
          <h2>Received</h2>
          <span>
            { data.filter((i) => i.status === 'pago')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('eng', { style: 'currency', currency: "USD" }) }
          </span>
        </div>
        <div className="box">
          <h2>Processing</h2>
          <span>
            { data.filter((i) => i.status === 'processando')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('eng', { style: 'currency', currency: "USD" }) }
          </span>
        </div>
      </div>
      <div className="box mb">
        <SalesChart data={data} />
      </div>
    </section>
  )
}

export default Summary;