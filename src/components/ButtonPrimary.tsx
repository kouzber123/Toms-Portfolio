import { motion } from "framer-motion";

export default function ButtonPrimary() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
    >
      Contact Me
    </motion.button>
  );
}
