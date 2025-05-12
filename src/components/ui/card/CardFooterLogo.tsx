import { motion } from 'framer-motion';
import LogoIcon from '../../icons/LogoIcon';

const CardFooterLogo = () => {
  return (
    <motion.div
      className="footer-logo"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.3, ease: 'easeInOut' }}
    >
      <LogoIcon />
    </motion.div>
  );
};

export default CardFooterLogo;
