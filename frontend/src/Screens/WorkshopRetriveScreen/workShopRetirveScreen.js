import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Table, Row, Col } from 'react-bootstrap';
import Appbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import Loader from '../../components/Loader/loader.js'
import Message from '../../components/Message/message.js'
import { Link } from "react-router-dom";
import { appWorklist } from '../../action/workshopAction.js'

import Badge from 'react-bootstrap/Badge'
import Jumbotron from 'react-bootstrap/Jumbotron'

const workshopRetriveScreen = () => {

      const dispatch = useDispatch()

      const workApplist = useSelector(state => state.workApplist)
      const { loading, error, workshop } = workApplist

      useEffect(() => {
            dispatch(appWorklist())

      }, [dispatch])

      return (
            <>
                  <Appbar />

                  <Jumbotron>
                        <center><Badge variant="dark"><h2>APPROVED WORKSHOP DETAILS</h2></Badge></center>
                        <br></br>
                        {loading ? (<Loader />) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <Table striped bordered hover responsive variant="light" className='table-sm'>
                                    <thead>
                                          <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Time From</th>
                                                <th>Time To</th>
                                                <th>Time Date</th>
                                                <th>Documents</th>
                                                <th>Approved</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {workshop.map((work) => (
                                                <tr key={work._id} >
                                                      <td>{work.workshopName}</td>
                                                      <td>{work.workshopDes}</td>
                                                      <td>{work.workTimeFrom}</td>
                                                      <td>{work.workTimeTo}</td>
                                                      <td>{work.workDate}</td>
                                                      <td>{work.workInsertDoc}</td>
                                                      <td>{work.workIsApprove ? (
                                                            <i className='fas fa-check' style={{ color: 'green' }}></i>
                                                      ) : (
                                                            <i className='fas fa-times' style={{ color: 'red' }}></i>
                                                      )}</td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </Table>
                        )
                        }
                  </Jumbotron>
                  <Footer />

            </>

      )
}

export default workshopRetriveScreen