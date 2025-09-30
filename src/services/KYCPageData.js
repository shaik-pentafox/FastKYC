import Logo from "../assets/Images/FastKYC_logo.png";
import KYC from "../assets/Images/Product_assets/Product_KYC.png";
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";
import bank5 from "../assets/Images/Company_assets/Company_logo5.png";
import KYC2 from "../assets/Images/Product_assets/KYC_Image.png";
import Integration from "../assets/Images/Integration.png";

//Verify
import KYC_AadharVerify from "../assets/Images/Productsverify_assets/KYC_AadharVerify.png";
import KYC_PanVerify from "../assets/Images/Productsverify_assets/KYC_PanVerify.png";
import KYC_NameMatch from "../assets/Images/Productsverify_assets/KYC_NameMatch.png";
import KYC_Addressmatch from "../assets/Images/Productsverify_assets/KYC_Addressmatch.png";
import KYC_Driving from "../assets/Images/Productsverify_assets/KYC_Driving.png";
import KYC_VoterID from "../assets/Images/Productsverify_assets/KYC_VoterID.png";
import KYC_Passport from "../assets/Images/Productsverify_assets/KYC_Passport.png";
import KYC_Pan from "../assets/Images/Productsverify_assets/KYC_Pan.png";

import Book from "../assets/Images/Book.png";
import Walane from "../assets/Images/icons/Walane.png"

const KYCData = {
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
      heading: "Seamless KYC, Zero Compromise",
      subtext:
        "Instant, reliable identity verification for secure and seamless onboarding",
      includes_title: "Includes:",
      features: [
        "Onboard customers in seconds, not days",
        "Protect your business from fraud and compliance risks",
        "APIs that are fast, accurate, and easy to integrate",
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
      image: KYC,
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
  ],
  },

  flowData: [
    {
      id: 1,
      icon: "lock",
      title: "Safe. Fast. Reliable",
      description:
        "Verify customer details directly with official government databases in real-time. Get the assurance of accuracy, reduce fraud risks, and stay fully compliant with regulatory requirements.",
    },
    {
      id: 2,
      icon: "puzzle",
      title: "Seamless Integrations",
      description:
        "Our easy-to-use REST APIs are developer-friendly and lightweight. Integrate in just minutes and go live within hours no complex setups, no delays, only smooth onboarding.",
    },
    {
      id: 3,
      icon: "adjustments",
      title: "Customized Workflows",
      description:
        "Every business is unique. FastKYC APIs act as modular building blocks, allowing you to design and automate workflows that perfectly fit your onboarding, KYC, and compliance processes.",
    },
  ],
  customerData: {
    subtitle: "Know your customer",
    title: "Confirm Identities with Confidence",
    description:
      "Customer authentication is the backbone of trust and compliance. With FastKYC, you can validate identities instantly using official government databases no manual checks, no delays. Our secure APIs simplify the process, helping businesses prevent fraud, reduce risk, and onboard customers with ease.",
    // whyItMattersTitle: "Why It Matters",
    whyItMattersPoints: [
      "Build Trust – Ensure only verified customers access your services.",
      "Prevent Fraud – Detect fake or stolen identities before they cause harm.",
      "Stay Compliant – Meet regulatory KYC requirements effortlessly.",
      "Seamless Experience – Lightweight APIs that integrate in minutes."
    ],
    cta: {
      label: "Know more",
      icon: "→"
    },
    image: {
      src: KYC2,
      alt: "KYC Verification"
    }
  },
  verificationData: [
     {
      tabs: [
        // { key: "All", label: "All", icon: "LayoutGrid" },
        { key: "Aadhaar Verification", label: "Aadhaar Verification", icon: "Finger" },
        { key: "PAN Verification", label: "PAN Verification", icon: "Id" },
        { key: "Name Match", label: "Name Match", icon: "Check" },
        { key: "Address Match", label: "Address Match", icon: "MapPin"},
        { key: "Driving License", label: "Driving License", icon: "Badge2" },
        { key: "Voter ID", label: "Voter ID", icon: "HandClick"},
        { key: "Passport Verification", label: "Passport Verification", icon:"PlaneInflight" },
        { key: "PAN - Aadhaar Link", label: "PAN–Aadhaar", icon: "Link" }
      ],
    },
    {
      id: 1,
      title: "Aadhaar Verification",
      description:
        "Seamlessly verify Aadhaar details with government records for fast, secure, and compliant onboarding.",
      features: [
        "Authenticate individuals with ease.",
        "Prevent fraud with real-time Aadhaar validation.",
      ],
      image: KYC_AadharVerify,
      alt: "Aadhaar Verification",
      bg: "#FFF2F2"
    },
    {
      id: 2,
      title: "PAN Verification",
      description:
        "Seamlessly verify PAN details with government records for fast, secure, and compliant onboarding.",
      features: [
        "Authenticate individuals and businesses.",
        "Prevent fraud with real-time PAN validation.",
      ],
      image: KYC_PanVerify,
      alt: "PAN Verification",
      bg: "#FFF2F2"
    },
    {
      id: 3,
      title: "Name Match",
      description:
        "Ensure the customer’s name matches across official records for smooth KYC compliance.",
      features: [
        "Detect mismatches instantly.",
        "Reduce onboarding delays and errors.",
      ],
      image: KYC_NameMatch,
      alt: "Name Match Verification",
      bg: "#FFF2F2"
    },
    {
      id: 4,
      title: "Address Match",
      description:
        "Quickly validate customer addresses by cross-checking with trusted government databases.",
      features: [
        "Detect fraudulent or mismatched addresses.",
        "Improve onboarding accuracy.",
      ],
      image: KYC_Addressmatch,
      alt: "Address Match",
      bg: "#FFF2F2"
    },
    {
      id: 5,
      title: "Driving License",
      description:
        "Authenticate driving license details directly from official transport databases.",
      features: [
        "Verify license number, name, and validity.",
        "Reduce fraudulent submissions.",
      ],
      image: KYC_Driving,
      alt: "Driving License",
      bg: "#FFF2F2"
    },
    {
      id: 6,
      title: "Voter ID",
      description:
        "Verify Voter ID details against official government records in real-time.",
      features: [
        "Instant voter identity confirmation.",
        "Prevent fake or invalid entries.",
      ],
      image: KYC_VoterID,
      alt: "Voter ID Verification",
      bg: "#FFF2F2"
    },
    {
      id: 7,
      title: "Passport Verification",
      description:
        "Ensure global identity compliance with instant passport detail verification.",
      features: [
        "Validate passport number and holder information.",
        "Prevent fake passport submissions.",
      ],
      image: KYC_Passport,
      alt: "Passport Verification",
      bg: "#FFF2F2"
    },
    {
      id: 8,
      title: "PAN - Aadhaar Link",
      description:
        "Confirm PAN - Aadhaar linkage status in seconds to ensure compliance.",
      features: [
        "Instant status check for individuals.",
        "Avoid regulatory penalties.",
      ],
      image: KYC_Pan,
      alt: "PAN - Aadhaar Link Verification",
      bg: "#FFF2F2"
    },
  ],

  // contactData: {
  //   main: {
  //     title: "Ready to get started? as Unlock Instant Verification",
  //     highlight: "get started?",
  //     description:
  //       "Create your account instantly and start using our APIs, or connect with our sales team to explore your BIZBOK requirements.",
  //     buttons: [
  //       { text: "Get Started", type: "primary", link: "/login" },
  //       { text: "Contact Sales", type: "secondary", icon: true, link: "/book-demo" },
  //     ]
  //   },
  //   features: [
  //     {
  //       title: "Access Verified Documents",
  //       description:
  //         "Get real-time, verified documents directly from official and government systems. Enhance trust, reduce risks, and ensure seamless KYC every time."
  //     },
  //     {
  //       title: "Explore DigiLocker",
  //       description:
  //         "Seamlessly retrieve and share government-issued documents with secure DigiLocker integration."
  //     }
  //   ]
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
  payIntegrateData: {
    heading: "Jump into integration",
    description: "Our detailed API documentation makes implementation simple and fast.",
    buttonText: "API Reference",
    buttonIcon: "→",
    image: Integration
  }
};

export default KYCData;
