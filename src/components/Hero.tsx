import { FC } from 'react';
import { FaMapMarkedAlt, FaCube } from 'react-icons/fa';

const Hero: FC = () => {
  return (
    <div className="bg-gradient-to-br from-matlab-blue to-matlab-orange/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Visualize UAV Flight Paths
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white/80 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Advanced 2D and 3D visualization tools for UAV flight path analysis using MATLAB
          </p>
          <div className="mt-10 flex justify-center space-x-6">
            <FeatureCard
              icon={<FaMapMarkedAlt className="w-8 h-8" />}
              title="2D Mapping"
              description="Precise 2D visualization of flight paths with detailed waypoints"
            />
            <FeatureCard
              icon={<FaCube className="w-8 h-8" />}
              title="3D Visualization"
              description="Interactive 3D models with altitude and orientation data"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-64">
      <div className="text-matlab-orange">{icon}</div>
      <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{description}</p>
    </div>
  );
};

export default Hero;