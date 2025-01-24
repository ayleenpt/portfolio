import '../../styles/page/Footer.css';

function Footer() {
  return (
    <div className={"footer"}>
      <a
        className="footer-link"
        href="https://www.linkedin.com/in/ayleenpt/"
        target="_blank"
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