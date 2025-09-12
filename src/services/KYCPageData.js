// Nav icons
import Product1_nav from "../assets/Images/Product_assets/Icon1.png";
import Product2_nav from "../assets/Images/Product_assets/Icon2.png";
import Product3_nav from "../assets/Images/Product_assets/Icon3.png";
import Product4_nav from "../assets/Images/Product_assets/Icon4.png";
import Product5_nav from "../assets/Images/Product_assets/Icon5.png";

// KYCData
import Logo from "../assets/Images/FastKYC_logo.png";
import KYC from "../assets/Images/Product_assets/KYC_Image.png";
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";
import KYC2 from "../assets/Images/Product_assets/KYC_Image.png";
import Integration from "../assets/Images/Integration.png";

//Verify
import KYC_PanVerify from "../assets/Images/Productsverify_assets/KYC_PanVerify.png";
import KYC_NameMatch from "../assets/Images/Productsverify_assets/KYC_NameMatch.png";
import KYC_Addressmatch from "../assets/Images/Productsverify_assets/KYC_Addressmatch.png";
import KYC_Driving from "../assets/Images/Productsverify_assets/KYC_Driving.png";
import KYC_VoterID from "../assets/Images/Productsverify_assets/KYC_VoterID.png";
import KYC_Passport from "../assets/Images/Productsverify_assets/KYC_Passport.png";
import KYC_Pan from "../assets/Images/Productsverify_assets/KYC_Pan.png";

const KYCData = {
  pageData: {
    header: {
      logo: Logo,
      nav: [
        { label: "Why FastKYC", link: "/why-fastkyc", dropdown: false },
        { label: "Products", link: "#", dropdown: true },
        { label: "Resources", link: "#", dropdown: false },
        { label: "Company", link: "https://pentafox.in/", dropdown: false, external: true },
      ],
      actions: [
        { text: "Sign in", link: "/Login", primary: false },
        { text: "Book a demo", link: "/book-demo", primary: true },
      ],
    },
    hero: {
      heading: "More growth, zero fraud",
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
    companiesLogos: [bank1, bank2, bank3, bank4],
    products_nav: [
      { icon: Product5_nav, title: "KYC", desc: "Simplify Onboarding with Powerful KYC", link: "/products-kyc" },
      { icon: Product3_nav, title: "Bank", desc: "Instant Bank Account Verification", link: "/products-bank-account-verification" },
      { icon: Product2_nav, title: "Security & Compliance API", desc: "Watermark and Aadhaar Masking", link: "/products-security" },
      { icon: Product4_nav, title: "OCR API", desc: "Extract data from government IDs and documents", link: "/products-ocr-apis" },
      { icon: Product1_nav, title: "GST", desc: "GST Verification APIs", link: "/products-gst" },
    ]
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
    whyItMattersTitle: "Why It Matters",
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
      id: 1,
      title: "PAN Verification",
      description:
        "Seamlessly verify PAN details with government records for fast, secure, and compliant onboarding.",
      features: [
        "Authenticate individuals and businesses.",
        "Prevent fraud with real-time PAN validation.",
      ],
      image: KYC_PanVerify,
      alt: "PAN Verification",
      bg: "#FFFFFF"
    },
    {
      id: 2,
      title: "Name Match",
      description:
        "Ensure the customer’s name matches across official records for smooth KYC compliance.",
      features: [
        "Detect mismatches instantly.",
        "Reduce onboarding delays and errors.",
      ],
      image: KYC_NameMatch,
      alt: "Name Match Verification",
      bg: "#F7F7F7"
    },
    {
      id: 3,
      title: "Address Match",
      description:
        "Quickly validate customer addresses by cross-checking with trusted government databases.",
      features: [
        "Detect fraudulent or mismatched addresses.",
        "Improve onboarding accuracy.",
      ],
      image: KYC_Addressmatch,
      alt: "Address Match",
      bg: "#FFFFFF"
    },
    {
      id: 4,
      title: "Driving License",
      description:
        "Authenticate driving license details directly from official transport databases.",
      features: [
        "Verify license number, name, and validity.",
        "Reduce fraudulent submissions.",
      ],
      image: KYC_Driving,
      alt: "Driving License",
      bg: "#F7F7F7"
    },
    {
      id: 5,
      title: "Voter ID",
      description:
        "Verify Voter ID details against official government records in real-time.",
      features: [
        "Instant voter identity confirmation.",
        "Prevent fake or invalid entries.",
      ],
      image: KYC_VoterID,
      alt: "Voter ID Verification",
      bg: "#FFFFFF"
    },
    {
      id: 6,
      title: "Passport Verification",
      description:
        "Ensure global identity compliance with instant passport detail verification.",
      features: [
        "Validate passport number and holder information.",
        "Prevent fake passport submissions.",
      ],
      image: KYC_Passport,
      alt: "Passport Verification",
      bg: "#F7F7F7"
    },
    {
      id: 7,
      title: "PAN - Aadhaar Link",
      description:
        "Confirm PAN - Aadhaar linkage status in seconds to ensure compliance.",
      features: [
        "Instant status check for individuals.",
        "Avoid regulatory penalties.",
      ],
      image: KYC_Pan,
      alt: "PAN - Aadhaar Link Verification",
      bg: "#FFFFFF"
    },
  ],

  contactData: {
    left: {
      heading: "Ready to get started? as Unlock Instant Verification",
      highlight: "get started?",
      subtext:
        "Create your account instantly and start using APIs, or connect with our team to tailor solutions for your needs.",
      buttons: [
        {
          label: "Get started",
          link: "/login",
        },
        {
          label: "Contact Sales",
          link: "/book-demo",
        }
      ],
    },
    cards: [
      {
        id: 1,
        title: "Access Verified Documents",
        description:
          "Get real-time, verified documents directly from official and government systems. Enhance trust, reduce risks, and ensure seamless KYC every time."
      },
      {
        id: 2,
        title: "Explore DigiLocker",
        description:
          "Seamlessly retrieve and share government-issued documents with secure DigiLocker integration."
      }
    ]
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
