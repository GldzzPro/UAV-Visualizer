import { FC } from 'react';

interface StorySectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imagePath: string;
  isReversed?: boolean;
}

const StorySection: FC<StorySectionProps> = ({
  icon,
  title,
  description,
  imagePath,
  isReversed = false
}) => {
  const contentOrder = isReversed ? 'md:order-2' : '';
  const imageOrder = isReversed ? 'md:order-1' : '';

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className={`md:w-1/2 ${contentOrder}`}>
        <div className="text-matlab-orange text-3xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-matlab-blue mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className={`md:w-1/2 ${imageOrder}`}>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
            <img
              src={imagePath}
              alt={title}
              className="object-cover rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/800x450?text=Flight+Path+Visualization';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;