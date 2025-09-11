//OCRData
import Logo from "../assets/Images/FastKYC_logo.png";
import Product_Logo from "../assets/Images/Product_assets/Product4.png";
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";

// Nav icons
import Product1_nav from "../assets/Images/Product_assets/Icon1.png";
import Product2_nav from "../assets/Images/Product_assets/Icon2.png";
import Product3_nav from "../assets/Images/Product_assets/Icon3.png";
import Product4_nav from "../assets/Images/Product_assets/Icon4.png";
import Product5_nav from "../assets/Images/Product_assets/Icon5.png";

//Why KYC Data
import icon1 from "../assets/Images/Product_assets/Products_Icon5.png";
import icon2 from "../assets/Images/Product_assets/Products_Icon6.png";
import icon3 from "../assets/Images/Product_assets/Products_Icon3.png";
import icon4 from "../assets/Images/Product_assets/Products_Icon4.png";

import asset1 from "../assets/Images/Productsverify_assets/OCR_Check.png";
import asset2 from "../assets/Images/Productsverify_assets/OCR_Verify.png";

const OCRData = {
  pageData: {
    header: {
      logo: Logo,
      nav: [
        { label: "Why FastKYC", link: "#" },
        { label: "Products", link: "#", dropdown: true },
        { label: "Resources", link: "#" },
        { label: "Company", link: "https://pentafox.in/", external: true }
      ],
      actions: [
        { text: "Sign in", link: "/login", primary: false },
        { text: "Book a demo", link: "/book-demo", primary: true },
      ],
    },
    hero: {
      title: "Simplify OCR, Focus on Accuracy",
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
    companiesLogos: [bank1, bank2, bank3, bank4],
     products_nav: [
       { icon: Product5_nav, title: "KYC", desc: "Simplify Onboarding with Powerful KYC", link: "/products-kyc" },
       { icon: Product3_nav, title: "Bank", desc: "Instant Bank Account Verification", link: "/products-bank-account-verification" },
       { icon: Product2_nav, title: "Security & Compliance API", desc: "Watermark and Aadhaar Masking", link: "/products-security" },
       { icon: Product4_nav, title: "OCR API", desc: "Extract data from government IDs and documents", link: "/products-ocr-apis" },
       { icon: Product1_nav, title: "GST", desc: "GST Verification APIs", link: "/products-gst" },
     ]
  },
  whyFastKycData: {
    heading: "Why FastKYC",
    subheading: "Simple and Secure Document OCR",
    description:
      "Our OCR APIs enable instant extraction of information from government-issued IDs, ensuring fast, accurate, and reliable verification. Here’s why businesses trust us:",
    features: [
      {
        icon: icon1,
        title: "Instant Data Extraction",
        desc: "Digitize key details from PAN, Aadhaar, Passport, Driving License, Voter ID, and Vehicle RC in real time, eliminating manual entry errors."
      },
      {
        icon: icon2,
        title: "Fraud Prevention",
        desc: "Detect tampered or fake documents instantly. Our OCR verifies authenticity and ensures only valid identity data enters your systems."
      },
      {
        icon: icon3,
        title: "Seamless Real-Time Access",
        desc: "Get quick, structured data directly from uploaded documents to accelerate onboarding and compliance workflows."
      },
      {
        icon: icon4,
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
        icon: "Triangle",
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
