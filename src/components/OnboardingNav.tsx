import LogoIcon from './icons/LogoIcon';

export default function OnboardingNav() {
  return (
    <nav className="onboading-nav">
      <a href="/">
        {' '}
        <LogoIcon />
      </a>
      <button className="btn gradient-border">Help</button>
    </nav>
  );
}
