export default function Footer() {
  return (
    <footer className="footer footer--minimal py-12 px-6 sm:px-12 bg-[#070808] border-t border-[#121215]" id="contact">
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#7C7C80]">
        <div className="footer-links flex items-center gap-8">
          <a
            href="https://www.linkedin.com/in/simonmetacci/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link text-[#8C8C90] hover:text-[#E9E9EB] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:simon@metacci.com"
            className="footer-link text-[#8C8C90] hover:text-[#E9E9EB] transition-colors"
          >
            Email
          </a>
        </div>

        <p className="copyright text-center sm:text-right">
          © 2026 <span className="brand font-medium text-[#B4B4B8]">Metacci Studios AB</span>
        </p>
      </div>
    </footer>
  );
}
