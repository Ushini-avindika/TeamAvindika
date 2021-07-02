import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/Message/message'
import Loader from '../../../components/Loader/loader'
import {getResearcherById} from '../../../action/reviwerAction.js'


const researcherApproveScreen = ({ match }) => {
      const resId = match.params.id


      const dispatch = useDispatch()

      const resDetails = useSelector((state) => state.resDetails)
      const { reserchers, loading, error } = resDetails

    //   workApproved = useSelector((state) => state.workApproved)
    //   const { loading: loadingApprovel, success: successApprove } = workApproved

    //   workDecline = useSelector((state) => state.workDecline)
    //   const { loading: loadingDecline, success: successDecline } = workDecline




      useEffect(() => {

            if (reserchers) {
                  //dispatch({ type: REVIWER_DECLINE_RESET })
                  //dispatch({ type: REVIWER_APPROVE_WORKSHOP_RESET })
                  dispatch(getResearcherById(resId))
            }
      }, [dispatch])

    //   const approveHandler = () => {
    //         dispatch(approveWorkshops(workshops))
    //   }

    //   const declineHandler = () => {
    //         dispatch(declineConference(workshops))
    //   }




      return loading ? (
            <Loader />
      ) : error ? (
            <Message variant='danger'>{error}</Message>
      ) : (
            <>
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
                              {/* {!workshops.workIsApprove && (
                                    <ListGroup.Item>
                                          <Button type='button' className='btn btn-block' onClick={approveHandler}>
                                                Mark as Approved
                                          </Button>
                                    </ListGroup.Item>
                              )} */}

                              {/* {workshops.workIsApprove && (
                                    <ListGroup.Item>
                                          <Button type='button' className='btn btn-block' onClick={declineHandler} >
                                                Decline
                                          </Button>
                                    </ListGroup.Item>
                              )} */}

                        </Col>
                  </Row>
            </>
      )
}

export default researcherApproveScreen