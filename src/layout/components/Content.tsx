import { ReactNode } from 'react';

interface ContentProps {
  className?: string;
  children: ReactNode;
}

const Content = ({ className, children }: ContentProps) => (
  <div className={`max-w-5xl w-full h-full ${className}`}>{children}</div>
);

export default Content;
