import React from "react";

//Components
import Head_Section from "./KYC_HeadSection";
import Flow_Section from "./Flow_Section";
import Customer_Section from './Customers_Section';
import Contact_Section from "./Contact_Section";
import PayIntegrate from "./PayIntergate_Section";
import Footer from "../../Landing_Page/Footer";

//Json Data
import data from "../../../services/LandingPageData";
import KYCData from "../../../services/KYCPageData";
function App() {
  return (
    <div>
    <Head_Section data={KYCData.pageData} />
    <Flow_Section data={KYCData.flowData}/>
    <Customer_Section data={KYCData.customerData}/>
    <Contact_Section data={KYCData.contactData}/>
    <PayIntegrate data={KYCData.payIntegrateData}/>
    <Footer data={data.footerData} /> 
    </div>
  );
}

export default App;
