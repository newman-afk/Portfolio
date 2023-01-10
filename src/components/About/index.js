import './index.scss'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

function About() {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const kim = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(kim)
  })
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray="About me"
              idx={15}
            ></AnimatedLetters>
          </h1>
          <p>I'm so fucking important right? Fuck you!</p>
          <p>
            We all got what I call a 'life trap', this gene deep certainty that
            thing will be different, that you will move to aonther city, and
            meet the people that will be the friends for the rest of your life,
            that you will fall in love and be fulfilled, fucking fulfillment,
            and closure, what ever the fuck those two, fucking empty jars to
            hold this shitstorm, and nothing is ever fulfilled, untill the very
            end, and closure, no! no no, nothing is ever over!
          </p>
          <p>
            The body is one member but many, now are they many but, of one body.
            <br />
            What's that mean though?
            <br />I was just trying to stay a part of the body now.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon
                icon={faAngular}
                color="#dd0031"
              ></FontAwesomeIcon>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529"></FontAwesomeIcon>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9"></FontAwesomeIcon>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4"></FontAwesomeIcon>
            </div>
            <div className="face5">
              <FontAwesomeIcon
                icon={faJsSquare}
                color="#efd81d"
              ></FontAwesomeIcon>
            </div>
            <div className="face6">
              <FontAwesomeIcon
                icon={faGitAlt}
                color="#ecfd28"
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
