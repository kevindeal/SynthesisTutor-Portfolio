import { Card } from "./card";

export const ThreeCol = () => {
  const projects = [
    {
      id: 1,
      name: "Project One",
      description: "This is the first project.",
      link: "#",
      tags: ["React", "JavaScript"]
    },
    {
      id: 2,
      name: "Project Two",
      description: "This is the second project.",
      link: "#",
      tags: ["TypeScript", "Node.js"]
    },
    {
      id: 3,
      name: "Project Three",
      description: "This is the third project.",
      link: "#",
      tags: ["HTML", "CSS"]
    }
  ];


  return (
    <div>
      <h1 className="eyebrow">Project Grid</h1>
      <div className="project-grid pt-10 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            name={project.name}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div> 
    </div>
  )
}