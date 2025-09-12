import React from "react";

//Components
import Head_Section from "../Products_HeadSection";
import Why_FastKYC from "../Why_FastKYC"
import Business_Section from "./Business_Section";
import Verification_Section from "./Verification_Section";
import Customer_Section from "./Customer_Section";
import Footer from "../../Footer";

//Json Data
import SecurityData from "../../../services/SecurityPageData";
import footerData from '../../../services/FooterPageData'

function App() {
  return (
    <div>
    <Head_Section data={SecurityData.pageData}/>
    <Why_FastKYC data={SecurityData.whyFastKycData}/>
    <Business_Section data={SecurityData.Business_section}/>
    <Verification_Section data={SecurityData.verificationData}/>
    <Customer_Section data={SecurityData.Customer_section}/>
    <Footer data={footerData} /> 
    </div>
  );
}

export default App;
