import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/Message/message'
import Loader from '../../../components/Loader/loader'
import { getConferenceDetailsById, approveConference, declineConference } from '../../../action/adminAction.js'
import { ADMIN_APPROVED_RESET, ADMIN_DECLINE_RESET } from '../../../constants/adminConstants.js'
import Badge from 'react-bootstrap/Badge'
import FromContainer from '../../FormContainer/formContainer.js'



const ApproveScreen = ({ match }) => {
      const confId = match.params.id


      const dispatch = useDispatch()

      const cDetails = useSelector((state) => state.cDetails)
      const { conferencedetails, loading, error } = cDetails

      confApproved = useSelector((state) => state.confApproved)
      const { loading: loadingApprovel, success: successApprove } = confApproved

      confDecline = useSelector((state) => state.confDecline)
      const { loading: loadingDecline, success: successDecline } = confDecline



      useEffect(() => {

            if (conferencedetails || successApprove || successDecline) {
                  dispatch({ type: ADMIN_DECLINE_RESET })
                  dispatch({ type: ADMIN_APPROVED_RESET })
                  dispatch(getConferenceDetailsById(confId))
            }
      }, [dispatch, successApprove, successDecline])

      const approveHandler = () => {
            dispatch(approveConference(conferencedetails))
      }

      const declineHandler = () => {
            dispatch(declineConference(conferencedetails))
      }


      return loading ? (
            <Loader />
      ) : error ? (
            <Message variant='danger'>{error}</Message>
      ) : (
            <>
                  <Link to='/adminCon' className='btn btn-light my-3'>
                        Go Back
                  </Link>

                  <FromContainer>
                        <Badge variant="dark"><h1>Conference {conferencedetails.conname}</h1></Badge>

                        <Row>
                              <Col md={8}>
                                    <ListGroup variant='flush'>
                                          <ListGroup.Item>
                                                <p>
                                                      <strong>Name: </strong> {conferencedetails.conname}
                                                </p>

                                                <p>
                                                      <strong>Organizer:</strong>
                                                      {conferencedetails.organizer}
                                                </p>
                                                <p>
                                                      <strong>Description:</strong>
                                                      {conferencedetails.description}
                                                </p>
                                                <p>
                                                      <strong>Start Date:</strong>
                                                      {conferencedetails.startDate}
                                                </p>
                                                <p>
                                                      <strong>End Date:</strong>
                                                      {conferencedetails.endDate}
                                                </p>
                                                <p>
                                                      <strong>Venue:</strong>
                                                      {conferencedetails.venue}
                                                </p>
                                                {conferencedetails.isApproved ? (
                                                      <Message variant='success'>
                                                            Approved
                                                      </Message>
                                                ) : (
                                                      <Message variant='danger'>Not Approved</Message>
                                                )}
                                          </ListGroup.Item>


                                    </ListGroup>
                                    {!conferencedetails.isApproved && (
                                          <ListGroup.Item>
                                                <Button type='button' className='btn btn-block' onClick={approveHandler} variant="success">
                                                      Mark as Approved
                                                </Button>
                                          </ListGroup.Item>
                                    )}

                                    {conferencedetails.isApproved && (
                                          <ListGroup.Item>
                                                <Button type='button' className='btn btn-block' onClick={declineHandler} variant="danger">
                                                      Decline
                                                </Button>
                                          </ListGroup.Item>
                                    )}



                              </Col>
                        </Row>
                  </FromContainer>
            </>
      )
}

export default ApproveScreen