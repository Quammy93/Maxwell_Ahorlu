import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-CSA-2024-001",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "https://aws.amazon.com",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2024",
      credentialId: "GCP-PD-2024-002",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "https://cloud.google.com",
      color: "from-blue-500 to-green-500"
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta (Coursera)",
      date: "2023",
      credentialId: "META-FE-2023-003",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "https://coursera.org",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2023",
      credentialId: "MONGO-DEV-2023-004",
      image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "https://mongodb.com",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Academic excellence recognition for maintaining GPA above 3.8",
      year: "2023-2024"
    },
    {
      title: "Hackathon Winner",
      description: "First place in University Tech Challenge for innovative web app",
      year: "2024"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to React and Node.js open source projects",
      year: "2023-2024"
    },
    {
      title: "Student Leadership Award",
      description: "Recognition for leadership in computer science student organization",
      year: "2023"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certificates & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional certifications and achievements that demonstrate my commitment to continuous learning and excellence.
            </p>
          </div>

          {/* Certificates */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map(({ title, issuer, date, credentialId, image, link, color }) => (
                <div
                  key={title}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <img
                        src={image}
                        alt={title}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${color} rounded-full flex items-center justify-center`}>
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{title}</h4>
                      <p className="text-purple-600 font-medium mb-2">{issuer}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{date}</span>
                        </div>
                        <span>ID: {credentialId}</span>
                      </div>

                      <a
                        href={link}
                        className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                      >
                        <span>Verify Certificate</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Notable Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map(({ title, description, year }) => (
                <div
                  key={title}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{title}</h4>
                        <span className="text-sm font-medium text-purple-600 bg-white px-3 py-1 rounded-full">
                          {year}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;