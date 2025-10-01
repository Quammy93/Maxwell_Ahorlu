"use client";

import React from 'react';
import { Download, Eye, FileText, Award, Clock, MapPin } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume file in public folder
    link.download = 'John_Doe_Resume.pdf'; // Downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    // Open resume in new tab for preview
    window.open('/resume.pdf', '_blank');
  };

  const resumeHighlights = [
    {
      icon: Award,
      title: "Professional Experience",
      description: "Detailed work history and achievements"
    },
    {
      icon: FileText,
      title: "Technical Skills",
      description: "Comprehensive list of technologies and tools"
    },
    {
      icon: Award,
      title: "Education & Certifications",
      description: "Academic background and professional certifications"
    }
  ];

  const quickFacts = [
    { label: "Experience Level", value: "Entry Level", icon: Clock },
    { label: "Location", value: "New York, NY", icon: MapPin },
    { label: "Availability", value: "Immediate", icon: Clock }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resume & CV
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Download my comprehensive resume to learn more about my experience, skills, and qualifications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Resume Preview Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Resume</h3>
                  <p className="text-gray-600">Complete overview of my professional journey</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={handleDownload}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
                  <button
                    onClick={handlePreview}
                    className="flex-1 border-2 border-purple-500 text-purple-500 px-6 py-4 rounded-xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-5 h-5" />
                    <span>Preview</span>
                  </button>
                </div>

                {/* Quick Facts */}
                <div className="space-y-3">
                  {quickFacts.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-purple-500" />
                        <span className="text-gray-700 font-medium">{label}</span>
                      </div>
                      <span className="text-gray-900 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-xl">📄</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-lg">✨</span>
              </div>
            </div>

            {/* Resume Highlights */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Inside My Resume</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  My resume provides a comprehensive overview of my professional journey, technical expertise, 
                  and achievements. It's designed to give employers all the information they need to evaluate 
                  my qualifications for their opportunities.
                </p>
              </div>

              <div className="space-y-4">
                {resumeHighlights.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
                      <p className="text-gray-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Why Download My Resume?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Detailed project descriptions and outcomes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Complete technical skills inventory</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Professional references and recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Contact information and availability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;