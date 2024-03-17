import React from 'react';
import useFetch from '../hooks/useFetch';

type InterfaceDataContext = {
  data: InterfaceSell[] | null,
  loading: boolean,
  error: string | null,
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
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<InterfaceSell[]>('https://data.origamid.dev/vendas/');
  
  return <DataContext.Provider value={{data, loading, error}}> { children } </DataContext.Provider>
}
