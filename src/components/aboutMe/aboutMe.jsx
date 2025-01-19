import { Github, Linkedin, Download } from "lucide-react";
import { SkillBar } from "../skillBar/skillBar";
import avatar from '/assets/avatar.gif'

export const AboutMe = () => {
  const skills = [
    { name: "Call of Duty", level: 85 },
    { name: "Fatherhood", level: 90 },
    { name: "Gardening", level: 40 },
    { name: "Pickup Basketball", level: 80 },
  ];
  return (
    <section className="min-h-screen pt-10 pb-20 sm:px-6 lg:px-8 relative">
      <div className="border border-dashed rounded-[40px] p-6">
        {/* <div className="overlay-component"></div> */}
        <div className="heading-container text-center pt-[50px] mb-[10px]">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#625ded]">
            Beyond the code.
          </h1>
          <p className="text-4xl lg:text-5xl max-w-[550px] mx-auto text-white mb-8 font-bold">
            Passions that keep me inspired.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 items-center">
            {/* Image Column */}
          <div className="flex justify-left lg:col-span-1 absolute top-0 left-0">
            <div className="relative w-32 h-32 lg:w-40 lg:h-40">
              <div className="absolute inset-0 bg-primary rounded-full opacity-10 animate-pulse" />
              <img
                src={avatar}
                alt="Kevin's profile"
                className="rounded-full w-full h-full object-cover shadow-lg transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          {/* Content Column */}
          <div className="lg:col-span-6 max-w-[900px] mx-auto pb-[50px]">
            {/* Skills */}
            <div className="mb-8">
              {skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.level}
                />
              ))}
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-purple text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#0077B5] text-white hover:text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};