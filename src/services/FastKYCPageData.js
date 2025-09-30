import { IconBox, IconBolt, IconUsersGroup, IconInvoice, IconClockBolt } from "@tabler/icons-react";

import Logo from "../assets/Images/FastKYC_logo.png";
import Product_Logo from "../assets/Images/Why_FastKYC/Group.png";
import Walane from "../assets/Images/icons/Walane.png"
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";
import bank5 from "../assets/Images/Company_assets/Company_logo5.png";

// import api_logo from "../assets/Images/Integration.png";
// import api_logo2 from "../assets/Images/Why_FastKYC/api_logo.png";
// import api_logo3 from "../assets/Images/Why_FastKYC/api_logo2.png";
import api_logo from "../assets/Images/Why_FastKYC/Devloper_logo.png";
import api_logo2 from "../assets/Images/Why_FastKYC/api_doc2.png";
import api_logo3 from "../assets/Images/Why_FastKYC/Dev_logo.png";
import back from '../assets/Images/Why_FastKYC/back.png'

import postman_logo from "../assets/Images/Why_FastKYC/Vector.png";

import border from "../assets/Images/Why_FastKYC/border.png";
import border2 from "../assets/Images/Why_FastKYC/border2.png";

import Book from "../assets/Images/Book.png";

const FastKYCPageData = {
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
      heading: "APIs That Automate Your KYC Process",
      subtext: "Plug into our API stack and let automation handle the heavy lifting - fast, seamless, and always compliant",
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
    companiesLogos: [bank1, bank2, bank3, bank4,bank5],
    products_nav: [
      { icon: "Id", title: "KYC", desc: "Simplify Onboarding with Powerful KYC", link: "/products-kyc" },
      { icon: "Bank", title: "Bank", desc: "Instant Bank Account Verification", link: "/products-bank-account-verification" },
      { icon: "Lock", title: "Security & Compliance", desc: "Watermark and Aadhaar Masking", link: "/products-security" },
      { icon: "Scan", title: "OCR", desc: "Extract data from government IDs and documents", link: "/products-ocr-apis" },
      { icon: "Tax", title: "GST", desc: "GST Verification APIs", link: "/products-gst" },
    ],
    solution_nav: [
    { icon: "Message", title: "SMS", desc: "Instant and secure messaging for OTPs, alerts, reminders, and updates", link: "/products-sms" },
    { image: Walane, title: "walane", desc: "Turn chats into customers with automated sales and support on WaLane", link: "https://www.walane.ai/", external: true }
  ]
  },
  apiSections: {
    section1: {
      heading: "Empowering businesses with powerful REST APIs, developer-friendly docs, transparent pricing, and instant console access",
      left: {
        title: "Developer-Ready APIs",
        subtitle: "Well-Structured, Compliant APIs",
        description: "Built by developers, for developers  our APIs are compliant with the latest KYC rules, intuitive, and effortless to integrate.",
        buttonText: "Explore APIs",
        buttonColor: "text-red-600 border-red-600",
        buttonArrow: "→",
      },
      rightImage: [back, api_logo],
    },
    section2: {
      heading: "API Documentation",
      subtitle: "Crystal-Clear Documentation for Seamless Integration",
      description: "Our API Docs are built for everyone - developers, product managers, and even non-tech teams can understand and test with ease.",
      buttonText: "Explore API Docs",
      buttonColor: "text-[#E20303] border-[#E20303]",
      buttonArrow: "→",
      features: [
        {
          title: "Postman Collections",
          description: "Instant Postman testing with ready-made API calls - fast, simple, and code-free.",
          iconType: "image",
          icon: postman_logo,
          iconBg: "#FFF5F5",
          linkText: "Explore →",
          linkColor: "#F44336",
        },
        {
          title: "SDKs and Clients (Coming soon)",
          description: "Accelerate your launch with easy SDK integration across multiple languages.",
          iconType: "tabler",
          icon: IconBox,
          iconColor: "#E20303",
          iconBg: "#FFF5F5",
        },
      ],
      leftImage: [back, api_logo2],
    },
    section3: {
      heading: "Dev Console",
      subtitle: "Access powerful APIs instantly - no waiting, no hassle",
      description: "One platform to manage your API requests, billing and payments with ease",
      buttonText: "Start free trial",
      buttonColor: "text-[#E20303] border-[#E20303]",
      buttonArrow: "→",
      features: [
        {
          title: "Onboard in Minutes",
          description: "No complex setup - just sign up, integrate, and start building instantly",
          iconType: "tabler",
          icon: IconBolt,
          iconColor: "#E20303",
          iconBg: "#FFF5F5",
        },
        {
          title: "Build with Your Team",
          description: "Invite teammates, collaborate in real time, and ship faster together",
          iconType: "tabler",
          icon: IconUsersGroup,
          iconColor: "#E20303",
          iconBg: "#FFF5F5",
        },
        {
          title: "Adaptive Billing",
          description: "One-time, subscription, or wallet - the choice is yours",
          iconType: "tabler",
          icon: IconInvoice,
          iconColor: "#E20303",
          iconBg: "#FFF5F5",
        },
        {
          title: "Instant Insights",
          description: "Monitor usage in real time and create reports instantly",
          iconType: "tabler",
          icon: IconClockBolt,
          iconColor: "#E20303",
          iconBg: "#FFF5F5",
        },
      ],
      rightImage: [back, api_logo3],
    },
  },
  complianceData: {
    heading: "Automating India’s Tax Compliance",
    subheading: "Navigating Tax Compliance Made Simple with Technology",
    features: [
      {
        id: 1,
        heading: "Grow without boundaries",
        headingColor: "#F44336",
        description: "Our platform\nscales with you",
        descriptionColor: "#1E1E1E",
        backgroundColor: "#FFE7E7",
        backgroundImage: border,
        headingAlign: "self-start w-2/3",
        descAlign: "self-end text-right",

      },
      {
        id: 2,
        heading: "Always On Reliability",
        headingColor: "#FFFFFF",
        descriptionLines: [
          { text: "99.9%", size: "text-2xl md:text-[48px]", weight: "font-semibold" },
          { text: "Uptime Guarantee", size: "text-lg md:text-[26px]", weight: "font-bold" },
        ],
        descriptionColor: "#FFFFFF",
        backgroundColor: "#FF5D51",
        backgroundImage: border2,
        headingAlign: "self-start",
        descAlign: "self-end text-right",
        colSpan: 2,
      },
      {
        id: 3,
        heading: "Performance",
        headingColor: "#FFFFFF",
        description: "Low Latency\nHigh Impact",
        descriptionColor: "#FFFFFF",
        backgroundColor: "#FF5D51",
        backgroundImage: border2,
        headingAlign: "self-start",
        descAlign: "self-end text-right",
        colSpan: 2,
      },
      {
        id: 4,
        heading: "Volume",
        headingColor: "#F44336",
        description: "From Hundreds to\nMillions Seamlessly",
        descriptionColor: "#1E1E1E",
        backgroundColor: "#FFE7E7",
        backgroundImage: border,
        headingAlign: "self-start",
        descAlign: "self-end text-right",
      },
    ]
  },
  ProtectedData: {
    heading: " Your Data, Always Protected",
    subheading: "FastKYC safeguards sensitive data with top-tier security and compliance",
    features: [
      {
        id: 1,
        icon: "Check",
        title: "ISO/IEC Certified Security",
        description:
          "FastKYC follows ISO/IEC 27001 standards, ensuring world-class information security management",
      },
      {
        id: 2,
        icon: "Lock",
        title: "Controlled Access. Maximum Security",
        description:
          "FastKYC lets you lock API access to your private network for an extra layer of security",
      },
      {
        id: 3,
        icon: "Shield",
        title: "Shielded from Attacks",
        description:
          "Our systems detect and neutralize DDoS attacks instantly, keeping your services uninterrupted",
      },
      {
        id: 4,
        icon: "Trash",
        title: "Zero Data Retention",
        description:
          "Zero sensitive data storage. Processed data is discarded within 30 days to ensure compliance",
      },
      {
        id: 5,
        icon: "UserShield",
        title: "Role-based Access Control",
        description:
          "POLP-based controls limit data access to only those who need it, safeguarding security and compliance",
      },
      {
        id: 6,
        icon: "Triangle",
        title: "Vulnerability Prevention",
        description:
          "FastKYC continuously scans for vulnerabilities, ensuring your systems remain secure and compliant",
      },
    ]
  },
  contactData: {
    title: "Click to below",
    highlight: "get started?",
    description:
      "Create your account instantly and start using our APIs, or connect with our sales team to explore your BIZBOK requirements.",
    buttons: [
      { text: "Get Started", type: "primary", link: "/login" },
      { text: "Contact Sales", type: "secondary", icon: true, link: "/book-demo" },
    ],
    image: Book
  }
};

export default FastKYCPageData;
