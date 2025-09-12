import React from 'react'
import HeadSection from './FastKYC_HeadSection'
import API_Section from './API_Section';
import Compliance_Section from './Compliance_Section';
import Protected_Section from './Protected_Section';
import Footer from '../Footer';

//Jsondata
import FastKYCData from "../../services/FastKYCPageData";
import footerData from '../../services/FooterPageData'

function FastKYC_ControlCenter() {
  return (
    <>
      <HeadSection data={FastKYCData.pageData}/>
      <API_Section data={FastKYCData.apiSections}/>
      <Compliance_Section data={FastKYCData.complianceData}/>
      <Protected_Section data={FastKYCData.ProtectedData} contact_data={FastKYCData.contactData}/>
      <Footer data={footerData} />  
    </>
  )
}

export default FastKYC_ControlCenter
