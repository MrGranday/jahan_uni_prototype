import FacultyCard from '../components/FacultyCard';

const Faculties = () => {
  const faculties = [
    {
      title: 'Computer Science',
      description: 'Leading-edge programs in software engineering, artificial intelligence, cybersecurity, and data science. Prepare for the digital future with hands-on learning and industry partnerships.',
      image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: '💻',
      programs: ['Software Engineering', 'AI & Machine Learning', 'Cybersecurity', 'Data Science'],
      link: '#'
    },
    {
      title: 'Sharia',
      description: 'Comprehensive programs combining traditional Islamic scholarship with contemporary academic rigor. Study Quran, Hadith, Islamic law, and comparative religion.',
      image: 'https://images.pexels.com/photos/1056615/pexels-photo-1056615.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: '🕌',
      programs: ['Islamic Jurisprudence', 'Quranic Studies', 'Islamic History', 'Comparative Religion'],
      link: '#'
    },
    {
      title: 'Law',
      description: 'Develop leadership skills and business acumen through our comprehensive MBA and undergraduate programs. Focus on entrepreneurship, finance, and global business.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: '📊',
      programs: ['MBA', 'Finance', 'Marketing', 'Entrepreneurship'],
      link: '#'
    },
    {
      title: 'Economic',
      description: 'State-of-the-art engineering programs covering mechanical, electrical, civil, and chemical engineering with emphasis on sustainable technology and innovation.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: '⚙️',
      programs: ['Mechanical Eng.', 'Electrical Eng.', 'Civil Eng.', 'Chemical Eng.'],
      link: '#'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Faculties
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed animate-slide-up">
              Discover world-class academic programs designed to shape tomorrow's leaders across diverse fields of study
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 opacity-90">
              <div className="text-center">
                <div className="text-3xl font-bold">150+</div>
                <p>Degree Programs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">1,200+</div>
                <p>Expert Faculty</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15,000+</div>
                <p>Active Students</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200,120 L0,120 L0,60 C0,60 300,0 600,0 C900,0 1200,60 1200,60 L1200,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Faculties Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Path to Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each faculty offers specialized programs designed to meet the evolving needs of today's industries and tomorrow's challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculties.map((faculty, index) => (
              <FacultyCard
                key={index}
                title={faculty.title}
                description={faculty.description}
                image={faculty.image}
                icon={faculty.icon}
                programs={faculty.programs}
                link={faculty.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Jahan University?
            </h2>
            <p className="text-lg text-gray-600">
              Our commitment to academic excellence and holistic development sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🌟',
                title: 'Academic Excellence',
                description: 'Top-ranked programs with internationally recognized faculty'
              },
              {
                icon: '🔬',
                title: 'Research Opportunities',
                description: 'State-of-the-art labs and research centers for hands-on learning'
              },
              {
                icon: '🌍',
                title: 'Global Partnerships',
                description: 'Exchange programs with leading universities worldwide'
              },
              {
                icon: '💼',
                title: 'Career Success',
                description: '95% employment rate within 6 months of graduation'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Academic Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explore our admission requirements and start your application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculties;