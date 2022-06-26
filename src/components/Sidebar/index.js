import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/bk2.png'
import LogoSubtitle from '../../assets/images/bk_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="portfolio__navbar">
    <Link className="portfolio__navbar-logo" to="/">
      <img src={LogoS} alt="Logo" />
      <img src={LogoSubtitle} alt="Logo" className="sec-logo" />
    </Link>
    <nav className="portfolio__navbar-nav">
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4d"></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4d"></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d"></FontAwesomeIcon>
      </NavLink>
    </nav>

    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/besir-kurtishi-660bb6197/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d"></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/besirkurtishi_/"
        >
          <FontAwesomeIcon icon={faInstagram} color="#4d4d4d"></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/besirk"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4d"></FontAwesomeIcon>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
