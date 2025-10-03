import Logo from "../assets/Images/FastKYC_logo.png";
import Product_Logo from "../assets/Images/Product_assets/Product_Bank.png";
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";
import bank5 from "../assets/Images/Company_assets/Company_logo5.png";


import Integration from "../assets/Images/Integration.png";

import assets from "../assets/Images/Productsverify_assets/BANK_Verify.png";

import Book from "../assets/Images/Book.png";
import Walane from "../assets/Images/icons/Walane.png"

const BankData = {
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
      heading: "Bank Account Verification in Seconds",
      subtext:
        "Instant, reliable bank account verification for secure and seamless transactions.",
      includes_title: "Includes:",
      features: [
        "Validate account numbers, IFSC codes, holder names and account status instantly",
        "Prevent failed payments and fraudulent accounts with real-time checks",
        "Lightweight APIs that integrate quickly and scale effortlessly",
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
    companiesLogos: [bank1, bank2, bank3, bank4,bank5],
  products_nav: [
    { icon: "Id", title: "KYC", desc: "Simplify Onboarding with Powerful KYC", link: "/products-kyc" },
    { icon: "Bank", title: "Bank", desc: "Instant Bank Account Verification", link: "/products-bank-account-verification" },
    { icon: "Lock", title: "Security & Compliance", desc: "Watermark and Aadhaar Masking", link: "/products-security" },
    { icon: "Scan", title: "OCR", desc: "Extract data from government IDs and documents", link: "/products-ocr-apis" },
    { icon: "Tax", title: "GST", desc: "GST Verification APIs", link: "/products-gst" },
  ],
  solution_nav: [
    { icon: "Message", title: "SMS", desc: "Instant and secure messaging for OTPs, alerts, reminders, and updates", link: "/solution-sms" },
    { image: Walane, title: "walane", desc: "Turn chats into customers with automated sales and support on WaLane", link: "https://www.walane.ai/", external: true }
  ]
  },
  whyFastKycData: {
    heading: "Why FastKYC",
    subheading: "Simple and Secure Bank Account Verification",
    description:
      "Our API enables instant validation of bank account details, ensuring safe, accurate, and seamless transactions. Here’s why businesses rely on us:",
    features: [
      {
        icon: "Check",
        title: "Instant Account Validation",
        desc: "Verify account numbers, IFSC codes, and account holder names in real-time to prevent errors and failed transactions.",
      },
      {
        icon: "AlertTriangle",
        title: "Fraud Prevention",
        desc: "Stop fraudulent accounts before they impact your business. Our API confirms ownership and account status instantly, giving you complete peace of mind.",
      },
      {
        icon: "Database",
        title: "Seamless Real-Time Access",
        desc: "Get instant confirmations from trusted banking networks to ensure accuracy, timeliness, and reliability at scale.",
      },
      {
        icon: "Shield",
        title: "Secure Encryption & Compliance",
        desc: "Built with enterprise-grade encryption, FastKYC ensures your financial data remains private, compliant, and secure at every step.",
      },
    ]
  },
  verificationData: {
    title: "Bank Account Verification",
    description:
      "Validate bank account details instantly to ensure correct payouts and reduce payment failures. Our API confirms account validity in real-time.",
    points: [
      "Verify account holder’s name and status.",
      "Prevent transaction errors and fraud."
    ],
    image: assets
  },
  // contactData: {
  //   main: {
  //     title: "Ready to get started? as Unlock Instant Verification",
  //     highlight: "get started?",
  //     description:
  //       "Create your account instantly and start using our Bank Account Verification APIs, or connect with our team to design solutions that fit your business.",
  //     buttons: [
  //       { text: "Get Started", type: "primary", link: "/login" },
  //       { text: "Contact Sales", type: "secondary", icon: true, link: "/book-demo" },
  //     ]

  //   },
  //   features: [
  //     {
  //       title: "Access Verified Bank Details",
  //       description:
  //         "Instantly validate account numbers, IFSC codes, and account holder names from trusted banking networks.",
  //     },
  //     {
  //       title: "Ensure Seamless Transactions",
  //       description:
  //         "Prevent failed payments and fraud by verifying bank accounts in real time.",
  //     },
  //   ],
  // },
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
      },
   integration: {
      heading: "Jump into integration",
      description:
        "Our detailed API documentation makes setup simple, so you can go live in minutes.",
      buttonText: "API Reference",
      buttonIcon: "→",
      image: Integration
    }
};

export default BankData;
