import { ReactNode } from 'react';
import Content from './Content';

interface MainProps {
  className?: string;
  children: ReactNode;
}

const Main = ({ className, children }: MainProps) => (
  <main className={className}>
    <Content>{children}</Content>
  </main>
);

export default Main;
