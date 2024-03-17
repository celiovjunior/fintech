import { Header } from './components/Header'
import { SideNav } from './components/SideNav'
import { DataContextProvider } from './context/dataContext'
import './index.css'
import Summary from './pages/Summary'

function App() {
  return (
    <DataContextProvider>
      <div>
        <SideNav />
        <main>
          <Header/>
          <Summary />
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
