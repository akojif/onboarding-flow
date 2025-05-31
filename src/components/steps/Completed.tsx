import Button from "../ui/Button";

export default function Completed() {
  return (
    <div className='completed'>
      <h2 className='page-title'>
        Congratulations! <span>🎉</span>
      </h2>

      <p className='page-content'>
        You've completed the onboarding process. Now you can start using Reprise
        to grow your business.
      </p>

      <Button text='Go to Home' variant='primary' />
    </div>
  );
}
