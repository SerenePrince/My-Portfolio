import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contacts() {
  return (
    <div className="contacts-container" id="contacts">
      <h1>Contacts</h1>
      <p>
        Feel free to hit me up! I&apos;m currently exploring job opportunities
        and I hope my work has impressed you. Let&apos;s connect!
      </p>

      <div className="social-links">
        <a
          href="https://github.com/SerenePrince"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub size={40} />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/nparknguyen/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin size={40} />
          <span>LinkedIn</span>
        </a>

        <a href="mailto:noahparknguyen@gmail.com" className="social-link">
          <FaEnvelope size={40} />
          <span>Email</span>
        </a>
      </div>

      <p className="thank-you">
        Thanks for checking out my work. I look forward to hearing from you!
      </p>
    </div>
  );
}

export default Contacts;
