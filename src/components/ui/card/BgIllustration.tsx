import { motion } from 'framer-motion';
import LogoIcon from '../../icons/LogoIcon';
import './CardIllustrations.css';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.3, y: -100 + '%' },
  visible: {
    opacity: 1,
    scale: 1,
    y: -250,
    type: 'spring',
    stiffness: 100,
    damping: 10,
    transition: { delay: 0.3, duration: 0.5 },
  },
};

export default function BgIllustration() {
  return (
    <motion.div className="bg-illustration">
      <CardSkeleton />
      <EmojiIcons />
      <MessageText logo={<LogoIcon />} text="Hi 👋 How can i help you?" animationEntry={100} />
      <MessageText logo="M" text="I'm looking for  🚗" animationEntry={-100} />
    </motion.div>
  );
}

const CardSkeleton = () => {
  return (
    <motion.div
      className="card-skeleton"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="card-content">
        <MessageText empty logo={<LogoIcon />} />
        <MessageText empty />
        <div className="message-typing">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

interface MessageTextProps {
  logo?: string | React.ReactNode;
  text?: string;
  empty?: boolean;
  animationEntry?: number;
}

const MessageText = ({ logo, text, empty, animationEntry }: MessageTextProps) => {
  return (
    <motion.p
      className={`text-message ${empty ? 'empty' : ''}`}
      initial={{ opacity: 0, x: animationEntry }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <span className="logo"> {logo} </span>
      <span className="text">{text}</span>
    </motion.p>
  );
};

// emojis
const emojis = ['💃', '👋', '💎', '🎮'];

const initialPositions = [
  { scale: 0, x: 100, y: 100 },
  { scale: 0, x: -100, y: 100 },
  { scale: 0, x: 150, y: -150 },
  { scale: 0, x: -200, y: -200 },
];

const finalPositions = { scale: 1, x: 0, y: 0, opacity: 1 };
const emojiTransition = {
  opacity: 0,
  delay: 0.3,
  duration: 0.5,
};

const EmojiIcons = () => {
  return (
    <div className="emoji-icons">
      {emojis.map((emoji, index) => (
        <motion.span
          className="icon"
          initial={initialPositions[index]}
          animate={finalPositions}
          transition={emojiTransition}
        >
          {emoji}
        </motion.span>
      ))}
    </div>
  );
};
