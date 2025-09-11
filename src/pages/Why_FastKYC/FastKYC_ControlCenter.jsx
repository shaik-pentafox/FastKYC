import React from 'react'
import HeadSection from './FastKYC_HeadSection'
import Footer from '../Footer';

//Jsondata
import FastKYCData from "../../services/FastKYCPageData";
//import footerData from '../../services/FooterPageData'

function FastKYC_ControlCenter() {
  return (
    <>
      <HeadSection data={FastKYCData.pageData}/>
      {/* <Footer data={footerData} />  */}
    </>
  )
}

export default FastKYC_ControlCenter
