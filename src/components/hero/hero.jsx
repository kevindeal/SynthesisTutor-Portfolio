
export const Hero = () => {
  const hiringManager = 'Clint Fix';
  const teamNeed = 'Frontend Developer role';
  const ctaUrl = 'src/components/hero/assets/KdforSynthesis.png';
  const ctaText = 'Download CV';

  return (
    <section aria-label="hero" className="md:flex md:flex-row py-20">
      <div className="hero-content md:w-[48%] px-8 md:mt-10">
        <h1 className="hero-heading text-4xl md:text-[58px] tracking-wider font-bold text-white leading-[1.1] text-center md:text-left py-10" aria-label="heading">
          Hi, {hiringManager}, <br className="md:hidden"></br><span className="bg-[#6f66ff]">Hire me!</span>
        </h1>
        <picture className="mobile-img md:hidden w-full h-[300px] md:h-[600px]">
          <source
            type="image/webp"
            media="(max-width:600px)"
            srcSet="src/components/hero/assets/kevinNnoa.webp"
          />
          <img loading="eager" decoding="async" src="src/components/hero/assets/kevinNnoa.webp" alt="heroimg" id="heroimg" className="border-2 border-white rounded-[20px] w-full h-full object-cover aspect-square" />
        </picture>
        <p className="hero-subhead mt-5 md:m-0 mb-6 md:mb-6 md:py-[20px] text-lg md:text-2xl text-center md:text-left text-[#bfceff] font-normal" aria-label="subheading">
          I&apos;m Kevin Deal, Award winning Front-end Developer. I know I would be a great fit for {teamNeed}. I am up to the challenge. If you download my CV or checkout my work I think you will agree.
        </p>
        <a href={ctaUrl} aria-label={ctaText} className="hero-cta w-full flex md:inline-block text-center md:text-left py-[20px]" download>
          <span
            className="hero-button w-full md:w-auto gap-2 text-[#020718] bg-[#ffd000] bg-gradient-to-r from-[#fcd544] to-[#fa9a3d] border-none rounded-[15px] h-[55px] py-3 px-[30px] pr-[23px] text-[18.2px] font-semibold 
            hover:bg-gradient-to-r hover:from-[#ffe066] hover:to-[#fdbb42] transition-all duration-80"
          >
            {ctaText}
          </span>
        </a>
      </div>
      <div className="md:w-1/2 flex">
        <picture className="w-full hidden md:block h-[600px]">
          <source
            type="image/webp"
            media="(max-width:600px)"
            srcSet="src/components/hero/assets/kevinNnoa.webp"
          />
          <img loading="eager" decoding="async" src="src/components/hero/assets/kevinNnoa.webp" alt="heroimg" id="heroimg" className="border-2 border-white rounded-[20px] w-full h-full object-cover" />
        </picture>
      </div>
    </section>
  )
}