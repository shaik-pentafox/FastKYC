import React from "react";

//Components
import Head_Section from "./Bank_HeadSection";
import Why_FastKYC from "./Why_FastKYC"
import FlowIntegrate from "./FlowIntergate_Section";
import Footer from "../../Landing_Page/Footer";

//Json Data
import data from "../../../services/LandingPageData";
import BankData from "../../../services/BankingPageData";

function App() {
  return (
    <div>
    <Head_Section data={BankData.pageData}/>
    <Why_FastKYC data={BankData.whyFastKycData}/>
    <FlowIntegrate data={BankData.flowData}/>
    <Footer data={data.footerData} /> 
    </div>
  );
}

export default App;
