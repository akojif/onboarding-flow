import { motion } from 'framer-motion';

const TypingText = () => {
  const typingVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1, type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  return (
    <motion.span className="typing" initial="hidden" variants={typingVariants} animate="visible">
      <span></span>
      <span></span>
      <span></span>
    </motion.span>
  );
};

export default TypingText;
