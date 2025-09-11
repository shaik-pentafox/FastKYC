import Logo from "../assets/Images/FastKYC_logo.png";
import bank1 from "../assets/Images/Company_assets/Company_logo1.png";
import bank2 from "../assets/Images/Company_assets/Company_logo2.png";
import bank3 from "../assets/Images/Company_assets/Company_logo4.png";
import bank4 from "../assets/Images/Company_assets/Company_logo3.png";

// Nav icons
import Product1_nav from "../assets/Images/Product_assets/Icon1.png";
import Product2_nav from "../assets/Images/Product_assets/Icon2.png";
import Product3_nav from "../assets/Images/Product_assets/Icon3.png";
import Product4_nav from "../assets/Images/Product_assets/Icon4.png";
import Product5_nav from "../assets/Images/Product_assets/Icon5.png";

const bookDemoData = {
  logo: Logo,
  hero: {
    title: "Seamless verification with faster approvals, stronger security, and full compliance",
    features: [
      { id: 1, icon: "cpu", text: "Instant KYC, bank, and GST verification in seconds" },
      { id: 2, icon: "shield", text: "Secure Aadhaar masking, watermarking & fraud prevention" },
      { id: 3, icon: "star", text: "Trusted by fintechs, banks, and enterprises across industries" }
    ],
    stats: [
      { value: "500+", label: " Businesses Verified " },
      { value: "96%", label: "Auto-approval Rate" },
      { value: "60%", label: "Faster Onboarding" }
    ],
    banks: [bank1, bank2, bank3, bank4]
  },
  form: {
    title: "Sign up",
    successMessage: "Thanks for booking. We'll reach out soon",
    fields: [
      { id: "fullName", label: "Full Name", type: "text", placeholder: "Enter your full name" },
      { id: "companyName", label: "Company Name *", type: "text", placeholder: "Enter company name" },
      { id: "email", label: "Email *", type: "email", placeholder: "Enter working email address" },
      { id: "phone", label: "Phone number *", type: "tel", placeholder: "Enter phone number" }
    ],
    countryOptions: ["India (+91)"],
    submit: { label: "Submit" }
  },
   products_nav: [
              { icon: Product5_nav, title: "KYC", desc: "Simplify Onboarding with Powerful KYC", link: "/products-kyc" },
              { icon: Product3_nav, title: "Bank", desc: "Instant Bank Account Verification", link: "/products-bank-account-verification" },
              { icon: Product2_nav, title: "Security & Compliance API", desc: "Watermark and Aadhaar Masking", link: "/products-security" },
              { icon: Product4_nav, title: "OCR API", desc: "Extract data from government IDs and documents", link: "/products-ocr-apis" },
              { icon: Product1_nav, title: "GST", desc: "GST Verification APIs", link: "/products-gst" },
  ]
};

export default bookDemoData;
