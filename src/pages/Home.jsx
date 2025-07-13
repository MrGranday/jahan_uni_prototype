import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { Link } from 'react-router-dom';

const Home = () => {
  const quickLinks = [
    {
      title: 'Academic Programs',
      description: 'Explore our diverse range of undergraduate and graduate programs designed for tomorrow\'s leaders.',
      icon: '🎓',
      link: '/faculties',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Admissions',
      description: 'Start your journey with us. Learn about our admission process and requirements.',
      icon: '📝',
      link: '/admissions',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Research & Innovation',
      description: 'Discover groundbreaking research and innovation happening at our university.',
      icon: '🔬',
      link: '/about',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our admissions team and learn more about campus life.',
      icon: '📞',
      link: '/contact',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="pt-16">
      <Hero />
      
      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discover Jahan University
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about academics, admissions, and campus life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-primary-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              To provide world-class education that combines academic excellence with moral values, 
              preparing students to become innovative leaders who contribute positively to society 
              and serve humanity with integrity and purpose.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🌟
                </div>
                <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                <p className="opacity-80">Striving for the highest standards in education and research</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🤝
                </div>
                <h3 className="text-lg font-semibold mb-2">Integrity</h3>
                <p className="opacity-80">Building character and moral leadership in our students</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🚀
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="opacity-80">Fostering creativity and forward-thinking solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Take the first step towards an exceptional education and a bright future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;