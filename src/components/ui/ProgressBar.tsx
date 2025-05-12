import { motion } from 'framer-motion';
import './ProgressBar.css';

export default function ProgressBar({ steps, currentStep }: { steps: number; currentStep: number }) {
  // calculate progress of current step in relation to total steps
  const progress = (currentStep / (steps - 1)) * 100;

  return (
    <div className="progress-bar">
      <motion.div
        className="progress-bar-fill"
        initial={{ width: 0 }}
        animate={{ width: progress + '%' }}
        transition={{ duration: 0.6 }}
      ></motion.div>
    </div>
  );
}
