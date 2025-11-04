import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  IconBuildingBank,
  IconCircleCheck,
  IconFingerprint,
  IconIdBadge2,
  IconMapPinCheck,
  IconMessageCheck,
  IconShieldCheck,
} from "@tabler/icons-react";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Badge2: (<IconIdBadge2 size={42} stroke={1.5} className="text-red-500 w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] md:w-[40px] md:h-[40px] lg:w-[42px] lg:h-[42px]" />),
  Finger: (<IconFingerprint size={42} stroke={1.5} className="text-red-500 w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] md:w-[40px] md:h-[40px] lg:w-[42px] lg:h-[42px]" />),
  Message: (<IconMessageCheck size={42} stroke={1.5} className="text-red-500 w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] md:w-[40px] md:h-[40px] lg:w-[42px] lg:h-[42px]" />),
  MapPin: (<IconMapPinCheck size={42} stroke={1.5} className="text-red-500 w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] md:w-[40px] md:h-[40px] lg:w-[42px] lg:h-[42px]" />),
  Bank: (<IconBuildingBank size={42} stroke={1.5} className="text-red-500 w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] md:w-[40px] md:h-[40px] lg:w-[42px] lg:h-[42px]" />),
  ShieldCheck: (<IconShieldCheck size={42} stroke={1.5} className="text-red-500 w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] md:w-[40px] md:h-[40px] lg:w-[42px] lg:h-[42px]" />),
};

function Offer_Section({ data }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const mm = gsap.matchMedia();
    const cardsEl = gsap.utils.toArray(".stack-card");

    // --- DESKTOP / TABLET ANIMATION
    mm.add("(min-width: 768px)", () => {
      gsap.set(cardsEl, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transformOrigin: "center center",
        scale: 1,
        yPercent: 0,
      });

      cardsEl.forEach((card, i) => {
        gsap.set(card, { zIndex: cardsEl.length - i });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=" + cardsEl.length * 500,
          scrub: 0.4,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cardsEl.forEach((card, i) => {
        if (i > 0) {
          tl.fromTo(
            card,
            { yPercent: 100, scale: 1, opacity: 0.9, zIndex: cardsEl.length + i },
            { yPercent: 0, scale: 1, opacity: 1, duration: 0.8, ease: "power1.inOut" },
            i * 0.6
          );

          for (let j = 0; j < i; j++) {
            tl.to(
              cardsEl[j],
              {
                scale: 1 - (i - j) * 0.05,
                yPercent: -10 * (i - j),
                duration: 0.8,
                ease: "power1.inOut",
              },
              "<"
            );
          }
        }
      });
    });

    // --- MOBILE ANIMATION
    mm.add("(max-width: 767px)", () => {
      gsap.set(cardsEl, { clearProps: "all" });
      cardsEl.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40, // reduced from 60 for smoother, tighter animation
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.globalTimeline.clear();
      mm.revert();
      window.scrollTo(0, 0);
    };
  }, [location]);

  return (
    <section id="offer-section" className="relative w-full">
      <div
        ref={containerRef}
        className="relative h-auto md:h-[120vh]"
        style={{ overflowX: "hidden", overflowY: "hidden", width: "100%" }}
      >
        {data?.map((card, idx) => (
          <section
            key={idx}
            className="stack-card flex justify-center items-center min-h-[90vh] sm:min-h-[100vh] md:min-h-[110vh] px-4 sm:px-6 md:px-12 lg:px-20 pt-[50px] pb-[50px] sm:pt-[80px] sm:pb-[80px] md:pt-[100px] md:pb-[100px]"
          >
            <div className="bg-[#FFEEEE] flex flex-col md:flex-row justify-between items-center rounded-3xl shadow-md py-10 sm:py-14 md:py-16 px-6 sm:px-10 md:px-14 lg:px-20 w-full max-w-6xl">
              <div className="md:w-1/2">
                <div className="flex flex-row items-center gap-3 mb-6 sm:mb-8 justify-start">
                  <span className="text-red-500 flex-shrink-0">{iconMap[card.icon]}</span>
                  <h2 className="text-[22px] sm:text-[26px] lg:text-[34px] font-bold text-[#1e1e1e] whitespace-nowrap">
                    {card.title}
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {card.points.map((point, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2">
                        <span className="text-red-500 text-xl">
                          <IconCircleCheck stroke={1.5} />
                        </span>
                        <h3 className="font-semibold text-[16px] sm:text-[17px] md:text-[18px] text-[#1e1e1e]">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-[#424242] mt-1 text-[15px] sm:text-[16px]">{point.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
                <img src={card.img} alt={card.title} className="w-[280px] sm:w-[350px] md:w-[400px]" />
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Offer_Section;
