import Logo from "../assets/Images/FastKYC_logo.png";
import Product_Logo from "../assets/Images/Why_FastKYC/Group.png";
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

const FastKYCPageData = {
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
        { text: "Sign in", link: "/login", primary: false },
        { text: "Book a demo", link: "/book-demo", primary: true },
      ],
    },
    hero: {
      title: "APIs That Put Tax Compliance on Autopilot",
      subtext: "Plug into our API stack and let automation handle the heavy lifting—fast, seamless, and always compliant",
    //   includes_title: "Includes:",
    //   features: [
    //     "Extract key details from PAN, Aadhaar, Passport, DL, Voter ID & RC        ",
    //     "Eliminate manual entry errors with instant, structured data",
    //     "Secure, compliant APIs that integrate easily into existing workflows",
    //   ],
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
     companiesLogos: [bank1, bank2, bank3, bank4],
    products_nav: [
        { icon: Product5_nav, title: "KYC", desc: "Simplify Onboarding with Powerful KYC", link: "/products-kyc" },
        { icon: Product3_nav, title: "Bank", desc: "Instant Bank Account Verification", link: "/products-bank-account-verification" },
        { icon: Product2_nav, title: "Security & Compliance API", desc: "Watermark and Aadhaar Masking", link: "/products-security" },
        { icon: Product4_nav, title: "OCR API", desc: "Extract data from government IDs and documents", link: "/products-ocr-apis" },
        { icon: Product1_nav, title: "GST", desc: "GST Verification APIs", link: "/products-gst" },
    ]
}
};

export default FastKYCPageData;
