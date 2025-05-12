import { useRef, useState, useEffect } from 'react';
import './OnboardingFlow.css';

import OnboardingNav from './OnboardingNav';
import EmailStep from './steps/EmailStep';
import NameStep from './steps/NameStep';
import CompanyNameStep from './steps/CompanyNameStep';
import WebsiteUrlStep from './steps/WebsiteUrlStep';
import ProductPreferenceStep from './steps/ProductPreferenceStep';
import PlatformStep from './steps/PlatformStep';
import Completed from './steps/Completed';
import OnboardingFooter from './OnboardingFooter';
import ProgressBar from './ui/ProgressBar';
import CardAnimation from './CardAnimation';
import BusinessCard from './ui/BusinessCard';
import OnboardingContent from './ui/OnboardingContent';
import OnboardingStepsAnimation from './OnboadingStepsAnimation';
import EcommercePlatformIcon from './icons/EcommercePlatformIcon';

const steps = [
  EmailStep,
  NameStep,
  CompanyNameStep,
  WebsiteUrlStep,
  PlatformStep,
  ProductPreferenceStep,
  Completed,
];

function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const OnboadingComponent = steps[currentStep];
  const websiteUrlActive = currentStep === 3;

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    companyName: '',
    platform: '',
    websiteUrl: '',
    productPreference: [],
  });

  const handleChange = (field: string, value: string | string[]) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  const nextStep = () => currentStep < steps.length - 1 && setCurrentStep((s) => s + 1);
  const prevStep = () => currentStep > 0 && setCurrentStep((s) => s - 1);

  return (
    <div className="onboading">
      <ProgressBar steps={steps.length} currentStep={currentStep} />
      <OnboardingNav />

      <OnboardingContent currentStep={currentStep}>
        <OnboardingStepsAnimation currentStep={currentStep}>
          <OnboadingComponent
            formData={formData}
            onChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </OnboardingStepsAnimation>
        <CardAnimation currentStep={currentStep}>
          <BusinessCard formData={formData} websiteUrlActive={websiteUrlActive} />
        </CardAnimation>
        {currentStep === 4 && <EcommercePlatformIcon selectedPlatform={formData.platform} />}
      </OnboardingContent>

      <OnboardingFooter />
    </div>
  );
}

export default OnboardingFlow;
