import { useEffect } from "react";
import ActionWithHint from "../ui/ActionWithHint";
import Button from "../ui/Button";
import HintEnter from "../ui/HintEnter";

interface PlatformStepProps {
  formData: { platform: string };
  onChange: (field: string, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function PlatformStep({
  formData,
  onChange,
  nextStep,
  prevStep,
}: PlatformStepProps) {
  // handle enter key press
  useEffect(() => {
    const handleEnterPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && formData.platform) {
        nextStep();
      }
    };

    window.addEventListener("keydown", handleEnterPress);
    return () => window.removeEventListener("keydown", handleEnterPress);
    // eslint-disable-next-line
  }, [nextStep]); //to avoid holding a stale closure

  return (
    <div className='platform-step'>
      <div className='platform-step-content'>
        <Button variant='back' onClick={prevStep} />

        <h2 className='onboading-title'>Your ecommerce platform?</h2>
        <div className='radio-group'>
          <label>
            <input
              type='radio'
              name='platform'
              value='shopify'
              checked={formData.platform === "shopify"}
              onChange={() => onChange("platform", "shopify")}
            />
            Shopify
          </label>
          <label>
            <input
              type='radio'
              name='platform'
              value='magento'
              checked={formData.platform === "magento"}
              onChange={() => onChange("platform", "magento")}
              tabIndex={1}
            />
            Magento
          </label>
          <label>
            <input
              type='radio'
              name='platform'
              value='woocommerce'
              checked={formData.platform === "woocommerce"}
              onChange={() => onChange("platform", "woocommerce")}
            />
            WooCommerce
          </label>
          <label>
            <input
              type='radio'
              name='platform'
              value='bigcommerce'
              checked={formData.platform === "bigcommerce"}
              onChange={() => onChange("platform", "bigcommerce")}
            />
            BigCommerce
          </label>
          <label>
            <input
              type='radio'
              name='platform'
              value='salesforce'
              checked={formData.platform === "salesforce"}
              onChange={() => onChange("platform", "salesforce")}
            />
            Salesforce Commerce Cloud
          </label>
          <label>
            <input
              type='radio'
              name='platform'
              value='other'
              checked={formData.platform === "other"}
              onChange={() => onChange("platform", "other")}
            />
            Other
          </label>
        </div>

        <ActionWithHint>
          <Button variant='primary' onClick={nextStep} />
          <HintEnter />
        </ActionWithHint>
      </div>
    </div>
  );
}
