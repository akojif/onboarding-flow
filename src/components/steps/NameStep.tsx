import Button from '../ui/Button';
import CustomInput from '../custom-input/CustomInput';

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
    <div className="name-step">
      <div className="name-step-content">
        <Button variant="back" onClick={prevStep} />

        <h2 className="onboading-title">What is your name?</h2>
        <CustomInput value={formData.name} onValueChange={(value) => onChange('name', value)} />
        <Button variant="primary" onClick={nextStep} />
      </div>
    </div>
  );
}
