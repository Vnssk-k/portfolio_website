
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import MyWorks from './pages/MyWorks'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myworks" element={<MyWorks />} />
      </Routes>
    </>
  )
}

export default App
