import React from "react";

//Components
import Head_Section from "./Bank_HeadSection";
import Why_FastKYC from "./Why_FastKYC"
import Verification_Section from "./Verification_Section";
import FlowIntegrate from "./FlowIntergate_Section";
import Footer from "../../Footer";

//Json Data
import BankData from "../../../services/BankingPageData";
import footerData from '../../../services/FooterPageData'

function App() {
  return (
    <div>
    <Head_Section data={BankData.pageData}/>
    <Why_FastKYC data={BankData.whyFastKycData}/>
    <Verification_Section data={BankData.verificationData}/>
    <FlowIntegrate data={BankData.flowData}/>
    <Footer data={footerData} /> 
    </div>
  );
}

export default App;
