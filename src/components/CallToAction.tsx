import { FC } from 'react';
import { FaCode } from 'react-icons/fa';

const CallToAction: FC = () => {
  return (
    <div className="bg-matlab-blue py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FaCode className="w-12 h-12 text-matlab-orange mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Visualize Your UAV Data?
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Start creating stunning visualizations of your UAV flight paths using our MATLAB integration
        </p>
        <button className="bg-matlab-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default CallToAction;