import React from "react";

//Components
import Head_Section from "./GST_HeadSection";
import Why_FastKYC from "./Why_FastKYC"
import Business_Section from "./Business_Section";
import Footer from "../../Footer";

//Json Data
import data from "../../../services/LandingPageData";
import GSTData from "../../../services/GSTPageData"
import footerData from '../../../services/FooterPageData'

function App() {
  return (
    <>
    <Head_Section data={GSTData.pageData} products_nav={data.products_nav} />
    <Why_FastKYC data={GSTData.whyFastKycData}/>
    <Business_Section data={GSTData.Business_section}/>
    <Footer data={footerData} /> 
    </>
  );
}

export default App;
