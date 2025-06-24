import { useState } from 'react';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [activeExperience, setActiveExperience] = useState(null);

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white">
        <p className="head-text mb-16">My Work Experience</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {workExperiences.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveExperience(item.id)}
              onMouseLeave={() => setActiveExperience(null)}
              className={`
                relative bg-black-200 border border-gray-800 rounded-xl p-6 
                transition-all duration-500 ease-in-out cursor-pointer
                hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20
                ${activeExperience === item.id ? 'transform scale-105' : ''}
              `}
            >
              {/* Gradient overlay on hover */}
              <div className={`
                absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 
                rounded-xl transition-opacity duration-500
                ${activeExperience === item.id ? 'opacity-100' : 'opacity-0'}
              `} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header with icon and title */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-black-300 rounded-lg p-2 mr-4 flex items-center justify-center">
                    <img 
                      className="w-full h-full object-contain" 
                      src={item.icon} 
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.pos}</p>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="inline-block bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {item.duration}
                </div>

                {/* Description */}
                <p className={`
                  text-gray-300 leading-relaxed transition-colors duration-300
                  ${activeExperience === item.id ? 'text-white' : ''}
                `}>
                  {item.title}
                </p>

                {/* Bottom accent line */}
                <div className={`
                  mt-6 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full
                  transition-all duration-500 transform origin-left
                  ${activeExperience === item.id ? 'scale-x-100' : 'scale-x-0'}
                `} />
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add a timeline view for mobile */}
        <div className="block lg:hidden mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700" />
            
            {workExperiences.map((item, index) => (
              <div key={`timeline-${item.id}`} className="relative flex items-start mb-8">
                {/* Timeline dot */}
                <div className="absolute left-4 w-4 h-4 bg-purple-500 rounded-full border-4 border-black-100 z-10" />
                
                {/* Content */}
                <div className="ml-12 bg-black-200 border border-gray-800 rounded-lg p-4 flex-1">
                  <div className="flex items-center mb-2">
                    <img 
                      className="w-8 h-8 mr-3" 
                      src={item.icon} 
                      alt={item.name}
                    />
                    <div>
                      <h4 className="font-bold text-white">{item.name}</h4>
                      <p className="text-xs text-gray-400">{item.pos} • {item.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;