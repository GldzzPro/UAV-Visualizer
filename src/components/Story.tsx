import { FC } from 'react';
import StorySection from './StorySection';
import { FaMapMarkedAlt, FaSync, FaMountain, FaCamera } from 'react-icons/fa';

const Story: FC = () => {
  const sections = [
    {
      icon: <FaMapMarkedAlt />,
      title: "The Journey Begins",
      description: "Follow a fascinating UAV flight from the Mauna Loa Baseline Observatory to the summit of Hawaii's largest volcano.",
      imagePath: "/images/mauna-loa-map.jpg"
    },
    {
      icon: <FaSync />,
      title: "Synchronized Views",
      description: "Experience the flight path through synchronized 2D geographic axes and 3D globe visualization, providing comprehensive spatial awareness.",
      imagePath: "/images/sync-view.jpg"
    },
    {
      icon: <FaCamera />,
      title: "Dynamic Camera Navigation",
      description: "Follow the UAV's journey through dynamic camera movements, offering unique perspectives of the flight path.",
      imagePath: "/images/camera-nav.jpg"
    },
    {
      icon: <FaMountain />,
      title: "Summit Panorama",
      description: "Conclude the journey with a breathtaking panoramic view of the Mauna Loa volcano summit, captured by our UAV.",
      imagePath: "/images/panorama.jpg"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-matlab-blue">Discover the Journey</h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience a real-world UAV mission visualization from Hawaii
          </p>
        </div>
        <div className="space-y-16">
          {sections.map((section, index) => (
            <StorySection
              key={index}
              icon={section.icon}
              title={section.title}
              description={section.description}
              imagePath={section.imagePath}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;