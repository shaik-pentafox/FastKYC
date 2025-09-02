import React from "react";

//Components
import Head_Section from "./Head_Section";
import Products from "./Products";
import Customer from "./Customers";
import Designed from "./Designed";
import PayIntegrate from "./PayIntegrate";
import FAQ from "./FAQ";
import Contact from "./Contact";
 import Footer from "./Footer";

//Json Data
import data from "../../services/LandingPageData";

function App() {
  return (
    <div>
      <Head_Section data={data.heroData}/>
    <Products sections={data.productSections} whyChoose={data.whyChoose} features={data.whyChoose.featureCards} /> 
    <Customer data={data.customerData} />
     <Designed data={data.designedData} />
     <PayIntegrate data={data.payIntegrateData} />
     <FAQ data={data.faqData} />
     <Contact data={data.contactData} /> 
     <Footer data={data.footerData} /> 
    </div>
  );
}

export default App;
