import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './loginscreen.css'
import Navbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import { login } from '../../action/userAction.js'
import Message from '../../components/Message/message.js'
import Loader from '../../components/Loader/loader.js'


const Loginscreen = ({ location, history }) => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const dispatch = useDispatch()

      const userLogin = useSelector(state => state.userLogin)
      const { loading, error, userInfo } = userLogin

      const redirect = location.search ? location.search.split('=')[1] : '/'


      useEffect(() => {
            if (userInfo) {
                  history.push(redirect)
            }

      }, [history, userInfo, redirect])

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(login(email, password))
      }

      return (
            <>
                  <Navbar />

                  <div className='wrapper'>
                        <div className='nm'>
                              {error && <Message variant='danger'>{error}</Message>}
                              {loading && <Loader />}
                        </div>
                        <div className='content'>

                              <Form onSubmit={submitHandler}>
                                    <h3 align='center'>Sign In</h3>

                                    <Form.Group controlId='email'>
                                          <div className="form-group bn">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type='email' className="form-control" placeholder='Enter email'
                                                      value={email}
                                                      onChange={(e) => setEmail(e.target.value)}
                                                ></Form.Control>
                                          </div>
                                    </Form.Group>

                                    <Form.Group controlId='password'>
                                          <div className="form-group bn">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type='password' className="form-control" placeholder='Enter password'
                                                      value={password}
                                                      onChange={(e) => setPassword(e.target.value)}
                                                ></Form.Control>
                                          </div>
                                    </Form.Group>

                                    <Row>
                                          <Col>
                                                New User? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register Now</Link>
                                          </Col>
                                    </Row>


                                    <Button type="submit" className="btn btn-primary btn-block">Submit</Button>

                              </Form>
                        </div>

                  </div>


                  <Footer />
            </>


      )


}

export default Loginscreen