import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/Message/message'
import Loader from '../../../components/Loader/loader'
import { approveWorkshops, geWorkshopById, declineWorkshopDetails } from '../../../action/reviwerAction.js'
import { REVIWER_APPROVE_WORKSHOP_RESET, REVIWER_DECLINE_RESET } from '../../../constants/reviwerConstants.js'

const workshopApproveScreen = ({ match }) => {
      const appId = match.params.id


      const dispatch = useDispatch()

      const workDetails = useSelector((state) => state.workDetails)
      const { workshops, loading, error } = workDetails

      workApproved = useSelector((state) => state.workApproved)
      const { loading: loadingApprovel, success: successApprove } = workApproved

      workDecline = useSelector((state) => state.workDecline)
      const { loading: loadingDecline, success: successDecline } = workDecline




      useEffect(() => {

            if (workshops || successApprove || successDecline) {
                  dispatch({ type: REVIWER_DECLINE_RESET })
                  dispatch({ type: REVIWER_APPROVE_WORKSHOP_RESET })
                  dispatch(geWorkshopById(appId))
            }
      }, [dispatch, successApprove])

      const approveHandler = () => {
            dispatch(approveWorkshops(workshops))
      }

      const declineHandler = () => {
            dispatch(declineConference(workshops))
      }




      return loading ? (
            <Loader />
      ) : error ? (
            <Message variant='danger'>{error}</Message>
      ) : (
            <>
                  <h1>Workshop {workshops.workshopName}</h1>
                  <Row>
                        <Col md={8}>
                              <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                          <p>
                                                <strong>Name: </strong> {workshops.workshopName}
                                          </p>

                                          <p>
                                                <strong>Description:</strong>
                                                {workshops.workshopDes}
                                          </p>
                                          <p>
                                                <strong>Time From:</strong>
                                                {workshops.workTimeFrom}
                                          </p>
                                          <p>
                                                <strong>Time To:</strong>
                                                {workshops.workTimeTo}
                                          </p>
                                          <p>
                                                <strong>Date:</strong>
                                                {workshops.workDate}
                                          </p>
                                          <p>
                                                <strong>Documents:</strong>
                                                {workshops.workInsertDoc}
                                          </p>
                                          <p>
                                                <strong>Created At:</strong>
                                                {workshops.createdAt}
                                          </p>
                                          <p>
                                                <strong>Updated At:</strong>
                                                {workshops.updatedAt}
                                          </p>
                                          {workshops.workIsApprove ? (
                                                <Message variant='success'>
                                                      Approved
                                                </Message>
                                          ) : (
                                                <Message variant='danger'>Not Approved</Message>
                                          )}
                                    </ListGroup.Item>


                              </ListGroup>
                              {!workshops.workIsApprove && (
                                    <ListGroup.Item>
                                          <Button type='button' className='btn btn-block' onClick={approveHandler}>
                                                Mark as Approved
                                          </Button>
                                    </ListGroup.Item>
                              )}

                              {workshops.workIsApprove && (
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

export default workshopApproveScreen