//SecurityData
import Logo from "../assets/Images/FastKYC_logo.png";
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
import SECURITY from "../assets/Images/Product_assets/Security.png";

//Why KYC
import icon1 from "../assets/Images/Product_assets/Products_Icon5.png";
import icon2 from "../assets/Images/Product_assets/Products_Icon6.png";
import icon3 from "../assets/Images/Product_assets/Products_Icon3.png";
import icon4 from "../assets/Images/Product_assets/Products_Icon4.png";

import SECURITY_Match from "../assets/Images/Productsverify_assets/SECURITY_Match.png";
import SECURITY_Mark from "../assets/Images/Productsverify_assets/SECURITY_Mark.png";

const SecurityData = {
  pageData: {
    header: {
      logo: Logo,
      nav: [
        { label: "Why FastKYC", link: "#", dropdown: false },
        { label: "Products", link: "#", dropdown: true },
        { label: "Resources", link: "#", dropdown: false },
        { label: "Company", link: "https://pentafox.in/", dropdown: false,external:true },
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
      productImage: SECURITY,
      companiesLogos: [bank1, bank2, bank3, bank4],
    },
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
    subheading: "Simple and Secure Data Protection",
    description:
      "Our Security & Compliance APIs safeguard sensitive identity information with Aadhaar Masking and Document Watermarking, ensuring privacy, compliance, and trust. Here’s why businesses rely on us:",
    features: [
      {
        icon: icon1,
        title: "Aadhaar Masking",
        desc: "Automatically hide Aadhaar numbers while retaining the last 4 digits, ensuring compliance with UIDAI guidelines and protecting user privacy.",
      },
      {
        icon: icon2,
        title: "Document Watermarking",
        desc: "Securely stamp documents with customizable watermarks to prevent duplication, forgery, and unauthorized use.",
      },
      {
        icon: icon3,
        title: "Fraud Prevention",
        desc: "Prevent identity misuse by ensuring that customer data is always protected and compliant with the latest regulations.",
      },
      {
        icon: icon4,
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
        id: 1,
        title: "Face Match",
        description:
          "Verify customer identity by matching selfies with official ID photos in seconds.",
        features: [
          " AI-powered, highly accurate facial recognition.",
          "Prevent impersonation and identity fraud.",
        ],
        image:SECURITY_Match,
        alt: "Photo Match",
      },
      {
        id: 2,
        title: " Watermark",
        subtitle:"(Document Security)",
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
  Customer_section: {
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