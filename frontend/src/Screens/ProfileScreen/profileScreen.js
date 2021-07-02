import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import Message from '../../components/Message/message.js'
import Loader from '../../components/Loader/loader.js'
import { getUserDetails, updateUserProfile } from '../../action/userAction.js'

const profileScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetailsReducer = useSelector(state => state.userDetailsReducer)
    const { loading, error, user } = userDetailsReducer

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfileReducer = useSelector(state => state.userUpdateProfileReducer)
    const { success } = userUpdateProfileReducer



    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }

    }, [dispatch, history, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Password do not match')
        }
        else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }




    return (
        <>
            <Navbar />

            <div className='wrapper'>
                <div className='nm'>
                    {error && <Message variant='danger'>{message}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}
                    {success && <Message variant='success'>Profile Updated</Message>}
                    {loading && <Loader />}
                </div>
                <div className='content'>

                    <Form onSubmit={submitHandler}>
                        <h3 align='center'>Profile</h3>

                        <Form.Group controlId='name'>
                            <div className="form-group bn">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type='text' className="form-control" placeholder='Enter Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </div>
                        </Form.Group>


                        <Form.Group controlId='radio'>
                            <div className="form-group bn">
                                <Form.Label>Email</Form.Label>
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


                        <Button type="submit" className="btn btn-primary btn-block">Update</Button>

                    </Form>
                </div>

            </div>

            <Footer />

        </>

    )
}

export default profileScreen