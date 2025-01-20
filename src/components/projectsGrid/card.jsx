
export const Card = ({ id, description, name, tags, link, backGround, image}) => {
  return (
    <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
      className="project-grid-card gradient-background rounded-2xl border-1 min-h-[350px] flex flex-col col-span-2"
      key={id}
      >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`block p-4 hover:shadow-lg transition-shadow duration-300 rounded-2xl ${backGround} h-full w-full flex flex-col justify-between`}
      >
        <div>
        <h2 className="text-2xl text-white md:text-5xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-white mb-4 leading-[1.4]">{description}</p>
        </div>
        <div>
        <div className="tags mb-4">
          {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded mr-2"
          >
            {tag}
          </span>
          ))}
        </div>
        <picture className="w-full md:block md:h-[200px]">
          <source
          type="image/webp"
          media="(max-width:600px)"
          srcSet={`${image}?w=300 300w, ${image}?w=600 600w`}
          sizes="(max-width: 600px) 300px, 600px"
          />
          <source
          type="image/jpeg"
          media="(max-width:600px)"
          srcSet={`${image}?w=300 300w, ${image}?w=600 600w`}
          sizes="(max-width: 600px) 300px, 600px"
          />
          <img
          loading="eager"
          decoding="async"
          src={`${image}?w=600`}
          alt="heroimg"
          id="heroimg"
          className="border-2 border-white rounded-[20px] w-full md:h-full object-cover"
          />
        </picture>
        </div>
      </a>
      </div>
    </div>
    )
}