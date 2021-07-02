import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader/loader.js'
import Message from '../../components/Message/message.js'
import { Button, Form, Table, Row, Col } from 'react-bootstrap';
import { appConList } from '../../action/conferenceAction'
import Appbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Badge from 'react-bootstrap/Badge'

const conferenceDetails = () => {
      const dispatch = useDispatch()

      const appCon = useSelector((state) => state.appCon)
      const { loading, error, conferencedetails } = appCon

      useEffect(() => {
            dispatch(appConList())
      }, [dispatch])


      return (
            <>
                  <Appbar />

                  <Jumbotron>
                        {loading ? (<Loader />) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (

                              <Card className="text-center" >
                                    <Badge variant="dark"><h3>CONFERENCE DETAILS</h3></Badge>
                                    {conferencedetails.map((con) => (
                                          <tr key={con._id} >

                                                <Card.Header as="h3">{con.conname}</Card.Header>
                                                <Card.Body>
                                                      <Card.Title>About the Conference</Card.Title>
                                                      <Card.Text>
                                                            {con.description}
                                                      </Card.Text>
                                                      <Card.Text>
                                                            <h5>Organizer</h5>
                                                            {con.organizer}
                                                      </Card.Text>
                                                      <Card.Text>
                                                            <h5>Start Date</h5>
                                                            {con.startDate}
                                                      </Card.Text>
                                                      <Card.Text>
                                                            <h5>End Date</h5>
                                                            {con.endDate}
                                                      </Card.Text>
                                                </Card.Body>
                                                <Card.Footer className="text-muted"><h6>Phone Number: </h6>{con.phone}</Card.Footer>
                                          </tr>
                                    ))}
                              </Card>


                        )}
                  </Jumbotron>
                  <Footer />
            </>
      )

}

export default conferenceDetails