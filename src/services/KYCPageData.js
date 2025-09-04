// KYCData.ts
import Logo from "../assets/Images/FastKYC_logo.png";
import KYC from "../assets/Images/Product_assets/KYC_Image.png";
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo3.png";
import bank4 from "../assets/Images/Company_assets/Company_logo4.png";
import KYC2 from "../assets/Images/Product_assets/KYC_Image.png";
import Integration from "../assets/Images/Integration.png";

const KYCData = {
  pageData: {
    header: {
      logo: Logo,
      nav: [
        { label: "Why FastKYC", link: "#", dropdown: false },
        { label: "Products", link: "#", dropdown: true },
        { label: "Resources", link: "#", dropdown: false },
        { label: "Company", link: "https://pentafox.in/", dropdown: false },
      ],
      actions: [
        { text: "Sign in", link: "/Login", primary: false },
        { text: "Book a demo", link: "/Book_demo", primary: true },
      ],
    },
    hero: {
      heading: "More growth, zero fraud",
      subtext:
        "Instant, reliable identity verification for secure and scalable growth.",
      includes_title: "Includes:",
      features: [
        "Onboard customers in seconds, not days",
        "Protect your business from fraud and compliance risks",
        "APIs that are fast, accurate, and easy to integrate",
      ],
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
      productImage: KYC,
      companiesLogos: [bank1, bank2, bank3, bank4],
    },
  },

  flowData: [
    {
      id: 1,
      icon: "lock",
      title: "Secure and Reliable Verifications",
      description:
        "Verify customer details directly with official government databases in real-time. Get the assurance of accuracy, reduce fraud risks, and stay fully compliant with regulatory requirements.",
    },
    {
      id: 2,
      icon:"puzzle" ,
      title: "Seamless Integrations",
      description:
        "Our easy-to-use REST APIs are developer-friendly and lightweight. Integrate in just minutes and go live within hours — no complex setups, no delays, only smooth onboarding.",
    },
    {
      id: 3,
      icon: "adjustments",
      title: "Customized Workflows",
      description:
        "Every business is unique. FastKYC APIs act as modular building blocks, allowing you to design and automate workflows that perfectly fit your onboarding, KYC, and compliance processes.",
    },
  ],
  customerData :{
    subtitle: "Know your customer",
    title: "Confirm Identities with Confidence",
    description:
      "Customer authentication is the backbone of trust and compliance. With Pentafox FastKYC, you can validate identities instantly using official government databases — no manual checks, no delays. Our secure APIs simplify the process, helping businesses prevent fraud, reduce risk, and onboard customers with ease.",
    whyItMattersTitle: "Why It Matters",
    whyItMattersPoints: [
      "Build Trust – Ensure only verified customers access your services.",
      "Prevent Fraud – Detect fake or stolen identities before they cause harm.",
      "Stay Compliant – Meet regulatory KYC/AML requirements effortlessly.",
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
contactData : {
  left: {
    heading: "Ready to get started? as Unlock Instant Verification",
    highlight: "get started?",
    subtext:
      "Create your account instantly and start using APIs, or connect with our team to tailor solutions for your needs.",
    buttons: {
      getStarted: "Get Started",
      contactSales: "Contact Sales"
    }
  },
  cards: [
    {
      id: 1,
      title: "Access Verified Documents",
      description:
        "Instantly fetch verified individual and business documents from trusted sources."
    },
    {
      id: 2,
      title: "Explore DigiLocker",
      description:
        "Seamlessly retrieve and share government-issued documents with secure DigiLocker integration."
    }
  ]
},
payIntegrateData :{
  heading: "Jump into integration",
  description: "Our detailed API documentation makes implementation simple and fast.",
  button: {
    label: "API Reference",
    icon: "→"
  },
  image: {
    src: Integration,
    alt: "API Documentation"
  }
}
};

export default KYCData;
