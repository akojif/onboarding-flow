import Button from "../ui/Button";
import CustomInput from "../custom-input/CustomInput";
import ActionWithHint from "../ui/ActionWithHint";
import HintEnter from "../ui/HintEnter";

export default function CompanyNameStep({
  formData,
  onChange,
  nextStep,
  prevStep,
}: {
  formData: any;
  onChange: (field: string, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}) {
  return (
    <div className='company-name-step'>
      <div className='company-name-step-content'>
        <Button variant='back' onClick={prevStep} />
        <h2 className='onboading-title'>Company Name?</h2>
        <CustomInput
          value={formData.companyName}
          onValueChange={(value) => onChange("companyName", value)}
          onEnterPress={nextStep}
        />

        <ActionWithHint>
          <Button variant='primary' onClick={nextStep} />
          <HintEnter />
        </ActionWithHint>
      </div>
    </div>
  );
}
