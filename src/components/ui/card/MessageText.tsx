import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.1, type: 'spring', stiffness: 100, damping: 10 },
  },
};

interface MessageTextProps {
  logo: string | React.ReactNode;
  text: string;
}

const MessageText = ({ logo, text }: MessageTextProps) => {
  return (
    <p className="message">
      <span className="logo"> {logo} </span>
      <motion.span className="text" variants={textVariants} initial={'hidden'} animate="visible">
        {text}
      </motion.span>
    </p>
  );
};

export default MessageText;
