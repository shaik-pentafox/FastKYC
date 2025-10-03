import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import ScrollToTop from './ui/ScrollTop'
import Landing_Page from './pages/Landing_Page/ControlCenter'
import KYC_Page from './pages/Products/KYC_Page/KYC_ControlCenter'
import GST_Page from './pages/Products/GST_Page/GST_ControlCenter'
import BANK_Page from './pages/Products/BANK_Page/Bank_ControlCenter'
import OCR_Page from './pages/Products/OCR(APIs)_Page/OCR_ControlCenter'
import Products_security from './pages/Products/SECURITY(APIs)_Page/SECURITY_ControlCenter'
import Solution_SMS from './pages/Solution/SMS_Page/SMS_ControlCenter'
import Solution_WhatsAppKYC from './pages/Solution/WhatsAppKYC/WaKyc_ControlCenter'
import FastKYC from './pages/Why_FastKYC/FastKYC_ControlCenter'
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
          <Route path='/products-kyc' element={<KYC_Page />} />
          <Route path='/products-gst' element={<GST_Page />} />
          <Route path='/products-bank-account-verification' element={<BANK_Page />} />
          <Route path='/products-ocr-apis' element={<OCR_Page />} />
          <Route path='/products-security' element={<Products_security />} />
          <Route path='/solution-sms' element={<Solution_SMS />} />
          <Route path='/solution-whatsappkyc' element={<Solution_WhatsAppKYC />} />
          <Route path='/login' element={<Login />} />
          <Route path='/fast-kyc' element={<FastKYC />} />
          <Route path="/book-demo" element={<BookDemo data={data} footerData={footerData} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


