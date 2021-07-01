import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import './registerscreen.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import { register } from '../../action/userAction.js'
import Message from '../../components/Message/message.js'
import Loader from '../../components/Loader/loader.js'
import axios from 'axios'

const registerScreen = ({ location, history }) => {

      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [confirmPassword, setConfirmPassword] = useState('')
      const [isReasearcher, setisReasearcher] = useState(false)
      const [isWorkPresnter, setisWorkPresnter] = useState(false)
      const [isAtendee, setisAtendee] = useState(false)
      const [message, setMessage] = useState(null)
      const [insertDoc, setInsertDoc] = useState('')
      const [uploading, setUploading] = useState(false)


      const dispatch = useDispatch()

      const userRegister = useSelector(state => state.userLogin)
      const { loading, error, userInfo } = userRegister

      const redirect = location.search ? location.search.split('=')[1] : '/'


      useEffect(() => {
            if (userInfo) {
                  history.push(redirect)
            }

      }, [history, userInfo, redirect])

      const submitHandler = (e) => {
            e.preventDefault()
            if (password !== confirmPassword) {
                  setMessage('Password do not match')
            }
            else {
                  dispatch(register(name, email, password, isReasearcher, isWorkPresnter, isAtendee, insertDoc))
            }
      }

      const uploadFileHandler = async (e) => {
            const file = e.target.files[0]
            const formData = new FormData()
            formData.append('document', file)
            setUploading(true)

            try {
                  const config = {
                        headers: {
                              'Content-Type': 'multipart/form-data'
                        }
                  }
                  const { data } = await axios.post('http://localhost:8040/api/uploads/document', formData, config)
                  setInsertDoc(data)
                  setUploading(false)
            } catch (error) {
                  console.error(error)
                  setUploading(false)
            }
      }


      return (
            <>
                  <Navbar />

                  <div className='wrapper'>
                        <div className='nm'>
                              {error && <Message variant='danger'>{message}</Message>}
                              {error && <Message variant='danger'>{error}</Message>}
                              {loading && <Loader />}
                        </div>
                        <div className='content'>

                              <Form onSubmit={submitHandler}>
                                    <h3 align='center'>Register</h3>

                                    <Form.Group controlId='name'>
                                          <div className="form-group bn">
                                                <Form.Label>User Name</Form.Label>
                                                <Form.Control type='text' className="form-control" placeholder='Enter Name'
                                                      value={name}
                                                      onChange={(e) => setName(e.target.value)}
                                                ></Form.Control>
                                          </div>
                                    </Form.Group>

                                    <Form.Group controlId='radioList'>
                                          <div className="form-group bn">
                                                <Form.Label>User Type</Form.Label>
                                                <div>
                                                      <input type="radio" value="true" name="isReasearcher" onChange={(e) => setisReasearcher(e.target.value)} /> researcher
                                                      <input type="radio" value="true" name="isWorkPresnter" onChange={(e) => setisWorkPresnter(e.target.value)} /> Workshop Presenter
                                                      <input type="radio" value="true" name="isAtendee" onChange={(e) => setisAtendee(e.target.value)} /> Atendee
                                                </div>
                                          </div>
                                    </Form.Group>

                                    <Form.Group controlId='radio'>
                                          <div className="form-group bn">
                                                <Form.Label>Researcher</Form.Label>
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

                                    <Form.Group controlId='confirmPassword'>
                                          <div className="form-group bn">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control type='password' className="form-control" placeholder='Enter password'
                                                      value={confirmPassword}
                                                      onChange={(e) => setConfirmPassword(e.target.value)}
                                                ></Form.Control>
                                          </div>
                                    </Form.Group>

                                    <Form.Group controlId='image'>
                                          <div className="form-group bn">
                                                <Form.Label>Upload Document</Form.Label>
                                                <Form.Control type='text' className="form-control" placeholder='Enter Document URL'
                                                      value={insertDoc}
                                                      onChange={(e) => setInsertDoc(e.target.value)}
                                                ></Form.Control>
                                          </div>
                                          <Form.File id="file" label='Choose File' custom onChange={uploadFileHandler}></Form.File>
                                          {uploading && <Loader />}
                                    </Form.Group>

                                    <Row>
                                          <Col>
                                                Have An Account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
                                          </Col>
                                    </Row>


                                    <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
                                    <p className="forgot-password text-right">
                                          Forgot <a href="#">password?</a>
                                    </p>
                              </Form>
                        </div>

                  </div>


                  <Footer />

            </>

      )
}

export default registerScreen