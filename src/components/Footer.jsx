import "./Footer.css";

const navLinksLeft = ["Work", "About", "Playground"];
const navLinksRight = ["Behance", "LinkedIn"];
const wordmark = ["M", "E", "G", "H", "A"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__nav footer__nav--left">
          <div className="footer__label">{`{ Navigate }`}</div>
          <ul>
            {navLinksLeft.map((link) => (
              <li key={link}>
                <a href="#" aria-label={link}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__nav footer__nav--right">
          <div className="footer__label">{`{ Find Me }`}</div>
          <ul>
            {navLinksRight.map((link) => (
              <li key={link}>
                <a href="#" aria-label={link}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__cta">
          <h2 className="footer__title">Let&apos;s talk</h2>
          <div className="footer__email-wrap">
            <span>or mail me at</span>
            <a href="mailto:megharana.social@gmail.com">megharana.social@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="footer__wordmark" aria-label="Megha brand wordmark">
        {wordmark.map((letter, index) => (
          <span key={letter + index} className="footer__letter" style={{ animationDelay: `${index * 0.12}s` }}>
            {letter}
          </span>
        ))}
      </div>

      <div className="footer__copyright">
        © 2026 Megha. All rights reserved.
      </div>
    </footer>
  );
}
