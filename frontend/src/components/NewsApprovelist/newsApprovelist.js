import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/loader.js'
import Message from '../Message/message.js'
import { listAppNews } from '../../action/newsAction'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import FromContainer from '../../components/FormContainer/formContainer.js'
import Jumbotron from 'react-bootstrap/Jumbotron'

export const newsList = () => {
      const dispatch = useDispatch()


      const appNewList = useSelector(state => state.appNewList)
      const { loading, error, news } = appNewList



      useEffect(() => {

            dispatch(listAppNews())

      }, [dispatch])

      return (
            <>
                  <Jumbotron>
                        <FromContainer>

                              {loading ? (<Loader />) : error ? (
                                    <Message variant='danger'>{error}</Message>
                              ) : (

                                    <Card className="text-center" >

                                          <Badge variant="dark"><h3 >CONFERENCE NEWS</h3></Badge>
                                          {news.map((newA) => (
                                                <tr key={newA._id} >
                                                      <Card.Title >{newA.name}</Card.Title>
                                                      <Card.Body>
                                                            <Card.Text>
                                                                  {newA.date}
                                                            </Card.Text>
                                                            <Link to={`/view/${newA._id}`}>
                                                                  <Button variant="secondary">View News</Button>
                                                            </Link>
                                                      </Card.Body>


                                                </tr>
                                          ))}

                                    </Card>
                              )
                              }
                        </FromContainer>
                  </Jumbotron>
            </>
      )
}

export default newsList