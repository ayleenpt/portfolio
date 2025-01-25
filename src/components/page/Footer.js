import '../../styles/page/Footer.css';

function Footer({ customStyle }) {
  return (
    <div className="footer" style={customStyle}>
      <a
        className="footer-link"
        href="https://www.linkedin.com/in/ayleenpt/"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin.com/in/ayleenpt
      </a>
      <div className="footer-divider">&nbsp;&bull;&nbsp;</div>
      <a
        className="footer-link"
        href="mailto:ayleenpiteotarpy@gmail.com"
      >
        ayleenpiteotarpy@gmail.com
      </a>
    </div>
  );
}

export default Footer;
