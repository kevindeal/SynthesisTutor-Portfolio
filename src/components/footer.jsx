
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative footer-overlay-component overflow-hidden">
      <div className="footer-line"></div>
      <div className="footer-content text-center py-6">
        <p className="date opacity-[.5] text-lg text-[#fff]">Hire Kevin Deal Frontend Software Engineer {currentYear}</p>
      </div>
    </footer>
  )
}