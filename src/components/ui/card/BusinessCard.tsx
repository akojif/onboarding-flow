import { motion } from "framer-motion";
import LogoIcon from "../../icons/LogoIcon";
import "./BusinessCard.css";
import BusinessCardFooterLogo from "./CardFooterLogo";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import MessageText from "./MessageText";
import TypingText from "./TypingText";
import FooterText from "./FooterText";
import HeaderContent from "./HeaderContent";

interface BusinessCardProps {
  formData: {
    platform: string;
    websiteUrl: string;
    name: string;
    companyName: string;
  };
  websiteUrlActive?: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0, x: 100, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { delay: 1, type: "spring", stiffness: 100, damping: 12 },
  },
};

const BusinessCard = ({
  formData,
  websiteUrlActive = false,
}: BusinessCardProps) => {
  return (
    <>
      <motion.div
        className='business-card'
        variants={cardVariants}
        initial={"hidden"}
        animate='visible'
        exit={"exit"}
      >
        <CardHeader>
          {formData.companyName && (
            <HeaderContent
              formData={formData}
              websiteUrlActive={websiteUrlActive}
            />
          )}
        </CardHeader>

        <CardBody>
          <MessageText logo={<LogoIcon />} text='Your full name?' />
          {formData.name && (
            <MessageText
              logo={formData.name.charAt(0).toUpperCase()}
              text={formData.name}
            />
          )}
          {!formData.name && <TypingText />}
          <FooterText />
        </CardBody>
      </motion.div>

      {/* footer icon */}
      <BusinessCardFooterLogo />
    </>
  );
};

export default BusinessCard;
