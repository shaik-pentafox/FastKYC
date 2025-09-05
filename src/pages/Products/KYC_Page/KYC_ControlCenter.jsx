import React from "react";

//Components
import Head_Section from "./KYC_HeadSection";
import Flow_Section from "./Flow_Section";
import Customer_Section from './Customers_Section';
import Contact_Section from "./Contact_Section";
import PayIntegrate from "./PayIntergate_Section";
import Footer from "../../Footer";

//Json Data
import data from "../../../services/LandingPageData";
import KYCData from "../../../services/KYCPageData";
import footerData from '../../../services/FooterPageData'

function App() {
  return (
    <div>
    <Head_Section data={KYCData.pageData} products_nav={data.products_nav}/>
    <Flow_Section data={KYCData.flowData}/>
    <Customer_Section data={KYCData.customerData}/>
    <Contact_Section data={KYCData.contactData}/>
    <PayIntegrate data={KYCData.payIntegrateData}/>
    <Footer data={footerData} /> 
    </div>
  );
}

export default App;
