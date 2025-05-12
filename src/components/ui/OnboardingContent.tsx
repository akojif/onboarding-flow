interface OnboardingContentProps {
  currentStep: number;
  children: React.ReactNode;
}

export default function OnboardingContent({ children }: OnboardingContentProps) {
  return <div className="onboarding-content">{children}</div>;
}
