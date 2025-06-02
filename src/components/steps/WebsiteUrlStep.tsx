import Button from "../ui/Button";
import CustomInput from "../custom-input/CustomInput";
import ActionWithHint from "../ui/ActionWithHint";
import HintEnter from "../ui/HintEnter";

interface WebsiteUrlsProps {
  formData: { websiteUrl: string };
  onChange: (field: string, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

function WebsiteUrlStep({
  formData,
  onChange,
  nextStep,
  prevStep,
}: WebsiteUrlsProps) {
  return (
    <div className='website-name-step'>
      <div className='website-name-step-content'>
        <Button variant='back' onClick={prevStep} />
        <h2 className='onboading-title'>Company Website?</h2>

        <div className='prefix-with-input'>
          <div className='website-prefix'>https://</div>
          <CustomInput
            value={formData.websiteUrl}
            onValueChange={(value) => onChange("websiteUrl", value)}
            required={true}
            onEnterPress={nextStep}
          />
        </div>
        <ActionWithHint>
          <Button variant='primary' onClick={nextStep} />
          <HintEnter />
        </ActionWithHint>
      </div>
    </div>
  );
}

export default WebsiteUrlStep;
