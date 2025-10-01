import React from 'react';
import { Code2, Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate developer with a strong foundation in modern web technologies and a drive to create impactful solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a dedicated aspiring software engineer with a passion for creating innovative web and mobile applications. 
                With a strong foundation in computer science principles and hands-on experience with modern development frameworks, 
                I'm excited to contribute to meaningful projects that make a difference.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey in technology began with curiosity and has evolved into a deep commitment to continuous learning 
                and problem-solving. I believe in writing clean, efficient code and creating user experiences that are both 
                functional and delightful.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, I enjoy staying up-to-date with the latest tech trends, contributing to open-source projects, 
                and collaborating with other developers to build amazing things together.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail-Oriented'].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Code2,
                  title: "Clean Code",
                  description: "Writing maintainable and scalable code following best practices"
                },
                {
                  icon: Target,
                  title: "Goal-Oriented",
                  description: "Focused on delivering results and meeting project objectives"
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "Always looking for creative solutions to complex problems"
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "Strong team player with excellent communication skills"
                }
              ].map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;