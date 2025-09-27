import FastKYC_Logo2 from "../assets/Images/FastKYC_logo2.png";

const footerData = {
  menus: [
    { 
      title: FastKYC_Logo2,
      description: "India’s leading verification API platform powering KYC, Banking, OCR, Security & Compliance, and GST with real-time government integrations. Trusted by businesses to simplify compliance and accelerate customer onboarding.",
      description2:"Instant and secure messaging APIs for OTPs, alerts, reminders, and updates with high delivery success rates. Strengthen customer trust and ensure seamless real-time communication."
    },
    { 
      title: "Products", 
      links: [
        { name: "KYC", path: "/products-kyc" },
        { name: "Bank", path: "/products-bank-account-verification" },
        { name: "Security & Compliance", path: "/products-security" },
        { name: "OCR", path: "/products-ocr-apis" },
        { name: "GST", path: "/products-gst" },
      ] 
    },
    { 
      title: "Soultion", 
      links: [
        { name: "Whatsapp KYC", path: "#" },
        { name: "SMS", path: "/products-sms" },
        { name: "Walane", path: "https://www.walane.ai/",external:true },
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
        { name: "Resources", path: "/fast-kyc" },
        { name: "Privacy", path: "#" },
        { name: "Terms of use", path: "#" },
        { name: "About us", path: "https://pentafox.in/",external:true },
        { name: "Contact sales", path: "/book-demo" },
      ] 
    },
  ],
  socialLinks: [
    { icon: "linkedin", url: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGkSgJOxSKMUAAAAZl6sQLImmSVxad4uGNEIednEGdOrCeP8xyxFtoZumF_4EBRhg0gU_Ynn3UB8MSrcEf0EjFsALRh2rVHYd9KDYovf3FCKmoKiPIPqysfDCGty3CYGzo4mxU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpentafox-tech%2Fposts%2F%3FfeedView%3Dall" },
    { icon: "facebook", url: "https://www.facebook.com/pentafox.in/" },
    // { icon: "twitter", url: "#" },
    { icon: "instagram", url: "https://www.instagram.com/pentafox_technologies/" }
  ],
  image: FastKYC_Logo2
};

export default footerData;
