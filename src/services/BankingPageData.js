//Bank.tsx
import Logo from "../assets/Images/FastKYC_logo.png";
import Product_Logo from "../assets/Images/Product_assets/Product2.png";
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo3.png";
import bank4 from "../assets/Images/Company_assets/Company_logo4.png";

//Why KYC
import icon1 from "../assets/Images/Product_assets/Products_Icon5.png";
import icon2 from "../assets/Images/Product_assets/Products_Icon3.png";
import icon3 from "../assets/Images/Product_assets/Products_Icon6.png";
import icon4 from "../assets/Images/Product_assets/Products_Icon4.png";


import Integration from "../assets/Images/Integration.png";
const BankData = {
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
      heading: "Bank Account Verification in Seconds",
      description:
        "Onboard customers faster and process payments with confidence. With the FastKYC Bank Account Verification API, instantly validate account numbers, IFSC codes, account holder names, and account status — all in real time.",
      description2:
        "No more failed payments or fraud risks. Ensure every bank account belongs to the right recipient and deliver secure, seamless, and trustworthy transactions every time.",
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
    companiesLogos: [bank1, bank2, bank3, bank4]
  },
  whyFastKycData: {
    heading: "Why FastKYC",
    subheading: "Simple and Secure Bank Account Verification",
    description:
      "Our API enables instant validation of bank account details, ensuring safe, accurate, and seamless transactions. Here’s why businesses rely on us:",
    features: [
      {
        icon: icon1,
        title: "Instant Account Validation",
        desc: "Verify account numbers, IFSC codes, and account holder names in real-time to prevent errors and failed transactions.",
      },
      {
        icon: icon2,
        title: "Fraud Prevention",
        desc: "Stop fraudulent accounts before they impact your business. Our API confirms ownership and account status instantly, giving you complete peace of mind.",
      },
      {
        icon: icon3,
        title: "Seamless Real-Time Access",
        desc: "Get instant confirmations from trusted banking networks to ensure accuracy, timeliness, and reliability at scale.",
      },
      {
        icon: icon4,
        title: "Secure Encryption & Compliance",
        desc: "Built with enterprise-grade encryption, FastKYC ensures your financial data remains private, compliant, and secure at every step.",
      },
    ]
  },
  flowData: {
    main: {
      title: "Ready to get started? as Unlock Instant Verification",
      highlight: "get started?",
      description:
        "Create your account instantly and start using our Bank Account Verification APIs, or connect with our team to design solutions that fit your business.",
      buttons: [
        { text: "Get Started", type: "primary" },
        { text: "Contact Sales", type: "secondary", icon: true },
      ],
    },
    features: [
      {
        title: "Access Verified Bank Details",
        description:
          "Instantly validate account numbers, IFSC codes, and account holder names from trusted banking networks.",
      },
      {
        title: "Ensure Seamless Transactions",
        description:
          "Prevent failed payments and fraud by verifying bank accounts in real time.",
      },
    ],
    integration: {
      title: "Jump into integration",
      description:
        "Our detailed API documentation makes setup simple, so you can go live in minutes.",
      button: "API Reference",
      image: Integration,
    },
  }
};

export default BankData;
