import CustomInput from "../custom-input/CustomInput";
import Button from "../ui/Button";
import BgIllustration from "../ui/card/BgIllustration";

function EmailStep({
  formData,
  onChange,
  nextStep,
}: {
  formData: any;
  onChange: (field: string, value: string) => void;
  nextStep: () => void;
}) {
  return (
    <div className='get-started-step'>
      <BgIllustration />
      <h2 className='onboading-title'>Get started with your email</h2>

      <div className={`${!formData.email ? "centered-custom-input" : ""}`}>
        <CustomInput
          placeholder='type here'
          value={formData.email}
          onValueChange={(value) => onChange("email", value)}
          required
        />
      </div>

      <Button variant='primary' onClick={nextStep} text='Get Started' />

      <p className='agreement-text'>
        By clicking on the button above, you agree to our terms of use and data
        policy on behalf of the company identified above.
      </p>
    </div>
  );
}

export default EmailStep;
