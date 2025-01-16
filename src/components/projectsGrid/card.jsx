
export const Card = ({ id, description, name, tags, link }) => {
  return (
    <a
      key={id}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border p-4 rounded hover:shadow-lg transition-shadow duration-300"
    >
        <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}