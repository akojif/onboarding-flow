import { motion, AnimatePresence } from 'framer-motion';

interface CardHeaderProps {
  children: React.ReactNode;
}

const CardHeader = ({ children }: CardHeaderProps) => {
  return (
    <motion.div className="card-header">
      <AnimatePresence>{children}</AnimatePresence>
    </motion.div>
  );
};

export default CardHeader;
