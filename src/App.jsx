// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Landing_Page/Main'
import BookDemo from './pages/bookDemo/BookDemo'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/book-demo' element={<BookDemo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
