import './index.scss'
import React, { useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef(null)

  function sendEmail(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_iwfsuca',
        'template_20ckdtv',
        refForm.current,
        'Hp8EzMLZdlBKYp15h'
      )
      .then(function () {
        alert('SUCCESS!')
        window.location.reload()
      })
      .catch(function () {
        alert('FAILED!')
      })
  }

  useEffect(() => {
    const fuck = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(fuck)
  }, [])
  const position = [37.793954018948426, 140.49676126873388]
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray="Contact me"
              idx={15}
            ></AnimatedLetters>
          </h1>
          <p>
            We all got what I call a 'life trap', this gene deep certainty that
            thing will be different, that you will move to aonther city, and
            meet the people that will be the friends for the rest of your life,
            that you will fall in love and be fulfilled, fucking fulfillment,
            and closure, what ever the fuck those two, fucking empty jars to
            hold this shitstorm, and nothing is ever fulfilled, untill the very
            end, and closure, no! no no, nothing is ever over!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <input
                className="half"
                type="text"
                name="name"
                placeholder="Name"
                required
              />

              <input
                className="half"
                type="email"
                name="email"
                placeholder="Email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>

              <input type="submit" className="flat-button" value="SEND" />
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <MapContainer center={position} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
