import React from "react";

//Components
import Head_Section from "./GST_HeadSection";
import Why_FastKYC from "./Why_FastKYC"
import Business_Section from "./Business_Section";
import Footer from "../../Landing_Page/Footer";

//Json Data
import data from "../../../services/LandingPageData";
import GSTData from "../../../services/GSTPageData"

function App() {
  return (
    <>
    <Head_Section data={GSTData.pageData} />
    <Why_FastKYC data={GSTData.whyFastKycData}/>
    <Business_Section data={GSTData.Business_section}/>
    <Footer data={data.footerData} /> 
    </>
  );
}

export default App;
