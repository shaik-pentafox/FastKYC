//SecurityData
import Logo from "../assets/Images/FastKYC_logo.png";
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";
import bank5 from "../assets/Images/Company_assets/Company_logo5.png";
import bank6 from "../assets/Images/Company_assets/Company_logo6.png";

import SECURITY from "../assets/Images/Product_assets/Product_Security.png";

import SECURITY_Match from "../assets/Images/Productsverify_assets/SECURITY_Match.png";
import SECURITY_Mark from "../assets/Images/Productsverify_assets/SECURITY_Mark.png";

import Walane from "../assets/Images/icons/Walane.png"

const SecurityData = {
  pageData: {
    header: {
      logo: Logo,
      nav: [
        { label: "Products", link: "#", dropdown: true },
        { label: "Solution", link: "#", dropdown: true },
        { label: "Resources", link: "/fast-kyc", dropdown: false },
        { label: "Company", link: "https://pentafox.in/", dropdown: false, external: true }
      ],
      actions: [
        { text: "Sign in", link: "/login", primary: false },
        { text: "Book a demo", link: "/book-demo", primary: true },
      ],
    },
    hero: {
      heading: "Simplify Security, Focus on Compliance",
      subtext:
        "Instant, reliable data protection with Aadhaar masking and watermarking.",
      includes_title: "Includes:",
      features: [
        "Protect sensitive Aadhaar details with instant masking.",
        "Secure documents with dynamic watermarks to prevent misuse.",
        "APIs that are lightweight, accurate, and easy to integrate.",
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
      image: SECURITY,
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
    subheading: "Simple and Secure Data Protection",
    description:
      "Our Security & Compliance APIs safeguard sensitive identity information with Aadhaar Masking and Document Watermarking, ensuring privacy, compliance, and trust. Here’s why businesses rely on us:",
    features: [
      {
        icon: "Check",
        title: "Aadhaar Masking",
        desc: "Automatically hide Aadhaar numbers while retaining the last 4 digits, ensuring compliance with UIDAI guidelines and protecting user privacy.",
      },
      {
        icon: "AlertTriangle",
        title: "Document Watermarking",
        desc: "Securely stamp documents with customizable watermarks to prevent duplication, forgery, and unauthorized use.",
      },
      {
        icon: "Database",
        title: "Fraud Prevention",
        desc: "Prevent identity misuse by ensuring that customer data is always protected and compliant with the latest regulations.",
      },
      {
        icon: "Shield",
        title: "Secure Encryption & Compliance",
        desc: "Backed by enterprise-grade encryption and regulatory compliance, FastKYC ensures sensitive information stays private and tamper-proof at every step.",
      },
    ]
  },
  Business_section: {
    heading: "Know your business",
    description:
      "In today’s compliance-driven landscape, protecting customer data is just as important as verifying it. With FastKYC Security & Compliance APIs, you can safeguard sensitive information, prevent misuse, and stay fully compliant with regulations.",
    features: [
      {
        icon: "Database",
        title: "Aadhaar Masking",
        description:
          "Automatically hide Aadhaar numbers while keeping only the last 4 digits visible, ensuring UIDAI compliance and protecting customer privacy."
      },
      {
        icon: "FileOff",
        title: "Watermarking Documents",
        description:
          "Apply customizable watermarks on identity documents to prevent forgery, duplication, and unauthorized usage."
      },
      {
        icon: "User",
        title: "Prevent Data Misuse",
        description:
          "Ensure that sensitive identity data cannot be exploited, keeping your onboarding process secure and trustworthy."
      },
      {
        icon: "Triangle",
        title: "Stay Compliant with Confidence",
        description:
          "Built with enterprise-grade encryption and aligned with regulatory frameworks, FastKYC ensures your business meets the highest security standards."
      },
    ]
  },
  verificationData: [
    {
      tabs: [
        // { key: "All", label: "All", icon: "LayoutGrid" },
        { key: "Face Match", label: "Face Match", icon: "UserScan" },
        { key: "Watermark", label: "Watermark", icon: "TextScan" },
      ],
    },
    {
      id: 1,
      title: "Face Match",
      description:
        "Verify customer identity by matching selfies with official ID photos in seconds.",
      features: [
        " AI-powered, highly accurate facial recognition.",
        "Prevent impersonation and identity fraud.",
      ],
      image: SECURITY_Match,
      alt: "Photo Match",
      bg: "#F7F7F7"
    },
    {
      id: 2,
      title: "Watermark",
      subheading: "(Document Security)",
      description:
        " Protect sensitive documents with secure watermarking.",
      features: [
        "Prevent unauthorized sharing or tampering.",
        "Enhance trust in digital documents.",
      ],
      image: SECURITY_Mark,
      alt: " Water Mark",
    },
  ],
  Compliance_section: {
    heading: " Security & Compliance APIs",
    subtext: " (Aadhaar Masking, Watermark)",
    description: "Instantly digitize and verify identity documents with accuracy and speed. Our OCR APIs extract key details from PAN, Aadhaar, Passport, Voter ID, and Driving License in real time, reducing errors and ensuring smoother onboarding.",
    features: [
      {
        icon: "Heart",
        title: "Privacy Protection",
        desc: "Mask Aadhaar numbers to safeguard customer identity and meet UIDAI compliance standards."
      },
      {
        icon: "CurrencyRupee",
        title: "Document Integrity",
        desc: "Apply watermarks to official IDs and documents to prevent forgery or unauthorized use."
      },
      {
        icon: "Briefcase",
        title: "Fraud Prevention",
        desc: "Replace manual data entry with automation for faster KYC"
      },
      {
        icon: "CreditCard",
        title: "Secure Data Handling",
        desc: "Enterprise-grade encryption ensures customer information remains private and protected end-to-end"
      },
    ]
  }
}

export default SecurityData;