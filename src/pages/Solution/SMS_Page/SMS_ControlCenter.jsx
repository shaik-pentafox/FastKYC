import React from "react";

//Components
import Head_Section from "./SMS_HeadSection";
import Why_FastKYC from "../../Products/Why_FastKYC";
import Information_Section from "../../Products/Verification_Section";
import PayIntegrate from "../../PayIntegrate"
import Footer from "../../Footer";

//Json Data

import SMSData from "../../../services/SMSPageData";
import footerData from '../../../services/FooterPageData'

function App() {
  return (
    <>
    <Head_Section data={SMSData.pageData}/>
    <Why_FastKYC data={SMSData.whyFastKycData}/>
    <Information_Section data={SMSData.informationData} type="alternating"/>
    <PayIntegrate data={SMSData.payIntegrateData} align="right"/>
    <Footer data={footerData} /> 
  </>
  );
}

export default App;
