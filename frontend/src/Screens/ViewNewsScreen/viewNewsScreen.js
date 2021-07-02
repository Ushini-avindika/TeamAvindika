import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message/message'
import Loader from '../../components/Loader/loader'
import FromContainer from '../../components/FormContainer/formContainer.js'
import { getNewsDetails } from '../../action/newsAction'
import Appbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Jumbotron from 'react-bootstrap/Jumbotron'

const ViewNewsScreen = ({ match, history }) => {
      const nId = match.params.id

      const [name, setName] = useState('')
      const [date, setDate] = useState('')
      const [message, setMessage] = useState('')

      const dispatch = useDispatch()

      const getNews = useSelector((state) => state.getNews)
      const { loading, error, news } = getNews

      useEffect(() => {
            if (!news.name || news._id !== nId) {
                  dispatch(getNewsDetails(nId))
            } else {
                  setName(news.name)
                  setDate(news.date)
                  setMessage(news.message)
            }
      }, [dispatch, history, nId, news])

      return (
            <>
                  <Appbar />

                  <Jumbotron>

                        <Link to='/' className='btn btn-light my-3'>
                              Go Back
                        </Link>

                        {loading ? (
                              <Loader />
                        ) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <FromContainer>
                                    <Card className="text-center">
                                          <Badge variant="dark"><h3>{name}</h3></Badge>
                                          <Card.Body>
                                                <Card.Title>Message</Card.Title>
                                                <Card.Text>
                                                      {message}
                                                </Card.Text>
                                          </Card.Body>
                                          <Card.Footer className="text-muted">{date}</Card.Footer>
                                    </Card>
                              </FromContainer>
                        )}
                  </Jumbotron>

                  <Footer />

            </>
      )
}

export default ViewNewsScreen