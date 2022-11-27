import Image from 'next/image';
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
      <section className="flex gap-3 items-center">
        <Link href={GITHUB_URL} passHref legacyBehavior>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <Image width={20} height={20} alt="github icon" src="/github.png" />
          </a>
        </Link>
        <Link href={LINKEDIN_URL} passHref legacyBehavior>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <Image width={20} height={20} alt="linkedin icon" src="/linkedin.png" />
          </a>
        </Link>
      </section>
    </Content>
  </header>
);

export default Header;
