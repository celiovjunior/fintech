import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

type InterfaceDataContext = {
  data: InterfaceSell[] | null,
  loading: boolean,
  error: string | null,
  start: string,
  finish: string,
  setStart:  React.Dispatch<React.SetStateAction<string>>,
  setFinish:  React.Dispatch<React.SetStateAction<string>>,
}

type InterfaceSell = {
  id: string,
  nome: string,
  preco: number,
  status: "pago" | "processando" | "falha",
  pagamento: "boleto" | "pix" | "pix",
  data: string,
  parcelas:  number | null
}

const DataContext = React.createContext<InterfaceDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);

  if (!context) throw new Error('useData precisa estar em DataContextProvider');
  return context;
};

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n)

  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [start, setStart] = useState(getDate(30));
  const [finish, setFinish] = useState(getDate(0));
 
  const { data, loading, error } = useFetch<InterfaceSell[]>(
    `https://data.origamid.dev/vendas/?inicio=${start}&final=${finish}`
  );
  
  return (
    <DataContext.Provider value={{ data, loading, error, start, setStart, finish, setFinish }}>
      { children } 
    </DataContext.Provider>
  ) 
}
