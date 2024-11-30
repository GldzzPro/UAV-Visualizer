import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-matlab-blue">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white/80 text-sm">
          © {new Date().getFullYear()} UAV Flight Path Visualizer. Built with MATLAB.
        </p>
      </div>
    </footer>
  );
};

export default Footer;