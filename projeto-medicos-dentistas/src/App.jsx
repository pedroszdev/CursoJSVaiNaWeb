
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Voluntario from './pages/Voluntario'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/voluntario' element={<Voluntario/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
