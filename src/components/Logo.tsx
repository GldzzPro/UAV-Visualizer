import { FC } from 'react';

const Logo: FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-matlab-orange rounded-md flex items-center justify-center">
        <span className="text-white font-bold">M</span>
      </div>
      <span className="text-matlab-blue font-semibold text-lg">UAV Visualizer</span>
    </div>
  );
};

export default Logo;