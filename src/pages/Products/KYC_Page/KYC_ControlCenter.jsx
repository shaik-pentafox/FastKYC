import React from "react";

//Components
import Head_Section from "../Products_HeadSection";
import Verification_Section from '../Verification_Section'
import Flow_Section from "./Flow_Section";
import Customer_Section from './Customers_Section';
import Contact_Section from "../../Contact";
import PayIntegrate from "../../PayIntegrate";
import Footer from "../../Footer";

//Json Data
import KYCData from "../../../services/KYCPageData";
import footerData from '../../../services/FooterPageData'

function App() {
  return (
    <div>
    <Head_Section data={KYCData.pageData}/>
    <Verification_Section data={KYCData.verificationData} type="tabs"/>
    <Flow_Section data={KYCData.flowData}/>
    <Customer_Section data={KYCData.customerData}/>
    <Contact_Section data={KYCData.contactData} type="cards"/>
    <PayIntegrate data={KYCData.payIntegrateData} align="right"/>
    <Footer data={footerData} /> 
    </div>
  );
}

export default App;
