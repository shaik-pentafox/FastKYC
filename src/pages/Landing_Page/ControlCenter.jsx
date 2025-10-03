import React from "react";

//Components
import Head_Section from "./Head_Section";
import Products from "./Products";
import Customer from "./Customers";
import Designed from "./Designed";
import PayIntegrate from "../PayIntegrate";
import FAQ from "../FAQ";
import Contact from "../Contact";
import Footer from "../Footer";

//Json Data
import data from "../../services/LandingPageData";
import footerData from "../../services/FooterPageData";

function App() {
  return (
    <>
      <Head_Section data={data.heroData} products_nav={data.products_nav} solution_nav={data.solution_nav}/>
      <Products sections={data.productSections} whyChoose={data.whyChoose} features={data.whyChoose.featureCards} />
      <Customer data={data.customerData} />
      <Designed data={data.designedData} />
      <PayIntegrate data={data.payIntegrateData} align="left" />
      <FAQ data={data.faqData} />
      <Contact data={data.contactData} type="image" />
      <Footer data={footerData} />
    </>
  );
}

export default App;
