import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Table, Row, Col } from 'react-bootstrap';
import Loader from '../../components/Loader/loader.js'
import Message from '../../components/Message/message.js'
import { Link } from "react-router-dom";
import Appbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import { appResearchlist } from '../../action/researcherAction.js'
import Badge from 'react-bootstrap/Badge'
import Jumbotron from 'react-bootstrap/Jumbotron'

const researchRetriveScreen = () => {

      const dispatch = useDispatch()

      const researchApplist = useSelector(state => state.researchApplist)
      const { loading, error, research } = researchApplist

      useEffect(() => {
            dispatch(appResearchlist())

      }, [dispatch])

      return (
            <>
                  <Appbar />
                  <Jumbotron>
                        <center><Badge variant="dark"><h2>APPROVED REASEARCH PAPERS</h2></Badge></center>
                        <br></br>
                        {loading ? (<Loader />) : error ? (
                              <Message variant='danger'>{error}</Message>
                        ) : (
                              <Table striped bordered hover responsive variant="light" className='table-sm'>
                                    <thead>
                                          <tr>
                                                <th>Paper</th>
                                                <th>Description</th>
                                                <th>Docs</th>
                                                <th>Created at</th>
                                                <th>update at</th>
                                                <th>Approved</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {research.map((rev) => (
                                                <tr key={rev._id} >
                                                      <td>{rev.researcherPaper}</td>
                                                      <td>{rev.researcherDes}</td>
                                                      <td>{rev.researchInsertDoc}</td>
                                                      <td>{rev.createdAt}</td>
                                                      <td>{rev.updatedAt}</td>
                                                      <td>{rev.researchIsApproved ? (
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
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br /> <br />

                  </Jumbotron>
                  <Footer />

            </>

      )
}

export default researchRetriveScreen