import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message/message'
import Loader from '../../components/Loader/loader'
import FromContainer from '../../components/FormContainer/formContainer.js'
import { getConferenceDetails, updateConDetails } from '../../action/conferenceAction'
import { CONFERENCE_DETAILS_UPDATE_RESET } from '../../constants/conferenceConstants'

const ConferenceDetailsUpdate = ({ match, history }) => {
      const conId = match.params.id

      const [conname, setConname] = useState('')
      const [description, setDescription] = useState('')
      const [organizer, setOrganizer] = useState('')
      const [phone, setPhone] = useState('')
      const [email, setEmail] = useState('')
      const [startDate, setStartDate] = useState('')
      const [endDate, setEndDate] = useState('')
      const [venue, setVenue] = useState('')
      const [isApproved, setIsApproved] = useState('false')

      const dispatch = useDispatch()

      const ConsDetails = useSelector((state) => state.ConsDetails)
      const { loading, error, conferencedetails } = ConsDetails

      const updateCon = useSelector((state) => state.updateCon)
      const {
            loading: loadingUpdate,
            error: errorUpdate,
            success: successUpdate,
      } = updateCon


      useEffect(() => {
            if (successUpdate) {
                  dispatch({ type: CONFERENCE_DETAILS_UPDATE_RESET })
                  history.push('/editor')
            } else {
                  if (!conferencedetails.conname || conferencedetails._id !== conId) {
                        dispatch(getConferenceDetails(conId))
                  } else {
                        setConname(conferencedetails.conname)
                        setDescription(conferencedetails.description)
                        setOrganizer(conferencedetails.organizer)
                        setPhone(conferencedetails.phone)
                        setEmail(conferencedetails.email)
                        setStartDate(conferencedetails.startDate)
                        setEndDate(conferencedetails.endDate)
                        setVenue(conferencedetails.venue)
                        setIsApproved(conferencedetails.isApproved)
                  }
            }
      }, [dispatch, history, conId, conferencedetails, successUpdate])

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(updateConDetails({ _id: conId, conname, description, organizer, phone, email, startDate, endDate, venue, isApproved }))
      }

      return (
            <>

                  <Link to='/editor' className='btn btn-light my-3'>
                        Go Back
                  </Link>
                  <FromContainer>
                        <h1>Edit Conference Details</h1>
                        {loadingUpdate && <Loader />}
                        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                        {loading ? (
                              <Loader />
                        ) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <Form onSubmit={submitHandler}>
                                    <Form.Group controlId='conname'>
                                          <Form.Label>Conference Name</Form.Label>
                                          <Form.Control
                                                type='conname'
                                                palceholder='Enter Conference Name'
                                                value={conname}
                                                onChange={(e) => setConname(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='description'>
                                          <Form.Label>Description</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter description'
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='organizer'>
                                          <Form.Label>organizer</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter organizer'
                                                value={organizer}
                                                onChange={(e) => setOrganizer(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='phone'>
                                          <Form.Label>phone</Form.Label>
                                          <Form.Control
                                                type='number'
                                                placeholder='Enter phone'
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='email'>
                                          <Form.Label>email</Form.Label>
                                          <Form.Control
                                                type='email'
                                                placeholder='Enter email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='startDate'>
                                          <Form.Label>startDate</Form.Label>
                                          <Form.Control
                                                type='date'
                                                placeholder='Enter startDate'
                                                value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='endDate'>
                                          <Form.Label>endDate</Form.Label>
                                          <Form.Control
                                                type='date'
                                                placeholder='Enter endDate'
                                                value={endDate}
                                                onChange={(e) => setEndDate(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='venue'>
                                          <Form.Label>venue</Form.Label>
                                          <Form.Control
                                                type='text'
                                                placeholder='Enter venue'
                                                value={venue}
                                                onChange={(e) => setVenue(e.target.value)}
                                          ></Form.Control>
                                    </Form.Group>
                                    {/* <input type="hidden" value='false' onChange={(e) => setIsApproved(e.target.value)}></input> */}

                                    <Button type='submit' variant='primary'>
                                          Update
                                    </Button>
                              </Form>
                        )}
                  </FromContainer>


            </>
      )

}

export default ConferenceDetailsUpdate