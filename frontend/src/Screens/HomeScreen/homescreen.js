import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Appbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import Showcase from '../../components/Showcase/showcase.js'
import { Row, Container, Col } from 'react-bootstrap';
import NewsList from '../../components/NewsApprovelist/newsApprovelist.js'
import { Link } from "react-router-dom";
import './homescreen.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'

const homeScreen = () => {

      return (
            <>
                  <div className="man">
                        <Appbar />
                        <Showcase />
                        <NewsList />
                        <Jumbotron>
                              <center><Badge variant="dark"><h3>KEYNOTE SPEAKERS</h3></Badge></center>
                              <br></br>
                              <br></br>
                              <Container>

                                    <Row>
                                          <Col xs={6} md={3}>
                                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPRVncWuJ4qC-7HFsPj0aYIE8EP1xfGawzw&usqp=CAU" roundedCircle />
                                                <br></br>
                                                <h3 align='center'> Shivvy Jervis</h3>

                                                <p>Discovers, tests and then presents the most powerful breakthroughs at the intersection of digital, science and human psychology.</p>
                                          </Col>
                                          <Col xs={6} md={3}>
                                                <Image src="data:image/jpeg;base64,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" roundedCircle />
                                                <br></br>
                                                <h3 align='center'> ANTON SAZHIN</h3>

                                                <p>CEO and Founder
                                                      The Cloud-Based LMS-Platform CORE
                                                      Russia</p>
                                          </Col>
                                          <Col xs={6} md={3}>
                                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tO39ZRxM6Ug9sRy4I6W5upLpWDP2XKadoA&usqp=CAU" roundedCircle />
                                                <h3 align='center'> Dr. Brynn</h3>

                                                <p>Business-Brain Expert &
                                                      Professional Keynote Speaker</p>
                                          </Col>
                                          <Col xs={6} md={3}>
                                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArCwFlLc5MTWCPbP3JajZBpgLcWRhzNfacw&usqp=CAU" roundedCircle />
                                                <br></br>
                                                <h3 align='center'>Alex Hunter</h3>

                                                <p>Digital branding expert Alex Hunter certainly understands the power of branding. His quirky charm and a focus on travel to enrich his keynote speeches.</p>
                                          </Col>
                                    </Row>
                              </Container>
                        </Jumbotron>
                        <Footer />

                  </div>
            </>
      )
}

export default homeScreen