import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/lgg.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['e', 's', 'i', 'r', ' ', 'K', '.']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
      return setTimeout(() => {
          setletterClass('text-animate-hover')
      },4000)
  },[])
  return (
    <div className="container homepage">
      <div className="text-zone">
        <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _10`}>i</span>
            <span className={`${letterClass} _11`}>,</span>

            <br /> 
            <span className={`${letterClass} _12`}>I</span>
            <span className={`${letterClass} _13`}>'</span>
            <span className={`${letterClass} _14`}>m</span>
            <img src={LogoTitle} alt="firstLogo" />
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={nameArray}
                index={15}
                />
            <br />
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={jobArray}
                index={22}
                />
        </h1>
        <h2>Frontend Developer / Javascript / ReactJs </h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
