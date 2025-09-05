//OCRData
import Logo from "../assets/Images/FastKYC_logo.png";
import Product_Logo from "../assets/Images/Product_assets/Product4.png";
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo3.png";
import bank4 from "../assets/Images/Company_assets/Company_logo4.png";

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
        { text: "Sign in", link: "/Login", primary: false },
        { text: "Book a demo", link: "/Book_demo", primary: true },
      ],
    },
    hero: {
      title: "Simplify OCR, Focus on Accuracy",
      description:
        "Extract verified data from government-issued IDs in seconds — PAN, Passport, Driving License, Voter ID, Vehicle RC, and Aadhaar. Automate document processing, reduce errors, and speed up onboarding with ease.",
      buttons: [
        {
          label: "Get started",
          link: "/Login",
          style:
            "hidden md:block bg-[#F44336] text-white px-5 py-2 rounded-[8px] font-medium hover:bg-red-700 transition text-[16px]"
        },
        {
          label: "Book a Demo",
          link: "/Book_demo",
          style:
            "border border-[#F44336] px-5 py-2 rounded-[8px] font-medium hover:bg-[#F44336] hover:text-white transition md:text-[#F44336] bg-[#F44336] md:bg-white text-[#E4E6EA] text-[16px]"
        }
      ],
      image: Product_Logo
    },
    companiesLogos: [bank1, bank2, bank3, bank4],
     products_nav: [
                { icon: Product1_nav, title: "GST", desc: "GST & Business Verification APIs", link: "/Products_GST" },
                { icon: Product2_nav, title: "Security & Compliance APIs", desc: "Watermark and Aadhaar Masking", link: "/Products_security" },
                { icon: Product3_nav, title: "Bank", desc: "Bank Account Verification", link: "/Products_bank-account-verification" },
                { icon: Product4_nav, title: "OCR APIs", desc: "Extract data from government IDs and documents", link: "/Products_OCR-APIs" },
                { icon: Product5_nav, title: "KYCs", desc: "Simplify onboarding with powerful KYC", link: "/Products_KYC" },
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
      "In today’s fast-paced business environment, verifying the authenticity of your partners — whether they’re buyers, sellers, or collaborators — is critical. With Pentafox FastKYC APIs, you can instantly confirm business credibility and stay compliant.",
    features: [
      {
        icon: "Database",
        title: "Instant Data Capture",
        description:
          "Capture critical business data instantly without manual input, reducing delays and errors."
      },
      {
        icon: "Checks",
        title: "Error-Free Processing",
        description:
          "Automated verification ensures your data is processed accurately every time."
      },
      {
        icon: "UserPlus",
        title: "Faster Onboarding",
        description:
          "Get new users and partners onboard quickly with seamless KYC processes."
      },
      {
        icon: "Shield",
        title: "Fraud Prevention",
        description:
          "Detect suspicious activity early to protect your business from fraud."
      },
      {
        icon: "Code",
        title: "Easy API Integration",
        description:
          "Integrate our APIs easily into your existing workflow and systems."
      }
    ]
  },
  Customer_section: {
    heading: "Know your customer",
    features: [
      {
        icon: "Heart",
        title: "Vendor & Partner Onboarding",
        desc: "Onboard trusted suppliers and partners without delays."
      },
      {
        icon: "CurrencyRupee",
        title: "Loan & Credit Processing",
        desc: "Ensure borrower companies are authentic before disbursing funds."
      },
      {
        icon: "Briefcase",
        title: "B2B Marketplaces",
        desc: "Build credibility by authenticating sellers and service providers."
      },
      {
        icon: "CreditCard",
        title: "Corporate Payouts",
        desc: "Avoid failed or misdirected transactions by verifying bank accounts."
      },
      {
        icon: "FileCertificat",
        title: "Compliance & Auditing",
        desc: "Stay aligned with RBI, AML, and government KYB regulations."
      }
    ]
  }
};

export default OCRData;
