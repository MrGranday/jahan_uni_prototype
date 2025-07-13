const About = () => {
  const timeline = [
    {
      year: '1985',
      title: 'Foundation',
      description: 'Jahan University was established with a vision to provide world-class education combining modern knowledge with traditional values.'
    },
    {
      year: '1990',
      title: 'First Graduation',
      description: 'Our first batch of 150 students graduated, marking the beginning of our proud alumni community.'
    },
    {
      year: '2000',
      title: 'Research Excellence',
      description: 'Established advanced research centers and partnerships with international universities.'
    },
    {
      year: '2010',
      title: 'Digital Innovation',
      description: 'Launched comprehensive digital learning platforms and smart campus initiatives.'
    },
    {
      year: '2020',
      title: 'Global Recognition',
      description: 'Achieved international accreditation and ranked among top universities in the region.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to innovate and shape the future of education with cutting-edge technology and research.'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Vision',
      description: 'To be a leading global university that bridges traditional wisdom with modern innovation, producing graduates who excel academically and contribute meaningfully to society.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: '🚀',
      title: 'Mission',
      description: 'To provide exceptional education that develops critical thinking, moral character, and professional competence while fostering a diverse and inclusive learning environment.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: '💎',
      title: 'Values',
      description: 'Excellence in education, integrity in conduct, innovation in thinking, inclusivity in community, and service to humanity guide everything we do.',
      color: 'from-orange-500 to-red-600'
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
              About Jahan University
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed animate-slide-up">
              Four decades of educational excellence, innovation, and commitment to shaping future leaders
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200,120 L0,120 L0,60 C0,60 300,0 600,0 C900,0 1200,60 1200,60 L1200,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles and aspirations that drive our commitment to educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four decades of growth, innovation, and unwavering commitment to educational excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-600 to-secondary-600 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 md:max-w-lg">
                    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.year}
                    </div>
                  </div>

                  <div className="flex-1 md:max-w-lg">
                    {/* Empty space for alternating layout */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                    alt="Founder"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
                    "Education is not just about acquiring knowledge; it's about developing wisdom, character, and the ability to make a positive difference in the world. At Jahan University, we are committed to nurturing not just brilliant minds, but compassionate hearts and ethical leaders."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Dr. Ahmad Rahman</p>
                    <p className="text-gray-600">Founder & Chancellor Emeritus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Four Decades of Excellence
            </h2>
            <p className="text-xl opacity-90">
              The numbers tell our story of growth and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '40+', label: 'Years of Excellence' },
              { number: '25,000+', label: 'Alumni Worldwide' },
              { number: '150+', label: 'Academic Programs' },
              { number: '50+', label: 'Research Centers' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;