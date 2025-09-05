import React from "react";

//Components
import Head_Section from "./Bank_HeadSection";
import Why_FastKYC from "./Why_FastKYC"
import FlowIntegrate from "./FlowIntergate_Section";
import Footer from "../../Footer";

//Json Data
import data from "../../../services/LandingPageData";
import BankData from "../../../services/BankingPageData";
import footerData from '../../../services/FooterPageData'

function App() {
  return (
    <div>
    <Head_Section data={BankData.pageData} products_nav={data.products_nav}/>
    <Why_FastKYC data={BankData.whyFastKycData}/>
    <FlowIntegrate data={BankData.flowData}/>
    <Footer data={footerData} /> 
    </div>
  );
}

export default App;
