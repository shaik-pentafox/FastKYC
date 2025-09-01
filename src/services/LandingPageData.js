//1)Hero_Section(Company images)
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo3.png";
import bank4 from "../assets/Images/Company_assets/Company_logo4.png";

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
import border from "../assets/Images/icons/border.png";
import CustomerLogo from "../assets/Images/Growth.png";
import Design from "../assets/Images/Design.png";
import Integration from "../assets/Images/Integration.png";
import Book from "../assets/Images/Book.png";
import FastKYC_Logo2 from "../assets/Images/FastKYC_logo2.png";

const data = {
  heroData :{
    image: FastKYC_Logo,
    buttons: ["Faster Onboarding", "Stronger Compliance"],
    heading: ["Simplify Compliance.","Maximize Growth."],
    description:
      "Pentafox FastKYC offers an end-to-end tax automation platform that helps businesses verify tax IDs, calculate and pay taxes, generate e-invoices, process tax documents, reconcile ledgers, and file tax returns — all through secure SDKs & APIs.",
    cta: { textDesktop: "Get Started", textMobile: "Book a demo", link: "/Book_demo" },
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
        subTitle: "FastKYC*",
        progress: 70,
        avatars: [1, 2, 3],
      },
    ],
    banks: [bank1, bank2, bank3, bank4],
  }, 
  productSections: [
    {
      title: "KYC APIs",
      description:
        "Simplify onboarding with powerful KYC checks that confirm customer identity, address, and authenticity in real time. Build trust, prevent fraud, and stay compliant.",
      list: [
        "PAN Verification & PAN–Aadhaar Link",
        "Name & Address Match",
        "Driving License, Voter ID, Passport Verification",
        "Liveliness Check & Face Match"
      ],
      image: Product1,
      icon: Icon1
    },
    {
      title: "Banking APIs",
      description:
        "Instantly verify customer bank accounts and prevent failed transactions. Our APIs ensure accurate account validation, enabling secure, smooth, and trustworthy payments.",
      list: ["Bank Account Verification"],
      image: Product2,
      icon: Icon2
    },
    {
      title: "GST & Business Verification APIs",
      description:
        "Verify GST-registered businesses and their compliance status without manual effort. Ensure you only work with genuine, tax-compliant entities.",
      list: ["GST Verification (No PAN Input)"],
      image: Product3,
      icon: Icon3
    },
    {
      title: "OCR APIs",
      description:
        "Extract data from government IDs and documents instantly with advanced OCR technology. Save time, eliminate manual entry errors, and accelerate digital onboarding.",
      list: ["OCR for PAN, Aadhaar", "OCR for Passport, Driving License, Voter ID, Vehicle RC"],
      image: Product4,
      icon: Icon4
    },
    {
      title: "Security & Compliance APIs",
      description:
        "Safeguard sensitive data with in-built compliance tools. Enhance document integrity, protect customer identity, and meet regulatory requirements with ease.",
      list: ["Aadhaar Masking", "Watermark"],
      image: Product5,
      icon: Icon5
    }
  ],
  whyChoose: {
    heading: "Why choose FastKYC?",
    subheading: "The core of identity & compliance for growing businesses",
    description:
      "FastKYC makes onboarding effortless. We combine speed, trust, and compliance to help businesses onboard customers instantly while staying fully secure. No delays, no risks—just smarter verification.",
    counters: [
      { end: 500, suffix: "+", label: "Identities verified" },
      { end: 96, suffix: "%", label: "Auto-approval rate" },
      { end: 60, suffix: "%", label: "Reduction in drop-offs" }
    ],
    featureCards: [
      {
        icon: "Hourglass",
        title: "Faster Approvals",
        description: "Cut verification times from days to minutes."
      },
      {
        icon: "Heart",
        title: "Trusted Security",
        description: "Protect your business with AI-powered fraud detection."
      },
      {
        icon: "World",
        title: "Global Compliance",
        description: "Stay ahead with KYC, AML, GDPR, and more."
      }
    ]
  },
  customerData: {
    sectionTitle: "Customer stories",
    sectionSubtitle: "Bold Visions That Shape Digital Futures",
    image: CustomerLogo,
    image2: border,
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
        '"“With Pentafox FastKYC, we were able to onboard customers instantly while staying compliant. The APIs are seamless, reliable, and give us the confidence to scale securely.”"',
      author: "— A Leading Fintech Partner"
    }
  },

  designedData: {
    sectionTitle: "Designed for developers",
    heading: "Integrate in minutes. Scale with confidence",
    description:
      "We take care of the complex KYC, compliance, and verification frameworks so your team can focus on building amazing products. With our REST APIs, clear documentation, and developer-first approach, you can go from sandbox to production in hours — and scale securely to millions of verifications.",
    image: Design
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
      question: "How does FastKYC ensure security and compliance?",
      answer:
        "FastKYC uses bank-grade encryption, AI-powered fraud detection, and adheres to global standards like KYC, AML, GDPR, and SOC 2. This ensures every verification is secure, compliant, and reliable."
    },
    {
      question: "Is customer data safe with FastKYC?",
      answer:
        "Yes, FastKYC keeps all customer data encrypted and secure, following strict privacy standards."
    },
    {
      question: "How easy is it to integrate FastKYC with our existing system?",
      answer:
        "Integration is straightforward with our well-documented APIs and SDKs."
    },
    {
      question: "Can FastKYC scale with our business as we grow?",
      answer: "Absolutely. FastKYC is built to scale seamlessly with growing business needs."
    },
    {
      question: "What industries can use FastKYC?",
      answer: "FastKYC is suitable for banking, fintech, e-commerce, insurance, and other industries requiring identity verification."
    }
  ],

  contactData: {
    title: "Ready to ",
    highlight: "get started?",
    description:
      "Create your account instantly and start using our APIs, or connect with our sales team to explore your unique requirements.",
    buttons: [
      { text: "Get Started", type: "primary" },
      { text: "Contact Sales", type: "secondary", icon: "phone" }
    ],
    image: Book
  },

  footerData: {
    menus: [
      { title: "Products", links: ["Fast KYC", "ID verification", "Face authentication"] },
      { title: "Resources", links: ["Blogs", "Customer"] },
      { title: "Privacy & Security", links: ["Terms and conditions", "Privacy policy", "Security"] }
    ],
    subscribe: {
      title: "Subscribe",
      placeholder: "Enter your email address",
      button: "Subscribe now"
    },
    bottomLinks: ["Terms", "Privacy", "Cookies"],
    socialLinks: [
      { icon: "linkedin", url: "#" },
      { icon: "facebook", url: "#" },
      { icon: "twitter", url: "#" }
    ],
    image: FastKYC_Logo2
  }
};

export default data;
