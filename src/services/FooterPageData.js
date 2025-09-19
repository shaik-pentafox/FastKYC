import FastKYC_Logo2 from "../assets/Images/FastKYC_logo2.png";

const footerData = {
  menus: [
    { 
      title: FastKYC_Logo2,
      description: "FastKYC is India’s leading verification API platform, helping businesses simplify end-to-end compliance across KYC, Banking, OCR, Security & Compliance, and GST. Backed by deep domain expertise, strong security practices, and authorized licenses, FastKYC APIs interact in real time with government systems and verified entities.",
    },
    { 
      title: "Products", 
      links: [
        { name: "KYC", path: "/products-kyc" },
        { name: "Bank", path: "/products-bank-account-verification" },
        { name: "Security & Compliance", path: "/products-security" },
        { name: "OCR API", path: "/products-ocr-apis" },
        { name: "GST", path: "/products-gst" }
      ] 
    },
    { 
      title: "Resources", 
      links: [
        { name: "API documentation", path: "#" },
        { name: "API Reference", path: "#" }
      ] 
    },
    { 
      title: "Company", 
      links: [
        { name: "FastKYC", path: "/why-fastkyc" },
        { name: "Privacy", path: "#" },
        { name: "Terms of use", path: "#" },
        { name: "About us", path: "https://pentafox.in/",external:true },
        { name: "Contact sales", path: "/book-demo" },
      ] 
    },
  ],
  socialLinks: [
    { icon: "linkedin", url: "#" },
    { icon: "facebook", url: "#" },
    { icon: "twitter", url: "#" }
  ],
  image: FastKYC_Logo2
};

export default footerData;
