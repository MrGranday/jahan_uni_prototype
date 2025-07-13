import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Karte Naw 3th St', 'Kabul', 'Afghanistan'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['Main Office: 0777777777', 'Admissions: 0766666666', 'Student Services: 0755555555'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['info@jahanuniversity.edu', 'admissions@jahanuniversity.edu', 'support@jahanuniversity.edu'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: '🕒',
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const departments = [
    { name: 'Admissions Office', phone: '0777777777', email: 'admissions@jahanuniversity.edu' },
    { name: 'Student Services', phone: '0766666666', email: 'students@jahanuniversity.edu' },
    { name: 'Academic Affairs', phone: '0755555555', email: 'academic@jahanuniversity.edu' },
    { name: 'Financial Aid', phone: '0744444444', email: 'finaid@jahanuniversity.edu' },
    { name: 'International Office', phone: '0733333333', email: 'international@jahanuniversity.edu' },
    { name: 'Career Services', phone: '0722222222', email: 'careers@jahanuniversity.edu' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed animate-slide-up">
              We're here to help you with any questions about admissions, programs, or campus life
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200,120 L0,120 L0,60 C0,60 300,0 600,0 C900,0 1200,60 1200,60 L1200,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us. Choose the most convenient option for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map and Quick Contact */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.7723737206634!2d69.2253187!3d34. Socialist5086546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16b2982d7f49b%3A0xa7a2e42395e5229e!2zSmFoYW4gVW5pdmVyc2l0eSDYr9in2YbYtNqv2KfZhyDYrNmH2KfZhg!5e0!3m2!1sen!2s!4v1752424125929!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-t-2xl"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Campus Location</h3>
                  <p className="text-gray-600">Visit our beautiful campus on Karte Naw 3th St, Kabul.</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      📞
                    </div>
                    <div>
                      <p className="font-semibold">Emergency Contact</p>
                      <p className="opacity-90">0711111111</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      💬
                    </div>
                    <div>
                      <p className="font-semibold">Live Chat</p>
                      <p className="opacity-90">Available 24/7 on our website</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      📱
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="opacity-90">0700000000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Directory */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Department Directory
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contact specific departments directly for specialized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{dept.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">{dept.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">{dept.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about Jahan University.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What are the admission requirements?',
                answer: 'Admission requirements vary by program. Generally, we require a high school diploma, minimum GPA, and standardized test scores. Please check our admissions page for specific requirements.'
              },
              {
                question: 'Do you offer financial aid?',
                answer: 'Yes, we offer various scholarships and financial aid options including merit-based scholarships, need-based aid, and international student scholarships.'
              },
              {
                question: 'Can I schedule a campus tour?',
                answer: 'Absolutely! We offer guided campus tours Monday through Saturday. Please contact our admissions office to schedule your visit.'
              },
              {
                question: 'What is campus life like?',
                answer: 'Our campus offers a vibrant community with over 100 student organizations, modern facilities, sports teams, and cultural events throughout the year.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;