import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/Message/message'
import Loader from '../../../components/Loader/loader'
import { getNewsById, approveNews } from '../../../action/adminAction.js'
import { ADMIN_APPROVED_NEWS_RESET } from '../../../constants/adminConstants.js'
import Badge from 'react-bootstrap/Badge'
import FromContainer from '../../FormContainer/formContainer.js'

const ApproveScreen = ({ match }) => {
      const newsId = match.params.id


      const dispatch = useDispatch()

      const nDetails = useSelector((state) => state.nDetails)
      const { news, loading, error } = nDetails

      newsApproved = useSelector((state) => state.newsApproved)
      const { loading: loadingApprovel, success: successApprove } = newsApproved


      useEffect(() => {

            if (news || successApprove) {
                  dispatch({ type: ADMIN_APPROVED_NEWS_RESET })
                  dispatch(getNewsById(newsId))
            }
      }, [dispatch, successApprove])

      const approveHandler = () => {
            dispatch(approveNews(news))
      }

      return loading ? (
            <Loader />
      ) : error ? (
            <Message variant='danger'>{error}</Message>
      ) : (
            <>
                  <Link to='/newsAdmin' className='btn btn-light my-3'>
                        Go Back
                  </Link>
                  <FromContainer>
                        <Badge variant="dark"> <h1>News {news._id}</h1></Badge>

                        <Row>
                              <Col md={8}>
                                    <ListGroup variant='flush'>
                                          <ListGroup.Item>
                                                <p>
                                                      <strong>Name: </strong> {news.name}
                                                </p>

                                                <p>
                                                      <strong>Date:</strong>
                                                      {news.date}
                                                </p>

                                                <p>
                                                      <strong>Message:</strong>
                                                      {news.message}
                                                </p>


                                                {news.isApproved ? (
                                                      <Message variant='success'>
                                                            Approved
                                                      </Message>
                                                ) : (
                                                      <Message variant='danger'>Not Approved</Message>
                                                )}
                                          </ListGroup.Item>


                                    </ListGroup>
                                    {!news.isApproved && (
                                          <ListGroup.Item>
                                                <Button type='button' className='btn btn-block' onClick={approveHandler}>
                                                      Mark as Approved
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