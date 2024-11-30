import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import Logo from './Logo';

const Header: FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-matlab-blue hover:text-matlab-orange transition-colors"
        >
          <FaGithub className="w-6 h-6" />
        </a>
      </nav>
    </header>
  );
};

export default Header;