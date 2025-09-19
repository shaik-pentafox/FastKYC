import React from "react";

//Components
import Head_Section from "../Products_HeadSection";
import Check_Section from "./Check_Section";
import Why_FastKYC from "../Why_FastKYC"
import Business_Section from "../Business_Section";
import Customer_Section from "./Customer_Section";
import Footer from "../../Footer";


//Json Data
import OCRData from "../../../services/OCRPageData"
import footerData from '../../../services/FooterPageData'

function App() {
  return (
    <>
    <Head_Section data={OCRData.pageData}/>
    <Check_Section data={OCRData.checkData}/>
    <Why_FastKYC data={OCRData.whyFastKycData}/>
    <Business_Section data={OCRData.Business_section} layout="faq"/>
    <Customer_Section data={OCRData.Customer_section}/>
    <Footer data={footerData} /> 
    </>
  );
}

export default App;
