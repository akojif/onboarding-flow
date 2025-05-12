import Button from '../ui/Button';
import CustomInput from '../custom-input/CustomInput';

interface WebsiteUrlsProps {
  formData: { websiteUrl: string };
  onChange: (field: string, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

function WebsiteUrlStep({ formData, onChange, nextStep, prevStep }: WebsiteUrlsProps) {
  return (
    <div className="website-name-step">
      <div className="website-name-step-content">
        <Button variant="back" onClick={prevStep} />
        <h2 className="onboading-title">Company Website?</h2>
        <CustomInput
          value={formData.websiteUrl}
          onValueChange={(value) => onChange('websiteUrl', value)}
          required={true}
          websiteVarient={true}
        />
        <Button variant="primary" onClick={nextStep} />
      </div>
    </div>
  );
}

export default WebsiteUrlStep;
