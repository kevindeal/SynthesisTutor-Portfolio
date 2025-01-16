
export const Hero = () => {
  const hiringManager = 'Hiring Manager';
  const teamNeed = 'Frontend Developer role';
  const ctaUrl = '';
  const ctaText = 'Download CV';
  return (
    <div>
      <h1 className="hero-heading">
        Hi, {hiringManager},
      </h1>
      <p className="hero-subhead">
      I&apos;m Kevin Deal, Award winning Front-end Developer. I know I would be a great fit for {teamNeed}. I am up to the challenge. If you download my CV or checkout my work I think you will agree.
      </p>
      <a href={ctaUrl} aria-label={ctaText} className="hero-cta inline-block">
        <span
          className="hero-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors duration-300 inline-block"
        >
          {ctaText}
        </span>
      </a>
    </div>
  )
}