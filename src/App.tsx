import { Header } from './components/Header'
import { SideNav } from './components/SideNav'
import { DataContextProvider } from './context/dataContext'
import './index.css'
import { Sells } from './pages/Sells'
import Summary from './pages/Summary'

function App() {
  return (
    <DataContextProvider>
      <div className='container'>
        <SideNav />
        <main>
          <Header/>
          <Summary />
          <Sells />
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
