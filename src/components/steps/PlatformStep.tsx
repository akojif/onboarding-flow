import Button from '../ui/Button';

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
  return (
    <div className="platform-step">
      <div className="platform-step-content">
        <Button variant="back" onClick={prevStep} />

        <h2 className="onboading-title">Your ecommerce platform?</h2>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="platform"
              value="shopify"
              checked={formData.platform === 'shopify'}
              onChange={() => onChange('platform', 'shopify')}
            />
            Shopify
          </label>
          <label>
            <input
              type="radio"
              name="platform"
              value="magento"
              checked={formData.platform === 'magento'}
              onChange={() => onChange('platform', 'magento')}
            />
            Magento
          </label>
          <label>
            <input
              type="radio"
              name="platform"
              value="woocommerce"
              checked={formData.platform === 'woocommerce'}
              onChange={() => onChange('platform', 'woocommerce')}
            />
            WooCommerce
          </label>
          <label>
            <input
              type="radio"
              name="platform"
              value="bigcommerce"
              checked={formData.platform === 'bigcommerce'}
              onChange={() => onChange('platform', 'bigcommerce')}
            />
            BigCommerce
          </label>
          <label>
            <input
              type="radio"
              name="platform"
              value="salesforce"
              checked={formData.platform === 'salesforce'}
              onChange={() => onChange('platform', 'salesforce')}
            />
            Salesforce Commerce Cloud
          </label>
          <label>
            <input
              type="radio"
              name="platform"
              value="other"
              checked={formData.platform === 'other'}
              onChange={() => onChange('platform', 'other')}
            />
            Other
          </label>
        </div>
        <Button variant="primary" onClick={nextStep} />
      </div>
    </div>
  );
}
