import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/Message/message'
import Loader from '../../../components/Loader/loader'
import {getResearcherById, approveReserach, declineReserch} from '../../../action/reviwerAction.js'
import { REVIWER_APPROVE_RESERCH_RESET, REVIWER_DECLINE_RESERCH_RESET } from '../../../constants/reviwerConstants.js'


const researcherApproveScreen = ({ match }) => {
      const resId = match.params.id


      const dispatch = useDispatch()

      const resDetails = useSelector((state) => state.resDetails)
      const { reserchers, loading, error } = resDetails

      resApproved = useSelector((state) => state.resApproved)
      const { loading: loadingApprovel, success: successApprove } = resApproved

      resDecline = useSelector((state) => state.resDecline)
      const { loading: loadingDecline, success: successDecline } = resDecline




      useEffect(() => {

            if (reserchers || successApprove || successDecline) {
                  dispatch({ type: REVIWER_DECLINE_RESERCH_RESET })
                  dispatch({ type: REVIWER_APPROVE_RESERCH_RESET })
                  dispatch(getResearcherById(resId))
            }
      }, [dispatch, successDecline, successApprove])

      const approveHandler = () => {
            dispatch(approveReserach(reserchers))
      }

      const declineHandler = () => {
            dispatch(declineReserch(reserchers))
      }




      return loading ? (
            <Loader />
      ) : error ? (
            <Message variant='danger'>{error}</Message>
      ) : (
            <>
             <Link to='/reviwerResearch' className='btn btn-light my-3'>
                        Go Back
                  </Link>
                  <h1>Researcher {reserchers._id}</h1>
                  <Row>
                        <Col md={8}>
                              <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                          <p>
                                                <strong>Paper: </strong> {reserchers.researcherPaper}
                                          </p>

                                          <p>
                                                <strong>Description:</strong>
                                                {reserchers.researcherDes}
                                          </p>
                                          <p>
                                                <strong>Document:</strong>
                                                {reserchers.researchInsertDoc}
                                          </p>
                                          <p>
                                                <strong>Created At:</strong>
                                                {reserchers.createdAt}
                                          </p>
                                          <p>
                                                <strong>Updated At:</strong>
                                                {reserchers.updatedAt}
                                          </p>
                                        
                                          {reserchers.researchIsApproved ? (
                                                <Message variant='success'>
                                                      Approved
                                                </Message>
                                          ) : (
                                                <Message variant='danger'>Not Approved</Message>
                                          )}
                                    </ListGroup.Item>


                              </ListGroup>
                              {!reserchers.researchIsApproved && (
                                    <ListGroup.Item>
                                          <Button type='button' className='btn btn-block' onClick={approveHandler}>
                                                Mark as Approved
                                          </Button>
                                    </ListGroup.Item>
                              )}

                              {reserchers.researchIsApproved && (
                                    <ListGroup.Item>
                                          <Button type='button' className='btn btn-block' onClick={declineHandler} >
                                                Decline
                                          </Button>
                                    </ListGroup.Item>
                              )}

                        </Col>
                  </Row>
            </>
      )
}

export default researcherApproveScreen