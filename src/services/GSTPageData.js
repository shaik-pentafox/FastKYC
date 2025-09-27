import Logo from "../assets/Images/FastKYC_logo.png";
import Product_Logo from "../assets/Images/Product_assets/Product_GST.png";
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";
import bank5 from "../assets/Images/Company_assets/Company_logo5.png";

import Walane from "../assets/Images/icons/Walane.png"

import assets from "../assets/Images/Productsverify_assets/GST_Verify.png";

const GSTData = {
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
                { text: "Sign in", link: "/login", primary: false },
                { text: "Book a demo", link: "/book-demo", primary: true },
            ],
        },
        hero: {
            heading: "Simplify GST, Focus on Growth",
            subtext:
                "Instant, reliable GST verification for compliant and seamless business operations.",
            includes_title: "Includes:",
            features: [
                "Validate GSTINs instantly from trusted government sources",
                "Ensure dealer authenticity and compliance with ease",
                " APIs that are secure, accurate, and simple to integrate",
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
        companiesLogos: [bank1, bank2, bank3, bank4, bank5],
        products_nav: [
            { icon: "Id", title: "KYC", desc: "Simplify Onboarding with Powerful KYC", link: "/products-kyc" },
            { icon: "Bank", title: "Bank", desc: "Instant Bank Account Verification", link: "/products-bank-account-verification" },
            { icon: "Lock", title: "Security & Compliance API", desc: "Watermark and Aadhaar Masking", link: "/products-security" },
            { icon: "Scan", title: "OCR API", desc: "Extract data from government IDs and documents", link: "/products-ocr-apis" },
            { icon: "Tax", title: "GST", desc: "GST Verification APIs", link: "/products-gst" },
        ],
        solution_nav: [
            { icon: "Message", title: "SMS APIs", desc: "Instant and secure messaging for OTPs, alerts, reminders, and updates", link: "/products-sms" },
            { image: Walane, title: "WALANE", desc: "Turn chats into customers with automated sales and support on WaLane", link: "https://www.walane.ai/", external: true }
        ],
    },

    whyFastKycData: {
        heading: "Why FastKYC",
        subheading: "Simple and Secure GST Verification",
        description:
            "Our platform ensures accurate GST number validation and compliance, making verification effortless, reliable, and business-ready. Here’s why businesses trust us:",
        features: [
            {
                icon: "Rupees",
                title: "GSTIN Licensed",
                desc: "Stay compliant with confidence — Fast KYC GST APIs are government-approved, secure, and built to simplify your GST verification process.",
            },
            {
                icon: "Shuffle",
                title: "Multiprotocol Label Switching",
                desc: "Benefit from multiple failover systems that guarantee uninterrupted operations, minimizing downtime and ensuring business continuity.",
            },
            {
                icon: "Database",
                title: "Real-Time Data Access",
                desc: "Access live data directly from the GST Network for unmatched accuracy, compliance, and timeliness.",
            },
            {
                icon: "Shield",
                title: "Secure Encryption & Decryption",
                desc: "FastKYC handles encryption, decryption, and network complexities, so you can focus on your business while we keep your data secure.",
            },
        ],
    },
    Business_section: {
        heading: "Know your business",
        subheading: "Accelerate Trust",
        description:
            "In today’s fast-paced business environment, verifying the authenticity of your partners whether they’re buyers, sellers, or collaborators is critical. With FastKYC APIs, you can instantly confirm business credibility and stay compliant.",
        features: [
            {
                icon: "Hourglass",
                title: "Verify GST-Registered Businesses",
                description:
                    "Authenticate businesses in real-time using their GSTIN, directly from trusted government sources.",
            }
        ],
    },
    verificationData: {
        title: "GST Verification",
        subheading: "(No PAN Input)",
        description:
            "Authenticate GST details instantly without requiring PAN input.",
        points: [
            "Verify GSTIN details with government sources.",
            "Reduce tax fraud risks."
        ],
        image: assets
    }
}

export default GSTData;
