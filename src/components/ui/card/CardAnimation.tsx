import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CardAnimation({
  currentStep,
  children,
}: {
  currentStep: number;
  children: React.ReactNode;
}) {
  const prevStepRef = useRef(currentStep); // used to remember prevStep
  const prevStep = prevStepRef.current;

  useEffect(() => {
    prevStepRef.current = currentStep;
  }, [currentStep]);

  //   when to show card
  const showCard = currentStep >= 1 && currentStep <= 3;

  // what animation to use
  const shouldAnimateIn = currentStep === 1 && prevStep < currentStep;
  const shouldAnimateOut = currentStep === 4 && prevStep === 3;

  // animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0, x: 100, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { delay: 0.5, type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <AnimatePresence>
      {showCard && (
        <motion.div
          className='card-wrapper'
          variants={cardVariants}
          initial={shouldAnimateIn ? "initial" : false}
          animate='visible'
          exit={shouldAnimateOut ? { opacity: 0, y: -40 } : undefined}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CardAnimation;

// On initial page render useRef(currentStep) creates an object { current: 0 }, and React paints “Step 0.” to the DOM. useEffect runs and callback fires, setting prevStepRef.current = currentStep(1) (no change).

// State/prop changes → re‑render → function body runs again with currentStep = 2. useRef does not recreate the ref; it returns the same object whose .current is still 1.

// So inside this render, prevStepRef.current = 1, but currentStep = 2, React updates the DOM to show step 2. After paint, the useEffect callback runs and sets prevStepRef.current = 2, but this doesn't cause any rerender as change in useRef does not trigger a rerender (useEffect fires after page render, and rerender only happens when state or props change (and when it fires and updates useref, no rerender happens)).
