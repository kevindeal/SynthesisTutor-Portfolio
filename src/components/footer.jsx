
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative footer-overlay-component">
      <div className="footer-line"></div>
      <div className="footer-content text-center py-6">
        <p className="date">Hire Kevin Deal Frontend Software Engineer {currentYear}</p>
      </div>
    </footer>
  )
}