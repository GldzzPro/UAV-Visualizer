import { FC } from 'react';
import { FaChartLine, FaCode, FaDownload, FaSync } from 'react-icons/fa';

const Features: FC = () => {
  const features = [
    {
      icon: <FaChartLine />,
      title: 'Real-time Analysis',
      description: 'Monitor and analyze flight paths in real-time with instant data visualization'
    },
    {
      icon: <FaCode />,
      title: 'MATLAB Integration',
      description: 'Seamlessly integrate with existing MATLAB workflows and scripts'
    },
    {
      icon: <FaDownload />,
      title: 'Data Export',
      description: 'Export visualization data in multiple formats for further analysis'
    },
    {
      icon: <FaSync />,
      title: 'Live Updates',
      description: 'Automatic updates of flight path data with minimal latency'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-matlab-blue transition-colors"
            >
              <div className="text-matlab-orange text-2xl">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-medium text-matlab-blue">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;