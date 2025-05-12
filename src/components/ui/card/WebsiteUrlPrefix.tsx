import { motion } from 'framer-motion';

interface WebsiteUrlPrefixProps {
  url: string;
}
const urlVariants = {
  hidden: { height: 0, y: 10, opacity: 0 },
  visible: { height: 'auto', y: 0, opacity: 1 },
  exit: { height: 0 },
};

const WebsiteUrlPrefix = ({ url }: WebsiteUrlPrefixProps) => {
  return (
    <motion.p
      className="website-url-prefix"
      variants={urlVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {url}
    </motion.p>
  );
};

export default WebsiteUrlPrefix;
