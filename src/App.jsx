import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Landing_Page from './pages/Landing_Page/ControlCenter'
import BookDemo from './pages/bookDemo/BookDemo'

//Json Data
import data from "../src/services/bookDemoData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing_Page />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/Book_demo" element={<BookDemo data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
