import Logo from "../assets/Images/FastKYC_logo.png";
import Whatsapp_icon from "../assets/Images/icons/WhatsApp.png"
import Whatsapp_logo from "../assets/Images/Product_assets/Solution_Whatsapp.png";
import Whatsapp_logo2 from "../assets/Images/Product_assets/Solution_Onboarding.png"

import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";
import bank5 from "../assets/Images/Company_assets/Company_logo5.png";
import bank6 from "../assets/Images/Company_assets/Company_logo6.png";

import Book from "../assets/Images/Book2.png";
import Walane from "../assets/Images/icons/Walane.png"

import Product1 from "../assets/Images/Productsverify_assets/KYC_PanVerify.png";

const WaKycData = {
  pageData: {
    header: {
      logo: Logo,
      nav: [
        { label: "Products", link: "#", dropdown: true },
        { label: "Resources", link: "/fast-kyc", dropdown: false },
        { label: "Solution", link: "#", dropdown: true },
        { label: "Company", link: "https://pentafox.in/", dropdown: false, external: true },
      ],
      actions: [
        { text: "Sign in", link: "/Login", primary: false },
        { text: "Book a demo", link: "/book-demo", primary: true },
      ],
    },
    hero: {
      heading_before: "Seamless Identity & Business Verification Over",
      image2: Whatsapp_icon,
      heading_after: "WhatsApp",
      subtext:
        "Cut down onboarding friction, reduce operational costs, and maintain regulatory compliance - all via the platform your customers already use.",
      includes_title: "Includes:",
      features: [
        "“Reduce your user onboarding costs by up to 95%”"
      ],
      buttons: [
        {
          label: "Request Demo",
          link: "/login",
          style:
            "hidden md:block bg-[#F44336] text-white px-5 py-2 rounded-[8px] font-medium hover:bg-red-700 transition text-[16px]"
        },
        {
          label: "Talk to Sales",
          link: "/book-demo",
          style:
            "border border-[#F44336] px-5 py-2 rounded-[8px] font-medium hover:bg-[#F44336] hover:text-white transition md:text-[#F44336] bg-[#F44336] md:bg-white text-[#E4E6EA] text-[16px]"
        }
      ],
      image: Whatsapp_logo,
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
  Onboarding: {
    sectionTitle: "Why forward-thinking companies are moving to WhatsApp KYC",
    heading: "Integrate in minutes. Scale with confidence",
    description:
      "Nobody likes long forms, endless app downloads, or waiting days to get verified. With WhatsApp KYC, the process happens right where your customers already spend most of their time. It’s fast, secure, and surprisingly simple - helping your business earn trust while reducing the cost of every onboarding.",
    image: Whatsapp_logo2,
    counters: [
      { end: 96, suffix: "%", label: "Customers complete the journey without dropping off" },
      { end: 65, suffix: "%", label: "Come back because the experience feels effortless" },
      { end: 100, suffix: "%", label: "Onboarding done with full compliance and security" }
    ],
  },
  Offer_section: {
    head: "Solution",
    heading: "What does WhatsApp KYC offer?",
    features: [
      {
        icon: "Id",
        title: "PAN Verification",
        desc: "Verify customer PAN instantly for faster and compliant onboarding."
      },
      {
        icon: "Check",
        title: "Name Match",
        desc: "Cross-check customer names across official databases to prevent mismatches."
      },
      {
        icon: "MapPin",
        title: "Address Match",
        desc: "Validate customer addresses directly from trusted ID proofs."
      },
      {
        icon: "Badge2",
        title: "Driving License Verification",
        desc: "Authenticate users with DL checks - perfect for mobility and delivery businesses."
      },
      {
        icon: "HandClick",
        title: "Voter ID Verification",
        desc: "Confirm voter ID details for reliable government-backed identity verification."
      },
      {
        icon: "PlaneInflight",
        title: "Passport Verification",
        desc: "Enable secure global KYC with instant passport validation."
      },
      {
        icon: "Link",
        title: "PAN - Aadhaar Link Check",
        desc: "Confirm if a customer’s PAN is linked with Aadhaar in real time."
      },
      {
        icon: "UserSearch",
        title: "PAN Profile Fetch",
        desc: "Retrieve verified details like name, DOB, and parent’s name to complete customer profiling."
      },
      {
        icon: "QRScan",
        title: "OCR (Optical Character Recognition)",
        desc: "Extract data automatically from ID documents - no manual entry, no errors."
      },
    ]
  },
  contactData: {
    title: "Get Started with ",
    highlight: "Official WhatsApp KYC",
    description:
      "Make customer verification effortless. From PAN to Passport checks, give your users a smooth and secure onboarding experience right on WhatsApp.",
    description2:
      "Your customers are ready - are you? Start WhatsApp KYC today!",
    buttons: [
      { text: "Get Started", type: "primary", link: "/login" },
      { text: "Contact Sales", type: "secondary", icon: true, link: "/book-demo" },
    ],
    image: Book
  },
  faqData: [
    {
      question: "What is WhatsApp KYC?",
      answer:
        "A simple way to complete customer verification directly on WhatsApp using PAN, Aadhaar, Passport, Driving License, Voter ID, and OCR."
    },
    {
      question: "Is WhatsApp KYC secure?",
      answer:
        "Yes - all data is encrypted, API-driven, and fully compliance-ready."
    },
    {
      question: "How long does verification take?",
      answer:
        "Just a few minutes. Most checks happen in real time."
    },
    {
      question: "Can it integrate with our systems?",
      answer: "Yes - results can be pushed to CRMs, onboarding tools, and compliance dashboards."
    },
    {
      question: "Which industries use it?",
      answer: "Banks, NBFCs, fintech, telecom, e-commerce, logistics, insurance, healthcare, and education."
    },
    {
      question: "Does it support Aadhaar checks?",
      answer:
        "Yes, including PAN - Aadhaar link validation (where regulations allow)."
    },
    {
      question: "How fast can we deploy?",
      answer: "Integration is quick - businesses often go live within hours."
    },
    {
      question: "How does OCR help?",
      answer: "It extracts data automatically from IDs, reducing manual errors."
    },
    {
      question: "What’s the business value?",
      answer: "Higher conversions, lower costs, faster onboarding, and a digital audit trail."
    },
    {
      question: "Do customers need to install an app?",
      answer: "No - everything happens inside WhatsApp."
    }
  ],
};

export default WaKycData;
