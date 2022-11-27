import Link from 'next/link';
import { GITHUB_URL, LINKEDIN_URL } from '../constant/link';
import Content from './Content';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => (
  <header className={`h-header bg-white border-b-2 ${className}`}>
    <Content className="flex justify-between items-center max-w-content px-4">
      <h1 className="font-bold text-3xl">
        <Link href="/">Eomttt Log</Link>
      </h1>
      <section>
        <a href={GITHUB_URL}>github</a>
        <a href={LINKEDIN_URL}>linked in</a>
      </section>
    </Content>
  </header>
);

export default Header;
