import { GITHUB_URL, LINKEDIN_URL } from '../constant/link';
import Content from './Content';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => (
  <header className={`h-header ${className}`}>
    <Content className="flex justify-between items-center">
      <h1>Eomttt Log</h1>
      <section>
        <a href={GITHUB_URL}>github</a>
        <a href={LINKEDIN_URL}>linked in</a>
      </section>
    </Content>
  </header>
);

export default Header;
