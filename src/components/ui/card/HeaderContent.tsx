import { AnimatePresence, motion } from "framer-motion";
import WebsiteUrlPrefix from "./WebsiteUrlPrefix";

interface HeaderContentProps {
  formData: { companyName: string; websiteUrl: string };
  websiteUrlActive: boolean;
}

const HeaderContent = ({ formData, websiteUrlActive }: HeaderContentProps) => {
  return (
    <motion.div
      className="header-content"
      initial={websiteUrlActive ? false : { height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      layout
    >
      <p className="logo">{formData.companyName.charAt(0).toUpperCase()}</p>
      <p className="company-name">{formData.companyName}</p>

      <AnimatePresence mode="wait">
        {websiteUrlActive && <WebsiteUrlPrefix url={formData.websiteUrl} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeaderContent;
