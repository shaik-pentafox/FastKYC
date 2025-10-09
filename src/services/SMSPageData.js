import Logo from "../assets/Images/FastKYC_logo.png";
import Product_Logo from "../assets/Images/Product_assets/Solution_SMS.png";
import Socialmedia from "../assets/Images/Productsverify_assets/SMS_Socialmedia.png";
import SMS_Api from "../assets/Images/Productsverify_assets/SMS_Api.png";
import Analytics from "../assets/Images/Productsverify_assets/SMS_Analytics.png";
import SMS_Multi from "../assets/Images/Productsverify_assets/SMS_Multi-Lingual.png";

import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";
import bank5 from "../assets/Images/Company_assets/Company_logo5.png";
import bank6 from "../assets/Images/Company_assets/Company_logo6.png";


import Integration from "../assets/Images/Integration.png";

import Walane from "../assets/Images/icons/Walane.png"

import { WorldMapAnimation } from '../ui/WorldMapAnimation'

const SMSData = {
  pageData: {
    header: {
      logo: Logo,
      nav: [
        { label: "Products", link: "#", dropdown: true },
        { label: "Resources", link: "/fast-kyc" },
        { label: "Solution", link: "#", dropdown: true },
        { label: "Company", link: "https://pentafox.in/", external: true }
      ],
      actions: [
        { text: "Sign in", link: "/login", primary: false },
        { text: "Book a demo", link: "/book-demo", primary: true },
      ],
    },
    hero: {
      heading: "Engage Customers Worldwide with Trusted SMS Solutions",
      subtext: "Simplify business communication with reliable SMS services that ensure instant delivery and global reach.Our platform is built for developers, marketers, and enterprises to scale with confidence.",
      includes_title: "Includes:",
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
    companiesLogos: [bank1, bank2, bank3, bank4, bank5 ,bank6],
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
  whyFastKycData: {
    heading: "Why Businesses Rely on SMS",
    subheading: "Simple and Secure Bank Account Verification",
    description:
      "Our API enables instant validation of bank account details, ensuring safe, accurate, and seamless transactions. Here’s why businesses rely on us:",
    features: [
      {
        icon: "TrendingUp",
        title: "Boost Conversions",
        desc: "Run targeted campaigns that capture attention and turn leads into loyal customers."
      },
      {
        icon: "Checklist",
        title: "Ensure Reliable Delivery",
        desc: "Deliver messages instantly and consistently, even during peak traffic loads."
      },
      {
        icon: "ShieldLock",
        title: "Strengthen Security",
        desc: "Safeguard accounts with SMS-based verification and dependable fraud protection."
      },
      {
        icon: "World",
        title: "Expand Global Reach",
        desc: "Connect with audiences worldwide and communicate in their preferred language."
      },
      {
        icon: "Message",
        title: "Enhance Customer Engagement",
        desc: "Keep customers informed with timely, personalized,and meaningful interactions."
      },
      {
        icon: "Arrows",
        title: "Scale with Confidence",
        desc: "Handle growing volumes with a platform built for speed, stability, and scalability."
      }
    ]
  },
  informationData: [
    {
      id: 1,
      title: "Smarter Campaigns, Guaranteed Delivery",
      features: [
        "Send messages with confidence using intelligent routing that ensures fast delivery.",
        "If one network fails, we instantly retry through alternate operators for success.",
      ],
      image: Socialmedia,
      alt: "social_media ",
      bg: "#FFFFFF"
    },
    {
      id: 2,
      title: "Powerful SMS API",
      features: [
        "Integrate seamlessly with developer-friendly APIs designed for flexibility and speed.",
        " Our platform supports all major programming languages for effortless adoption.",
      ],
      image: SMS_Api,
      alt: "sms_api",
      bg: "#F7F7F7"
    },
    {
      id: 3,
      title: "Actionable Analytics",
      features: [
        "Gain real-time visibility into delivery, responses, and engagement performance.",
        "Optimize campaigns with data-driven insights that maximize results.",
      ],
      image: Analytics,
      alt: "analytics_logo",
      bg: "#FFFFFF"
    },
    {
      id: 4,
      title: "Multi-Lingual Messaging",
      features: [
        "Reach your customers in the language they trust and understand best.",
        "Strengthen connections across regions with personalized communication.",
      ],
      image: SMS_Multi,
      alt: "sms_multi",
      bg: "#F7F7F7"
    },
    {
      id: 5,
      title: "Global, Low-Latency Delivery",
      features: [
        "Deliver messages instantly, no matter where your customers are located.",
        "Our reliable infrastructure ensures consistency even at massive scale.",
      ],
      component: WorldMapAnimation,
      alt: "worldmap_logo",
      bg: "#FFFFFF"
    }
  ],
  payIntegrateData: {
    heading: "SMS Services and API Solutions",
    features: [
      "SMS empowers businesses to communicate instantly, securely, and at scale.",
      "Our platform delivers reliable transactional messaging and developer-friendly APIs.",
      "With cost-effective plans and dedicated support, we make customer engagement seamless.",
      "Trusted by growing brands, SMS ensures your communication is always on point.",
    ],
    buttonText: "API Reference",
    buttonIcon: "→",
    image: Integration
  }
}

export default SMSData;
