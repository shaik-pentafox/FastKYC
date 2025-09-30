//1)Hero_Section(Company images)
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";
import bank5 from "../assets/Images/Company_assets/Company_logo5.png";
import bg_border from "../assets/Images/icons/border.png";

//2)Product_Section (images)
import Product1 from "../assets/Images/Product_assets/Product_KYC.png";
import Product2 from "../assets/Images/Product_assets/Product_BANK.png";
import Product3 from "../assets/Images/Product_assets/Product_GST.png";
import Product4 from "../assets/Images/Product_assets/Product_OCR.png";
import Product5 from "../assets/Images/Product_assets/Product_SECURITY.png";
import Product6 from "../assets/Images/Product_assets/Product_SMS2.png";

// Other section images
import FastKYC_Logo from "../assets/Images/FastKYC_logo.png";
import Walane from "../assets/Images/icons/Walane.png"
import Premium from "../assets/Images/icons/Premium_rate.png";
import Security from "../assets/Images/icons/Discount_icon.png";
import Circle from "../assets/Images/icons/Circle.png";
import bg_border2 from "../assets/Images/icons/border.png";
import CustomerLogo from "../assets/Images/Growth.png";
import Design from "../assets/Images/Design.png";
import Integration from "../assets/Images/Integration.png";
import Book from "../assets/Images/Book.png";

const data = {
  heroData: {
    bg_image: bg_border,
    image: FastKYC_Logo,
    heading: ["Simplify Compliance.", "Maximize Growth."],
    description:
      "An AI-driven platform that streamlines the entire KYC process for easy identity verification, built for unmatched speed, security, and scalability.SMS APIs, it ensures secure, instant delivery of OTPs, alerts, reminders, and updates.",
    cta: { textDesktop: "Get Started", textMobile: "Book a demo", link: "/book-demo" },
    cards: [
      {
        img: Premium,
        title: "PAN , Aadhaar & More Validation",
        // value: "10+ IDs Verified in Seconds",
      },
      {
        img: Security,
        title: "Successful Verifications",
        value: "1.2M+ Completed",
      },
      {
        img: Circle,
        title: "One KYC",
        title2: "Use",
        title3: "Trust",
        // value: "1.2M+",
        subTitle: "KYC",
        progress: 70,
        avatars: [1, 2, 3],
      },
    ],
    banks: [bank1, bank2, bank3, bank4, bank5],
  },
  products_nav: [
    { icon: "Id", title: "KYC", desc: "Simplify Onboarding with Powerful KYC", link: "/products-kyc" },
    { icon: "Bank", title: "Bank", desc: "Instant Bank Account Verification", link: "/products-bank-account-verification" },
    { icon: "Lock", title: "Security & Compliance", desc: "Watermark and Aadhaar Masking", link: "/products-security" },
    { icon: "Scan", title: "OCR", desc: "Extract data from government IDs and documents", link: "/products-ocr-apis" },
    { icon: "Tax", title: "GST", desc: "GST Verification APIs", link: "/products-gst" },
  ],
  solution_nav: [
    { icon: "Message", title: "SMS", desc: "Instant and secure messaging for OTPs, alerts, reminders, and updates", link: "/products-sms" },
    { image: Walane, title: "walane", desc: "Turn chats into customers with automated sales and support on WaLane", link: "https://www.walane.ai/", external: true },
  ],
  productSections: [
    {
      title: "KYC",
      description:
        "Simplify onboarding with powerful KYC checks that confirm customer identity, address, and authenticity in real time. Build trust, prevent fraud, and stay compliant.",
      list: [
        "Aadhaar Verification",
        "PAN Verification & PAN Aadhaar Link",
        "Name & Address Match",
        "Driving License, Voter ID, Passport Verification",
        "Liveliness Check & Face Match"
      ],
      image: Product1,
      icon: "Id",
      link: "/products-kyc"
    },
    {
      title: "Bank",
      description:
        "Instantly verify customer bank accounts and prevent failed transactions. Our APIs ensure accurate account validation, enabling secure, smooth, and trustworthy payments.",
      list: ["Bank Account Verification"],
      image: Product2,
      icon: "Bank",
      link: "/products-bank-account-verification"
    },
    {
      title: "GST",
      description:
        "Verify GST-registered businesses and their compliance status without manual effort. Ensure you only work with genuine, tax-compliant entities.",
      list: ["GST Verification (No PAN Input)"],
      image: Product3,
      icon: "Tax",
      link: "/products-gst"
    },
    {
      title: "OCR",
      description:
        "Extract data from government IDs and documents instantly with advanced OCR technology. Save time, eliminate manual entry errors, and accelerate digital onboarding.",
      list: ["OCR for PAN, Aadhaar", "OCR for Passport, Driving License, Voter ID, Vehicle RC"],
      image: Product4,
      icon: "Scan",
      link: "/products-ocr-apis"
    },
    {
      title: "Security & Compliance",
      description:
        "Safeguard sensitive data with in-built compliance tools. Enhance document integrity, protect customer identity, and meet regulatory requirements with ease.",
      list: ["Aadhaar Masking", "Watermark"],
      image: Product5,
      icon: "Lock",
      link: "/products-security"
    },
    {
      title: "SMS",
      description:
        "Enhance customer engagement with secure and reliable SMS APIs that deliver OTPs, alerts, reminders, and updates in real time. Ensure smooth communication, reduce drop-offs, and build lasting trust with every message.",
      list: ["OTP Delivery & Authentication", "Compliance Alerts & Notifications", "Payment Reminders & Transaction Updates", "Promotional & Informational Messaging"],
      image: Product6,
      icon: "Message",
      link: "/products-sms"
    }
  ],
  whyChoose: {
    heading: "Why choose FastKYC?",
    subheading: "The core of identity & compliance for growing businesses",
    description:
      "FastKYC makes onboarding effortless. We combine speed, trust, and compliance to help businesses onboard customers instantly while keeping every verification secure. No delays, no risks  just smarter verification.",
    counters: [
      { end: 500, suffix: "+", label: "Identities verified" },
      { end: 96, suffix: "%", label: "Auto-approval rate" },
      { end: 60, suffix: "%", label: "Reduction in drop-offs" }
    ],
    featureCards: [
      {
        icon: "Hourglass",
        title: "Faster Approvals",
        description: "Cut verification times from days to minutes with instant checks."
      },
      {
        icon: "Hearthand",
        title: "Trusted Security",
        description: "Enterprise-grade encryption ensures data privacy and secure transactions."
      },
      {
        icon: "World",
        title: "Global Compliance",
        description: "Stay compliant with KYC and UIDAI standards while ensuring reliable customer verification."
      }
    ]
  },
  customerData: {
    sectionTitle: "Customer stories",
    sectionSubtitle: "Bold Visions That Shape Digital Futures",
    image: CustomerLogo,
    image2: bg_border2,
    features: [
      {
        highlight: "98%",
        text: "Reduction in fraudulent applications with real-time verification"
      },
      {
        highlight: "5000+",
        text: "Customer identities verified every day through our APIs"
      }
    ],
    testimonial: {
      quote:
        '“FastKYC has been a game-changer for us. We can now onboard customers instantly while staying fully compliant. The APIs are seamless and reliable, giving us the confidence to scale securely.”',
      author: " - A Leading Fintech Partner"
    }
  },

  designedData: {
    sectionTitle: "Designed for developers by developers",
    heading: "Integrate in minutes. Scale with confidence",
    description: [
      "We handle the heavy lifting of KYC, compliance, verification, and secure messaging.",
      "With simple REST APIs and clear docs, you can integrate in hours.",
      "Scale confidently to millions of verifications and messages."
    ],
    image: Design,
    bottomSections: [
      {
        //"title": "Test on the go",
        // "description": "Instantly validate KYC & GST details or experiment with live APIs directly from our Developer Docs.",
        // "referenceText": "API Reference",
        // "referenceLink": "#"
      },
      {
        //"title": "Works where you build",
        // "description": "Fork, test, and integrate our APIs in seconds with ready-to-use collections.",
        // "referenceText": "Postman Collections",
        // "referenceLink": "#"
      }
    ]
  },

  payIntegrateData: {
    heading: "Jump into integration",
    description:
      "Seamless onboarding with detailed API documentation to make implementation effortless",
    buttonText: "API Reference",
    buttonIcon: "→",
    image: Integration
  },

  faqData: [
    {
      question: "What services does FastKYC provide?",
      answer:
        "We offer APIs for Identity Verification, Bank Account Verification, GST Verification, and Biometric Checks."
    },
    {
      question: "How fast is the verification process?",
      answer:
        "All checks are done in real time, giving instant results within seconds."
    },
    {
      question: "Which IDs can be verified?",
      answer:
        "You can verify PAN, Aadhaar (masking & link check), Passport, Driving License, Voter ID, and GSTIN through our APIs."
    },
    {
      question: "Do you connect with official sources?",
      answer: "Yes. We fetch and verify data directly from government databases and trusted financial systems."
    },
    {
      question: "Is my customer data secure?",
      answer: "Absolutely. We use end-to-end encryption and follow strict compliance standards to protect sensitive data."
    },
    {
      question: "Do you use AI for verification?",
      answer:
        "No. We don’t use AI. All verification is done using authorized government and financial data sources only."
    },
    {
      question: "Can biometric checks be integrated?",
      answer: "Yes. Our APIs support Face Match and Liveliness Detection for secure and fraud-free verification."
    },
    {
      question: "Who can integrate FastKYC APIs?",
      answer: "Our APIs are built for banks, NBFCs, fintechs, insurers, marketplaces, and enterprises that need secure, reliable onboarding."
    }
  ],

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
};

export default data;
