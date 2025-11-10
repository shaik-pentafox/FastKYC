import React from 'react'
import HeadSection from './Resource_HeadSection'
import API_Section from './API_Section';
import Compliance_Section from './Compliance_Section';
import Protected_Section from './Protected_Section';
import Footer from '../Footer';

//Response data
import ResourceData from "../../services/ResourcePageData";
import footerData from '../../services/FooterPageData'

function FastKYC_ControlCenter() {
  return (
    <>
      <HeadSection data={ResourceData.pageData}/>
      <API_Section data={ResourceData.apiSections}/>
      <Compliance_Section data={ResourceData.complianceData}/>
      <Protected_Section data={ResourceData.ProtectedData} contact_data={ResourceData.contactData}/>
      <Footer data={footerData} />  
    </>
  )
}

export default FastKYC_ControlCenter
