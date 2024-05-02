import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { SideNav } from './components/SideNav'
import { DataContextProvider } from './context/dataContext'
import './index.css'
import { Sales } from './pages/Sales'
import Summary from './pages/Summary'
import { Sell } from './pages/Sell'

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className='container'>
          <SideNav />
          <main>
            <Header/>
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/sales" element={<Sales />} />             
              <Route path="/sales/:id" element={<Sell />} />             
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
