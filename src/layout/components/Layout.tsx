import { ReactNode } from 'react';
import Header from './Header';
import Main from './Main';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header className="flex justify-center w-full fixed" />
    <Main className="flex justify-center w-full pt-header">{children}</Main>
  </>
);

export default Layout;
