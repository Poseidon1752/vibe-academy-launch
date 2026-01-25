import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orb - top right - Vibrant purple/indigo */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, hsl(245 85% 65% / 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Medium orb - bottom left - Vibrant emerald */}
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(160 85% 45% / 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Small accent orb - Warm orange */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(38 95% 55% / 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Extra orb - pink/magenta for more depth */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(280 80% 60% / 0.4) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default FloatingOrbs;