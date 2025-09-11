import React from "react";
import { IconPhone } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Contact_Section({ data }) {
  return (
    <section className="w-full bg-[#FFEEEE] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start px-6 md:px-12 lg:px-20">
        {/* ✅ Left Section */}
        <div>
          <h2 className="text-2xl md:text-[24px] font-bold leading-snug mb-4">
            Ready to{" "}
            <span className="text-[#F44336]">{data.left.highlight}</span> as
            Unlock Instant Verification
          </h2>

          <p className="text-[#616161] font-medium text-[16px] mb-6">
            {data.left.subtext}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              to={data.left.buttons[0].link}
              className="bg-[#F44336] text-white px-5 py-2 rounded-[10px] font-medium hover:bg-red-700 transition text-[16px] h-10 flex items-center justify-center"
            >
              {data.left.buttons[0].label}
            </Link>

            <Link
              to={data.left.buttons[1].link}
              className="flex items-center justify-center gap-2 border border-[#F44336] text-[#F44336] px-5 py-2 rounded-[10px] font-medium hover:bg-red-100 transition text-[16px] h-10"
            >
              <IconPhone size={18} />
              {data.left.buttons[1].label}
            </Link>
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
