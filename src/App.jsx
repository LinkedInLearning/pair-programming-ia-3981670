import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import './App.css'
import HeaderBar from './components/HeaderBar'

function App() {
  return (
    <div className="App  container ">
      
      <HeaderBar /> 
      <main className='p-4 bg-light'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  )
}

export default App