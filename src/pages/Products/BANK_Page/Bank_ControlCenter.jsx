import React from "react";

//Components
import Head_Section from "../Products_HeadSection";
import Why_FastKYC from "../Why_FastKYC"
import Verification_Section from "../Verification_Section";
import Contact from "../../Contact"
import PayIntegrate from "../../PayIntegrate"
import Footer from "../../Footer";

//Json Data
import BankData from "../../../services/BankingPageData";
import footerData from '../../../services/FooterPageData'

function App() {
  return (
    <>
    <Head_Section data={BankData.pageData}/>
    <Why_FastKYC data={BankData.whyFastKycData}/>
    <Verification_Section data={BankData.verificationData} type="normal"/>
    <Contact data={BankData.contactData} type="image"/> 
    <PayIntegrate data={BankData.integration} align="right"/>
    <Footer data={footerData} /> 
    </>
  );
}

export default App;
