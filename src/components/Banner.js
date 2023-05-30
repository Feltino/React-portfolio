import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import TrackVisibility from 'react-on-screen'
import 'animate.css'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Shopify Expert', 'Web Developer', 'Frontender']
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [text, setText] = useState('')
  const period = 2000

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updateText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updateText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm webdecoded `}
                    <br />
                    <span className="wrap">{text}</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <button onClick={() => console.log('connect')}>
                      Let's connect <ArrowRightCircle size={25} />
                    </button>
                  </h1>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
