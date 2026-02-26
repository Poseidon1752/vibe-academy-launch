import { motion, useScroll, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const isMobile = useIsMobile();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Skip rendering on mobile to avoid scroll-linked animation overhead
  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent to-primary origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
