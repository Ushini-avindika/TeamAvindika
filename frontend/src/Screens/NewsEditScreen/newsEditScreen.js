import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message/message'
import Loader from '../../components/Loader/loader'
import FromContainer from '../../components/FormContainer/formContainer.js'
import { getNewsDetails, updateNews } from '../../action/newsAction'
import { NEWS_UPDATE_RESET } from '../../constants/newsConstants'

const NewsDetailsUpdate = ({ match, history }) => {

      const nId = match.params.id

      const [name, setName] = useState('')
      const [date, setDate] = useState('')
      const [message, setMessage] = useState('')
      const [isApproved, setIsApproved] = useState('false')

      const dispatch = useDispatch()

      const getNews = useSelector((state) => state.getNews)
      const { loading, error, news } = getNews

      const newsUpdate = useSelector((state) => state.newsUpdate)
      const {
            loading: loadingUpdate,
            error: errorUpdate,
            success: successUpdate,
      } = newsUpdate

      useEffect(() => {

            if (successUpdate) {
                  dispatch({ type: NEWS_UPDATE_RESET })
                  history.push('/newslist')
            } else {
                  if (!news.name || news._id !== nId) {
                        dispatch(getNewsDetails(nId))
                  } else {
                        setName(news.name)
                        setDate(news.date)
                        setMessage(news.message)
                        setIsApproved(news.isApproved)
                  }
            }


      }, [dispatch, history, nId, news, successUpdate])

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(updateNews({ _id: nId, name, date, message, isApproved }))
      }


      return (
            <>

                  <Link to='/newslist' className='btn btn-light my-3'>
                        Go Back
                  </Link>
                  <FromContainer>
                        <h1>Edit News Details</h1>
                        {loadingUpdate && <Loader />}
                        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                        {loading ? (
                              <Loader />
                        ) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <Form onSubmit={submitHandler}>
                                    <Form.Group controlId='name'>
                                          <Form.Label>Name</Form.Label>
                                          <Form.Control
                                                type='name'
                                                placeholder='Enter Name'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='date'>
                                          <Form.Label>Date</Form.Label>
                                          <Form.Control
                                                type='date'
                                                palceholder='Enter Date'
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='message'>
                                          <Form.Label>Message</Form.Label>
                                          <Form.Control
                                                type='text-box'
                                                placeholder='Enter message'
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>
                                    {/* <input type="hidden" value='false' onChange={(e) => setIsApproved(e.target.value)}></input> */}

                                    {/* <Form.Group controlId='isApproved'>
                                          <Form.Label>Isaporoved</Form.Label>
                                          <Form.Control
                                                type='text'
                                                value='false'
                                                onChange={(e) => setIsApproved(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group> */}


                                    <Button type='submit' variant='primary'>
                                          Update
                                    </Button>
                              </Form>
                        )}
                  </FromContainer>


            </>
      )



}

export default NewsDetailsUpdate