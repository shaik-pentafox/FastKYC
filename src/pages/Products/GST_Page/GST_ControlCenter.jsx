import React from "react";

//Components
import Head_Section from "../Products_HeadSection";
import Why_FastKYC from "../Why_FastKYC"
import Business_Section from "../Business_Section";
import Verification_Section from '../Verification_Section'
import Footer from "../../Footer";

//Response Data
import GSTData from "../../../services/GSTPageData"
import footerData from '../../../services/FooterPageData'

function App() {
  return (
    <>
    <Head_Section data={GSTData.pageData}/>
    <Why_FastKYC data={GSTData.whyFastKycData}/>
    <Business_Section data={GSTData.Business_section} layout="cards"/>
    <Verification_Section data={GSTData.verificationData} type="normal"/>
    <Footer data={footerData} /> 
    </>
  );
}

export default App;
