import { cardStyles } from "../styles/HeaderStyles";
import { Price } from "../types/priceCard";
import Icon from "./Icon";

type Props = {
  priceCardData: Price;
  hoveredCard: string | null;
  setHoveredCard: React.Dispatch<React.SetStateAction<string | null>>;
};

// card component for pricing styling here only affects inside the card
export default function PricingCard({
  priceCardData,
  hoveredCard,
  setHoveredCard,
}: Readonly<Props>) {
  // bg - [url("src/assets/images/bgimg.jpg")];
  const isBlurred = hoveredCard && hoveredCard !== priceCardData.name;
  const bgColors: { [key: string]: string } = {
    "Enterprise Web App":
      "bg-gradient-to-r from-gray-800 to-black text-gray-50 shadow-gray-900",
    "Business Growth Site":
      "bg-gradient-to-r from-blue-200 to-blue-500 text-gray-900 shadow-blue-900",
    "Starter Website":
      "bg-gradient-to-r from-stone-100 to-stone-300 text-gray-900 shadow-stone-900",
  };
  const bgColor = bgColors[priceCardData.name] || "bg-gray-500";
  return (
    <div
      onMouseOver={() => setHoveredCard(priceCardData.name)}
      onMouseOut={() => setHoveredCard(null)}
      className={`
        transition-all duration-500 ease-in-out ${
          isBlurred ? "opacity-40 blur-sm" : "opacity-100 blur-0"
        } 
      p-10 flex flex-col min-h-[300px] ${bgColor} ${cardStyles} 
      font-medium border-2 border-gray-50 shadow-md rounded-4xl pr-6`}
    >
      <div className="flex mb-10 justify-center">
        <div className="border-b-2 p-3 pr-5 pl-5">
          <div className="mt-5 flex items-center justify-center gap-4 text-base sm:text-lg md:text-lg lg:text-4xl font-semibold leading-snug tracking-wide">
            <Icon
              iconName={priceCardData.icon}
              iconColor={priceCardData.iconColor}
            />
            {priceCardData.name}
          </div>
        </div>
      </div>

      {/* Summary with proper wrapping and no shrinking */}
      <div className="flex-1 flex-shrink-0">
        <div className="leading-relaxed mb-10 text-base sm:text-lg md:text-xl lg:text-2xl break-words whitespace-normal tracking-wide">
          {priceCardData.summary}
        </div>
      </div>

      {/* Price stays at the bottom */}
      <div className="flex flex-shrink-0 justify-end">
        <div className=" border-b-2 pb-2 text-base sm:text-lg md:text-2xl lg:text-3xl">
          Price: {priceCardData.price} €
        </div>
      </div>
    </div>
  );
}
