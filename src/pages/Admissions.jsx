import { Link } from 'react-router-dom';

const Admissions = () => {
  const admissionSteps = [
    {
      step: '1',
      title: 'Submit Application',
      description: 'Complete our online application form with your personal and academic information.',
      icon: '📝',
      color: 'from-blue-500 to-purple-600'
    },
    {
      step: '2',
      title: 'Document Review',
      description: 'Submit required documents including transcripts, certificates, and recommendation letters.',
      icon: '📋',
      color: 'from-green-500 to-teal-600'
    },
    {
      step: '3',
      title: 'Entrance Exam',
      description: 'Take our comprehensive entrance examination or submit standardized test scores.',
      icon: '✏️',
      color: 'from-orange-500 to-red-600'
    },
    {
      step: '4',
      title: 'Interview Process',
      description: 'Participate in an interview with our admissions committee (for selected programs).',
      icon: '🎤',
      color: 'from-purple-500 to-pink-600'
    },
    {
      step: '5',
      title: 'Decision & Enrollment',
      description: 'Receive your admission decision and complete enrollment procedures.',
      icon: '🎓',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const requirements = [
    {
      category: 'Undergraduate Programs',
      items: [
        'High school diploma or equivalent',
        'Minimum GPA of 3.0',
        'SAT/ACT scores (optional)',
        'Two letters of recommendation',
        'Personal statement essay',
        'English proficiency test (for international students)'
      ]
    },
    {
      category: 'Graduate Programs',
      items: [
        'Bachelor\'s degree from accredited institution',
        'Minimum GPA of 3.2',
        'GRE/GMAT scores (program dependent)',
        'Three letters of recommendation',
        'Statement of purpose',
        'Professional experience (MBA programs)'
      ]
    }
  ];

  const scholarships = [
    {
      name: 'Merit Scholarship',
      amount: 'Up to 75% tuition',
      criteria: 'Outstanding academic performance',
      icon: '🏆'
    },
    {
      name: 'Need-Based Aid',
      amount: 'Up to 50% tuition',
      criteria: 'Demonstrated financial need',
      icon: '🤝'
    },
    {
      name: 'International Scholarship',
      amount: 'Up to 60% tuition',
      criteria: 'International students with excellent grades',
      icon: '🌍'
    },
    {
      name: 'Research Fellowship',
      amount: 'Full tuition + stipend',
      criteria: 'Graduate students in research programs',
      icon: '🔬'
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
              Join Our Community
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed animate-slide-up">
              Start your journey towards academic excellence and personal growth at Jahan University
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 inline-block">
              <p className="text-lg font-medium">Application Deadline: March 31, 2025</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200,120 L0,120 L0,60 C0,60 300,0 600,0 C900,0 1200,60 1200,60 L1200,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Admission Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these five simple steps to begin your academic journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  {step.icon}
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100 h-full">
                  <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm`}>
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Make sure you meet the requirements for your desired program level.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{req.category}</h3>
                <ul className="space-y-4">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Scholarships & Financial Aid
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe financial constraints should not limit your educational aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scholarships.map((scholarship, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 card-hover border border-gray-100"
              >
                <div className="text-4xl mb-4">{scholarship.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.name}</h3>
                <div className="text-2xl font-bold text-primary-600 mb-3">{scholarship.amount}</div>
                <p className="text-gray-600 text-sm">{scholarship.criteria}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Important Dates
            </h2>
            <p className="text-xl opacity-90">
              Mark your calendar with these crucial deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { date: 'Jan 15', event: 'Application Opens', desc: 'Start your application process' },
              { date: 'Mar 31', event: 'Application Deadline', desc: 'Final day to submit applications' },
              { date: 'Apr 15', event: 'Entrance Exams', desc: 'Standardized testing period' },
              { date: 'May 30', event: 'Results Announced', desc: 'Admission decisions released' }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">{item.date}</div>
                <h3 className="text-lg font-semibold mb-2">{item.event}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Apply?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Take the first step towards your bright future. Our admissions team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce-gentle"
              >
                Start Application
              </a>
              <Link
                to="/contact"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;