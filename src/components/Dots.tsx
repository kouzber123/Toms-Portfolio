import { motion } from "framer-motion";

export default function Dots() {
  return (
    <div className="absolute inset-0 overflow-hidden z-[1]">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-blue-500 rounded-full absolute"
          initial={{ opacity: 0, y: Math.random() * 50 }}
          animate={{ opacity: 1, y: Math.random() * -50 }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
