import { Card } from "./card";

export const ThreeCol = () => {
  const projects = [
    {
      id: 1,
      name: "Upitt Admissons",
      description: "Created reusable components and iterated in Qa on an award winning design system using Vue.js. Showcasing my ability to pick up new tooling and create custom interactive widgets and scalable solutions that drive efficiency and elevate user experiences.",
      link: "https://admissions.pitt.edu/",
      tags: ["Vue.js", "JavaScript","Storybook"],
      backGround: "bg-yellow",
      image: "/assets/upitt.webp"
    },
    {
      id: 2,
      name: "Police Legal Sciences",
      description: "Designed and built custom template parts for an LMS dashboard in php using grid.js, javascript, php and styled with TailwindCSS. Creating courses for over 10k adult users, similarly to how you all do at Synthesis.",
      link: "https://github.com/kevindeal/pls/blob/main/PLS-WP/template-parts/blocks/clientProfile/courseDetail.php",
      tags: ["Grid.js", "PHP", "TailwindCss"],
      backGround: "bg-grayscale",
      image: "/assets/pls.webp"
    },
    {
      id: 3,
      name: "Treasure Data",
      description: "A deep dive into React based gutenberg blocks in wordpress. Built a highly customizable hero component in ReactJS and styled with tailwindCss. Again picking up new tooling and delivering in a fast pased environment as described in the role description there at Synthesis.",
      link: "https://github.com/kevindeal/TD-react-gutenberg/blob/main/wp-content/themes/td2024/blocks/src/hero/save.js",
      tags: ["React", "Wordpress", "ACF"],
      backGround: "bg-purple",
      image: "/assets/td.webp"
    }
  ];


  return (
    <section className="project-grid py-20">
      <h1 className="eyebrow section-head small-header grade font-bold text-[2rem] md:text-5xl text-center mb-6">Checkout my most proud work</h1>
      <h2 className="project-header text-[#b7d0ff] mt-[10px] text-xl text-center leading-[1.4]">
        With almost a decade of experience in digital, I have exceled at connecting users with products and brands through innovative and impactful solutions.
      </h2>
      <div className="project-grid pt-10 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            tags={project.tags}
            link={project.link}
            backGround={project.backGround}
            image={project.image}
          />
        ))}
      </div> 
    </section>
  )
}