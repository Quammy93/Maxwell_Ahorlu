import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Quammy The Developer
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-light">
                 Full Stack Web & Mobile Developer | Building innovative solutions that make an impact.
              </p>
              <p className="text-lg text-gray-500 mb-10 max-w-2xl">
                Passionate about creating innovative solutions and building exceptional digital experiences 
                that make a difference in people's lives.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
              <a
                href="#portfolio"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start mt-8 animate-fade-in-up animation-delay-600">
              <a
                href="https://github.com/Quammy93"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="in/maxwell-ahorlu-6833b41ab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="Quammy93@gmail.com"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-up animation-delay-300">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce">
                👋
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                💻
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;