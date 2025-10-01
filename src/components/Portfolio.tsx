import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, ShoppingCart, Users } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      icon: ShoppingCart,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization and reporting.",
      image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Next.js", "TypeScript", "Chart.js", "Prisma"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      icon: Users,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
      image: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      icon: Smartphone,
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React", "Tailwind", "Framer Motion", "Vite"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      icon: Globe,
      gradient: "from-orange-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web technologies and user-centered design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(({ title, description, image, technologies, githubUrl, liveUrl, icon: Icon, gradient }) => (
              <div
                key={title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={githubUrl}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                      <span className="font-medium">Code</span>
                    </a>
                    <a
                      href={liveUrl}
                      className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;