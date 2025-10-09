import Logo from "../assets/Images/FastKYC_logo.png";
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";
import bank5 from "../assets/Images/Company_assets/Company_logo5.png";
import bank6 from "../assets/Images/Company_assets/Company_logo6.png";

import Walane from "../assets/Images/icons/Walane.png"

const bookDemoData = {
  logo: Logo,
  hero: {
    title: "Seamless verification with faster approvals, stronger security, and full compliance",
    features: [
      { id: 1, icon: "cpu", text: "Instant KYC, bank, and GST verification in seconds" },
      { id: 2, icon: "shield", text: "Secure Aadhaar masking, watermarking & fraud prevention" },
      { id: 3, icon: "star", text: "Trusted by fintechs, banks, and enterprises across industries" }
    ],
    stats: [
      { value: "500+", label: " Businesses Verified " },
      { value: "96%", label: "Auto-approval Rate" },
      { value: "60%", label: "Faster Onboarding" }
    ],
    banks: [bank1, bank2, bank3, bank4,bank5,bank6]
  },
  form: {
    title: "Sign up",
    successMessage: "Thanks for booking. We'll reach out soon",
   fields: [
  { id: "fullName", label: "Full Name", type: "text", placeholder: "Enter your full name", required: false },
  { id: "companyName", label: "Company Name", type: "text", placeholder: "Enter company name", required: true },
  { id: "email", label: "Email", type: "email", placeholder: "Enter working email address", required: true },
  { id: "phone", label: "Phone number", type: "tel", placeholder: "Enter phone number", required: true }
],
    countryOptions: ["India (+91)"],
    submit: { label: "Submit" }
  },
  products_nav: [
    { icon: "Id", title: "KYC", desc: "Simplify Onboarding with Powerful KYC", link: "/products-kyc" },
    { icon: "Bank", title: "Bank", desc: "Instant Bank Account Verification", link: "/products-bank-account-verification" },
    { icon: "Lock", title: "Security & Compliance", desc: "Watermark and Aadhaar Masking", link: "/products-security" },
    { icon: "Scan", title: "OCR", desc: "Extract data from government IDs and documents", link: "/products-ocr-apis" },
    { icon: "Tax", title: "GST", desc: "GST Verification APIs", link: "/products-gst" }
  ],
 solution_nav: [
    { icon: "Whatsapp", title: "WhatsApp KYC", desc: "Secure and hassle-free KYC verification directly on WhatsApp for faster onboarding and customer trust", link: "/solution-whatsappkyc" },
    { icon: "Message", title: "SMS", desc: "Reliable and instant communication for OTPs, alerts, reminders, and customer engagement", link: "/solution-sms" },
    { image: Walane, title: "walane", desc: "Smart and automated conversations that drive customer support, sales, and retention", link: "https://www.walane.ai/", external: true }
  ],
};

export default bookDemoData;
