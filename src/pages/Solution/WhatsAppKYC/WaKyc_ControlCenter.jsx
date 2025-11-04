import React from 'react'

//Components
import WaKyc_HeadSection from "./WaKyc_HeadSection"
import WaKyc_Onboarding from "./WaKyc_Onboarding"
import WaKyc_Offer from './Offer_Section';
import WaKyc_Contact from '../../Contact'
import WaKyc_FAQ from '../../FAQ'
import Footer from '../../Footer'

//Json
import WaKycData from "../../../services/WhatsAppPageData";
import footerData from '../../../services/FooterPageData'

function WaKyc_ControlCenter() {
  return (
    <>
      <WaKyc_HeadSection data={WaKycData.pageData} />
      <WaKyc_Onboarding data={WaKycData.Onboarding} />
      <WaKyc_Offer data={WaKycData.Offer_section} />
      <WaKyc_FAQ data={WaKycData.faqData} />
      <WaKyc_Contact data={WaKycData.contactData} type='image' />
      <Footer data={footerData} />
    </>
  )
}

export default WaKyc_ControlCenter
