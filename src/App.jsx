import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import ScrollToTop from './ui/ScrollTop'
import Landing_Page from './pages/Landing_Page/ControlCenter'
import KYC_Page from './pages/Products/KYC_Page/KYC_ControlCenter'
import GST_Page from './pages/Products/GST_Page/GST_ControlCenter'
import BANK_Page from './pages/Products/BANK_Page/Bank_ControlCenter'
import OCR_Page from './pages/Products/OCR(APIs)_Page/OCR_ControlCenter'
//import /Products_security from './pages/Products/SECURITY(APIs)_Page/ControlCenter'
import BookDemo from './pages/bookDemo/BookDemo'

//Json Data
import data from "../src/services/bookDemoData";
import footerData from './services/FooterPageData'

function App() {
  return (
    <>
      <BrowserRouter>
       <ScrollToTop />
        <Routes>
          <Route path='/' element={<Landing_Page />} />
          <Route path='/Products_KYC' element={<KYC_Page />} />
          <Route path='/Products_GST' element={<GST_Page />} />
          <Route path='/Products_bank-account-verification' element={<BANK_Page />} />
          <Route path='/Products_OCR-APIs' element={<OCR_Page />} />
          {/* <Route path='/Products_security' element={<SECURITY_Page />} /> */}
          <Route path='/Login' element={<Login />} />
          <Route path="/Book_demo" element={<BookDemo data={data} footerData={footerData}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
