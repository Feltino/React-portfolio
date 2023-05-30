import { Row, Container, Col } from 'react-bootstrap'
import { MailchimpForm } from './MailchimpForm'
import logo from '../assets/img/logo.svg'
import NavIcon1 from '../assets/img/nav-icon1.svg'
import NavIcon2 from '../assets/img/nav-icon2.svg'
import NavIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://google.com">
                <img src={NavIcon1} alt="lincedin" />
              </a>
              <a href="https://google.com">
                <img src={NavIcon2} alt="facebook" />
              </a>
              <a href="https://google.com">
                <img src={NavIcon3} alt="instagram" />
              </a>
            </div>
            <p>CopyRight 2023. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
