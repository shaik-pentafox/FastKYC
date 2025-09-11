//1)Hero_Section(Company images)
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";
import bg_border from "../assets/Images/icons/border.png";

// Nav icons
import Product1_nav from "../assets/Images/Product_assets/Icon1.png";
import Product2_nav from "../assets/Images/Product_assets/Icon2.png";
import Product3_nav from "../assets/Images/Product_assets/Icon3.png";
import Product4_nav from "../assets/Images/Product_assets/Icon4.png";
import Product5_nav from "../assets/Images/Product_assets/Icon5.png";

//2)Product_Section (icons & images)
import Icon1 from "../assets/Images/Product_assets/Icon1.png";
import Icon2 from "../assets/Images/Product_assets/Icon2.png";
import Icon3 from "../assets/Images/Product_assets/Icon3.png";
import Icon4 from "../assets/Images/Product_assets/Icon4.png";
import Icon5 from "../assets/Images/Product_assets/Icon5.png";

import Product1 from "../assets/Images/Product_assets/Product1.png";
import Product2 from "../assets/Images/Product_assets/Product2.png";
import Product3 from "../assets/Images/Product_assets/Product3.png";
import Product4 from "../assets/Images/Product_assets/Product4.png";
import Product5 from "../assets/Images/Product_assets/Product5.png";

// Other section images
import FastKYC_Logo from "../assets/Images/FastKYC_logo.png";
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
    buttons: ["Faster Onboarding", "Stronger Compliance"],
    heading: ["Simplify Compliance.", "Maximize Growth."],
    description:
      "FastKYC is a robust, API-first platform that streamlines the entire Know Your Customer (KYC) process from identity verification to compliance management with unmatched speed, security, and scalability.",
    cta: { textDesktop: "Get Started", textMobile: "Book a demo", link: "/book-demo" },
    cards: [
      {
        img: Premium,
        title: "Instant PAN & Aadhaar Verification",
        value: "99.9% Accuracy",
      },
      {
        img: Security,
        title: "Successful Verifications",
        value: "1.2M+ Completed",
      },
      {
        img: Circle,
        title: "Total Verifications",
        value: "1.2M+",
        subTitle: "FastKYC",
        progress: 70,
        avatars: [1, 2, 3],
      },
    ],
    banks: [bank1, bank2, bank3, bank4],
  },
  products_nav: [
    { icon: Product5_nav, title: "KYC", desc: "Simplify Onboarding with Powerful KYC", link: "/products-kyc" },
    { icon: Product3_nav, title: "Bank", desc: "Instant Bank Account Verification", link: "/products-bank-account-verification" },
    { icon: Product2_nav, title: "Security & Compliance API", desc: "Watermark and Aadhaar Masking", link: "/products-security" },
    { icon: Product4_nav, title: "OCR API", desc: "Extract data from government IDs and documents", link: "/products-ocr-apis" },
    { icon: Product1_nav, title: "GST", desc: "GST Verification APIs", link: "/products-gst" },
  ],
  productSections: [
    {
      title: "KYC",
      description:
        "Simplify onboarding with powerful KYC checks that confirm customer identity, address, and authenticity in real time. Build trust, prevent fraud, and stay compliant.",
      list: [
        "PAN Verification & PAN Aadhaar Link",
        "Name & Address Match",
        "Driving License, Voter ID, Passport Verification",
        "Liveliness Check & Face Match"
      ],
      image: Product1,
      icon: Icon1,
      link: "/products-kyc"
    },
    {
      title: "Bank",
      description:
        "Instantly verify customer bank accounts and prevent failed transactions. Our APIs ensure accurate account validation, enabling secure, smooth, and trustworthy payments.",
      list: ["Bank Account Verification"],
      image: Product2,
      icon: Icon2,
      link: "/products-bank-account-verification"
    },
    {
      title: "GST",
      description:
        "Verify GST-registered businesses and their compliance status without manual effort. Ensure you only work with genuine, tax-compliant entities.",
      list: ["GST Verification (No PAN Input)"],
      image: Product3,
      icon: Icon3,
      link: "/products-gst"
    },
    {
      title: "OCR",
      description:
        "Extract data from government IDs and documents instantly with advanced OCR technology. Save time, eliminate manual entry errors, and accelerate digital onboarding.",
      list: ["OCR for PAN, Aadhaar", "OCR for Passport, Driving License, Voter ID, Vehicle RC"],
      image: Product4,
      icon: Icon4,
      link: "/products-ocr-apis"
    },
    {
      title: "Security & Compliance",
      description:
        "Safeguard sensitive data with in-built compliance tools. Enhance document integrity, protect customer identity, and meet regulatory requirements with ease.",
      list: ["Aadhaar Masking", "Watermark"],
      image: Product5,
      icon: Icon5,
      link: "/products-security"
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
        icon: "Heart",
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
        '“With FastKYC, we were able to onboard customers instantly while staying compliant. The APIs are seamless, reliable, and give us the confidence to scale securely.”',
      author: "A Leading Fintech Partner"
    }
  },

  designedData: {
    sectionTitle: "Designed for developers",
    heading: "Integrate in minutes. Scale with confidence",
    description:
      "We take care of the complex KYC, compliance, and verification frameworks so your team can focus on building amazing products. With our REST APIs, clear documentation, and developer-first approach, you can go from sandbox to production in hours and scale securely to millions of verifications.",
    image: Design,
    bottomSections: [
      {
        "title": "Test on the go",
        "description": "Instantly validate KYC & GST details or experiment with live APIs directly from our Developer Docs.",
        "referenceText": "API Reference",
        "referenceLink": "#"
      },
      {
        "title": "Works where you build",
        "description": "Fork, test, and integrate our APIs in seconds with ready-to-use collections.",
        "referenceText": "Postman Collections",
        "referenceLink": "#"
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
    title: "Ready to ",
    highlight: "get started?",
    description:
      "Create your account instantly and start using our APIs, or connect with our sales team to explore your unique requirements.",
    buttons: [
        { text: "Get Started", type: "primary", link: "/login" },
        { text: "Contact Sales", type: "secondary", icon: true, link: "/book-demo" },
    ],
    image: Book
  },
};

export default data;
