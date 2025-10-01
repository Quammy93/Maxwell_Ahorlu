import React from 'react';
import { Code, Database, Palette, Smartphone, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "PostgreSQL", level: 78 },
        { name: "MongoDB", level: 72 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React Native", level: 82 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 65 },
        { name: "Android Development", level: 68 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Kubernetes", level: 65 },
        { name: "CI/CD", level: 72 }
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Team Leadership",
    "Project Management",
    "Creative Thinking",
    "Adaptability"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit of technical skills and soft skills that enable me to build exceptional digital experiences.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map(({ title, icon: Icon, color, skills }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                </div>

                <div className="space-y-4">
                  {skills.map(({ name, level }) => (
                    <div key={name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{name}</span>
                        <span className="text-gray-500 text-sm">{level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Soft Skills</h3>
              <p className="text-gray-600">Essential interpersonal and professional skills that complement my technical expertise.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <span className="text-gray-800 font-medium group-hover:text-purple-600 transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;