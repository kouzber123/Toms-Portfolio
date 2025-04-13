import { useState } from "react";
import PricingCard from "../components/PricingCard";
import { pricingCardData } from "../databank";
// src\assets\images\mountains.jpg
// Pricing is a page, pricing card is the component
export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  return (
    <div className="flex flex-row sm:flex-col md:flex-col  bg-gradient-to-r from-gray-900/30 to-gray-950/50">
      <div className="flex flex-col align-middle">
        {/* Main Heading Section */}
        <div className="flex flex-col lg:flex-col justify-center gap-4 p-10 lg:px-24 lg:mb-24 shadow-lg drop-shadow-xl rounded-lg">
          <h1 className="text-gray-50 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-wide text-center lg:text-left mb-3">
            Accelerate Your Business with the Right Digital Solution
          </h1>
          <p className="text-gray-50 text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-normal max-w-7xl whitespace-break-spaces">
            Whether you're a small startup, a growing business, or an
            enterprise, our tailored web solutions can help you scale and
            streamline your operations, attract new customers, and stay ahead in
            today's competitive digital landscape.
          </p>
        </div>

        {/* Pricing Cards Section */}
        <div className="z-10 flex flex-col lg:h-200 lg:flex-row justify-center gap-8 p-10 lg:px-30">
          {pricingCardData.map((x) => (
            <PricingCard
              key={x.name}
              priceCardData={x}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
        <div className="text-white mt-10 lg:px-24 mb-20 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 tracking-wide text-center lg:text-left">
            Why Choose Us?
          </h2>
          <p className="px-12 lg:px-0 whitespace-break-spaces lg:whitespace-normal text-lg leading-relaxed text-center lg:text-left">
            Our team of experienced professionals is committed to delivering
            results that meet your business needs. From user-friendly designs to
            scalable solutions, we provide the expertise and tools to ensure
            your success. Here's why our clients trust us:
          </p>
          <ul className="px-12 lg:px-0 whitespace-break-spaces list-disc list-inside mt-6 text-lg leading-relaxed space-y-2">
            <li>
              <span className="font-semibold">Custom solutions</span> tailored
              to your specific business goals
            </li>
            <li>
              <span className="font-semibold">
                Responsive, user-friendly designs
              </span>{" "}
              that engage customers
            </li>
            <li>
              <span className="font-semibold">SEO-optimized websites</span> to
              boost visibility
            </li>
            <li>
              <span className="font-semibold">Full-stack development</span> for
              robust and scalable applications
            </li>
            <li>
              <span className="font-semibold">Ongoing support</span> to ensure
              your site is always performing at its best
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
