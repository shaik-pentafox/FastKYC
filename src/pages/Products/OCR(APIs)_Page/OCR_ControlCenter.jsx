import React from "react";

//Components
import Head_Section from "./OCR_HeadSection";
import Why_FastKYC from "./Why_FastKYC"
import Business_Section from "./Business_Section";
import Customer_Section from "./Customer_Section";
import Footer from "../../Landing_Page/Footer";


//Json Data
import data from "../../../services/LandingPageData";
import OCRData from "../../../services/OCRPageData"

function App() {
  return (
    <>
    <Head_Section data={OCRData.pageData}/>
    <Why_FastKYC data={OCRData.whyFastKycData}/>
    <Business_Section data={OCRData.Business_section}/>
    <Customer_Section data={OCRData.Customer_section}/>
    <Footer data={data.footerData} /> 
    </>
  );
}

export default App;
