import React from "react";

//Components
import Head_Section from "../Products_HeadSection";
import Verification_Section from "../Verification_Section";
import Why_FastKYC from "../Why_FastKYC"
import Business_Section from "../Business_Section";
import Compliance_Section from "./Compliance_Section";
import Footer from "../../Footer";

//Response Data
import SecurityData from "../../../services/SecurityPageData";
import footerData from '../../../services/FooterPageData'

function App() {
  return (
    <>
    <Head_Section data={SecurityData.pageData}/>
    <Verification_Section data={SecurityData.verificationData} type="tabs"/>
    <Why_FastKYC data={SecurityData.whyFastKycData}/>
    <Business_Section data={SecurityData.Business_section} layout="faq"/>
    <Compliance_Section data={SecurityData.Compliance_section}/>
    <Footer data={footerData} /> 
    </>
  );
}

export default App;
