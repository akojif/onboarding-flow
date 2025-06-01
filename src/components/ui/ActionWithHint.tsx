import { ReactNode } from "react";

export default function ActionWithHint({ children }: { children: ReactNode }) {
  return <div className='action-with-hint'>{children}</div>;
}
