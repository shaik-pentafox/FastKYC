//OCRData
import Logo from "../assets/Images/FastKYC_logo.png";
import Product_Logo from "../assets/Images/Product_assets/Product_OCR.png";
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";
import bank5 from "../assets/Images/Company_assets/Company_logo5.png";
import bank6 from "../assets/Images/Company_assets/Company_logo6.png";

import asset1 from "../assets/Images/Productsverify_assets/OCR_Check.png";
import asset2 from "../assets/Images/Productsverify_assets/OCR_Verify.png";

import Walane from "../assets/Images/icons/Walane.png"

const OCRData = {
  pageData: {
    header: {
      logo: Logo,
      nav: [
        { label: "Products", link: "#", dropdown: true },
        { label: "Resources", link: "/fast-kyc" },
        { label: "Solution", link: "#", dropdown: true },
        { label: "Company", link: "https://pentafox.in/", external: true }
      ],
      actions: [
        { text: "Sign in", link: "/login", primary: false },
        { text: "Book a demo", link: "/book-demo", primary: true },
      ],
    },
    hero: {
      heading: "Simplify OCR, Focus on Accuracy",
      subtext: "Instant, reliable document security for safe and compliant growth.",
      includes_title: "Includes:",
      features: [
        "Extract key details from PAN, Aadhaar, Passport, DL, Voter ID & RC        ",
        "Eliminate manual entry errors with instant, structured data",
        "Secure, compliant APIs that integrate easily into existing workflows",
      ],
      buttons: [
        {
          label: "Get started",
          link: "/login",
          style:
            "hidden md:block bg-[#F44336] text-white px-5 py-2 rounded-[8px] font-medium hover:bg-red-700 transition text-[16px]"
        },
        {
          label: "Book a Demo",
          link: "/book-demo",
          style:
            "border border-[#F44336] px-5 py-2 rounded-[8px] font-medium hover:bg-[#F44336] hover:text-white transition md:text-[#F44336] bg-[#F44336] md:bg-white text-[#E4E6EA] text-[16px]"
        }
      ],
      image: Product_Logo
    },
    companiesLogos: [bank1, bank2, bank3, bank4, bank5,bank6],
    products_nav: [
      { icon: "Id", title: "KYC", desc: "Simplify Onboarding with Powerful KYC", link: "/products-kyc" },
      { icon: "Bank", title: "Bank", desc: "Instant Bank Account Verification", link: "/products-bank-account-verification" },
      { icon: "Lock", title: "Security & Compliance", desc: "Watermark and Aadhaar Masking", link: "/products-security" },
      { icon: "Scan", title: "OCR", desc: "Extract data from government IDs and documents", link: "/products-ocr-apis" },
      { icon: "Tax", title: "GST", desc: "GST Verification APIs", link: "/products-gst" },
    ],
    solution_nav: [
      { icon: "Whatsapp", title: "WhatsApp KYC", desc: "Secure and hassle-free KYC verification directly on WhatsApp for faster onboarding and customer trust", link: "/solution-whatsappkyc" },
      { icon: "Message", title: "SMS", desc: "Reliable and instant communication for OTPs, alerts, reminders, and customer engagement", link: "/solution-sms" },
      { image: Walane, title: "walane", desc: "Smart and automated conversations that drive customer support, sales, and retention", link: "https://www.walane.ai/", external: true }
    ],
  },
  whyFastKycData: {
    heading: "Why FastKYC",
    subheading: "Simple and Secure Document OCR",
    description:
      "Our OCR APIs enable instant extraction of information from government-issued IDs, ensuring fast, accurate, and reliable verification. Here’s why businesses trust us:",
    features: [
      {
        icon: "Check",
        title: "Instant Data Extraction",
        desc: "Digitize key details from PAN, Aadhaar, Passport, Driving License, Voter ID, and Vehicle RC in real time, eliminating manual entry errors."
      },
      {
        icon: "AlertTriangle",
        title: "Fraud Prevention",
        desc: "Detect tampered or fake documents instantly. Our OCR verifies authenticity and ensures only valid identity data enters your systems."
      },
      {
        icon: "Database",
        title: "Seamless Real-Time Access",
        desc: "Get quick, structured data directly from uploaded documents to accelerate onboarding and compliance workflows."
      },
      {
        icon: "Shield",
        title: "Secure Encryption & Compliance",
        desc: "With enterprise-grade encryption, FastKYC ensures document data remains private, compliant, and secure throughout the process."
      }
    ]
  },
  Business_section: {
    heading: "Know your business",
    subheading: "Accelerate Trust",
    description:
      "In today’s digital-first world, verifying customer identities quickly and accurately is critical. With FastKYC OCR APIs, you can extract and validate identity details instantly - reducing errors, preventing fraud, and ensuring compliance.",
    features: [
      {
        icon: "Database",
        title: "Extract Verified Data",
        description:
          "Capture and digitize key details from PAN, Aadhaar, Passport, Driving License, Voter ID, and Vehicle RC in real time."
      },
      {
        icon: "FileOff",
        title: "Detect Fake Documents",
        description:
          "Spot tampered or fraudulent IDs instantly with OCR validation for safer onboarding."
      },
      {
        icon: "User",
        title: "Streamline Onboarding",
        description:
          "Accelerate KYC processes by eliminating manual data entry and ensuring accuracy from the very first step."
      },
    ]
  },
  checkData: [
    {
      tabs: [
        // { key: "All", label: "All", icon: "LayoutGrid" },
        { key: "Liveliness Check", label: "Liveliness Check", icon: "UserScan" },
        { key: "OCR", label: "OCR", icon: "TextScan" },
      ],
    },
    {
      id: 1,
      title: "Liveliness Check",
      description:
        "Authenticate that a customer is physically present during verification using advanced liveness detection.",
      points: [
        "Prevent spoofing and deepfake fraud.",
        "Strengthen biometric verification processes.",
      ],
      image: asset1,
    },
    {
      id: 2,
      title: "OCR",
      subtitle:
        "PAN / Passport / Driving License / Voter ID / Vehicle RC / Aadhaar OCR",
      description:
        "Ensure the customer’s name matches across official records for smooth KYC compliance.",
      points: [
        "Support for multiple ID types.",
        "Aadhaar masking for data privacy.",
      ],
      image: asset2,
    },
  ],
  Customer_section: {
    heading: "Know your customer",
    description: "Instantly digitize and verify identity documents with accuracy and speed. Our OCR APIs extract key details from PAN, Aadhaar, Passport, Voter ID, and Driving License in real time, reducing errors and ensuring smoother onboarding.",
    features: [
      {
        icon: "Database",
        title: "Extract Verified Data",
        desc: "Capture name, DOB, document number, and more in seconds"
      },
      {
        icon: "Warning",
        title: "Prevent Fraud",
        desc: "Detect tampered or fake IDs instantly"
      },
      {
        icon: "Plus",
        title: "Seamless Onboarding",
        desc: "Replace manual data entry with automation for faster KYC"
      },
      {
        icon: "Shield",
        title: "Secure & Compliant",
        desc: "Enterprise-grade encryption ensures safe handling of sensitive data"
      },
    ]
  }
};

export default OCRData;
