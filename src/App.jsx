import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainApp from './pages/Landing_Page/ControlCenter'
import BookDemo from './pages/bookDemo/BookDemo'
import Login from './pages/login/Login'

//Json Data
import data from "../src/services/bookDemoData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainApp />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/Book_demo" element={<BookDemo data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
