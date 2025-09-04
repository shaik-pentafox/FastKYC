import { IconPhone } from "@tabler/icons-react";
import React from "react";

function Contact_Section({data}) {
  return (
    <section className="w-full bg-[#FFEEEE] py-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start px-6 md:px-12 lg:px-20">

        {/* ✅ Left Section */}
        <div>
          <h2 className="text-2xl md:text-[32px] font-bold leading-snug mb-4">
            Ready to <span className="text-[#F44336]">{data.left.highlight}</span> as Unlock <br />
            Instant Verification
          </h2>
          <p className="text-[#616161] font-medium text-[16px] mb-6">
            {data.left.subtext}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button className="bg-[#F44336] text-white px-5 py-2 rounded-[10px] font-medium hover:bg-[#d32f2f] transition text-[16px] h-10">
              {data.left.buttons.getStarted}
            </button>
            <button className="flex items-center justify-center gap-2 border border-[#F44336] text-[#F44336] px-5 py-2 rounded-[10px] font-medium hover:bg-red-100 transition text-[16px] h-10">
              <IconPhone size={18} />
              {data.left.buttons.contactSales}
            </button>
          </div>
        </div>

        {/* ✅ Cards Section */}
        {data.cards.map((card) => (
          <div key={card.id}>
            <h3 className="text-[24px] font-bold mb-2 text-[#212121]">
              {card.title}
            </h3>
            <p className="text-[#616161] text-[16px] font-medium leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact_Section;
