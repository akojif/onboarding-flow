import Button from "../ui/Button";
import CustomInput from "../custom-input/CustomInput";
import HintEnter from "../ui/HintEnter";
import ActionWithHint from "../ui/ActionWithHint";

export default function NameStep({
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
    <div className='name-step'>
      <div className='name-step-content'>
        <Button variant='back' onClick={prevStep} />
        <h2 className='onboading-title'>What is your name?</h2>
        <CustomInput
          value={formData.name}
          onValueChange={(value) => onChange("name", value)}
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
