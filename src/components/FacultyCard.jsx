import { Link } from 'react-router-dom';

const FacultyCard = ({ title, description, image, icon, programs, link }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover overflow-hidden border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-2xl">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="space-y-2 mb-6">
          <h4 className="font-semibold text-gray-900 text-sm">Key Programs:</h4>
          <div className="flex flex-wrap gap-2">
            {programs.map((program, index) => (
              <span
                key={index}
                className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {program}
              </span>
            ))}
          </div>
        </div>
        
        <Link
          to={link}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200 group"
        >
          Learn More
          <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default FacultyCard;