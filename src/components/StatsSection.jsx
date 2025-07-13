import { useState, useEffect } from 'react';

const StatsSection = () => {
  const [counts, setCounts] = useState({
    students: 0,
    faculty: 0,
    programs: 0,
    graduates: 0
  });

  const finalCounts = {
    students: 15000,
    faculty: 1200,
    programs: 150,
    graduates: 25000
  };

  useEffect(() => {
    const duration = 7000; // 2 seconds
    const steps = 50;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalCounts).map(key => {
      const increment = finalCounts[key] / steps;
      let currentCount = 0;

      return setInterval(() => {
        currentCount += increment;
        if (currentCount >= finalCounts[key]) {
          currentCount = finalCounts[key];
          clearInterval(intervals[Object.keys(finalCounts).indexOf(key)]);
        }
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(currentCount)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const stats = [
    {
      number: counts.students,
      suffix: '+',
      label: 'Active Students',
      icon: '👨‍🎓',
      color: 'from-blue-500 to-purple-600'
    },
    {
      number: counts.faculty,
      suffix: '+',
      label: 'Faculty Members',
      icon: '👨‍🏫',
      color: 'from-green-500 to-teal-600'
    },
    {
      number: counts.programs,
      suffix: '+',
      label: 'Academic Programs',
      icon: '📚',
      color: 'from-orange-500 to-red-600'
    },
    {
      number: counts.graduates,
      suffix: '+',
      label: 'Proud Graduates',
      icon: '🎓',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Decades of excellence reflected in our growing community of learners, educators, and achievers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                {stat.icon}
              </div>
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number.toLocaleString()}{stat.suffix}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;