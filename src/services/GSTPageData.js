import Logo from "../assets/Images/FastKYC_logo.png";
import Product_Logo from "../assets/Images/Product_assets/Product3.png";
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo3.png";
import bank4 from "../assets/Images/Company_assets/Company_logo4.png";

//Why Fast KYC icon
import icon1 from "../assets/Images/Product_assets/Products_Icon1.png";
import icon2 from "../assets/Images/Product_assets/Products_Icon2.png";
import icon3 from "../assets/Images/Product_assets/Products_Icon3.png";
import icon4 from "../assets/Images/Product_assets/Products_Icon4.png";

const GSTData = {
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
            heading: "Simplify GST, Focus on Growth",
            subtext:
                "Running a business is tough — managing GST shouldn’t be. Automate filings, validations, and compliance with ease.",
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
            image: {
                src: Product_Logo,
                alt: "KYC Verification",
            },
            companiesLogos: [bank1, bank2, bank3, bank4],
        }
    },
    whyFastKycData: {
        headingSmall: "Why FastKYC",
        headingMain: "Simple and Secure GST Verification",
        description:
            "Our platform ensures accurate GST number validation and compliance, making verification effortless, reliable, and business-ready. Here’s why businesses trust us:",
        features: [
            {
                icon: icon1,
                title: "GSTN Licensed",
                desc: "Stay compliant with confidence — FastKYC GST APIs are government-approved, secure, and built to simplify your GST verification process.",
            },
            {
                icon: icon2,
                title: "Real-Time Data Access",
                desc: "Access live data directly from the GST Network and NIC for unmatched accuracy, compliance, and timeliness.",
            },
            {
                icon: icon3,
                title: "Multiprotocol Label Switching",
                desc: "Benefit from multiple failover systems that guarantee uninterrupted operations, minimizing downtime and ensuring business continuity.",
            },
            {
                icon: icon4,
                title: "Secure Encryption & Decryption",
                desc: "Pentafox FastKYC handles encryption, decryption, and network complexities, so you can focus on your business while we keep your data secure.",
            },
        ],
    },
    Business_section: {
        headingSmall: "Know your business",
        headingMain: "Accelerate Trust",
        description:
            "In today’s fast-paced business environment, verifying the authenticity of your partners — whether they’re buyers, sellers, or collaborators — is critical. With Pentafox FastKYC APIs, you can instantly confirm business credibility and stay compliant.",
        features: [
            {
                icon: "Hourglass",
                title: "Verify GST-Registered Businesses",
                description:
                    "Authenticate businesses in real-time using their GSTIN, directly from trusted government sources.",
            },
            {
                icon: "Heart",
                title: "Validate with PAN",
                description:
                    "Cross-check businesses registered under GST using their PAN for added accuracy.",
            },
            {
                icon: "World",
                title: "Check GST Filing Status",
                description:
                    "Quickly assess compliance by verifying GST return filing history.",
            },
        ],
    }
}

export default GSTData;
