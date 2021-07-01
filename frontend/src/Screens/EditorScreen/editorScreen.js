import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Table } from 'react-bootstrap';
import { listConDetails } from '../../action/conferenceAction.js'
import Loader from '../../components/Loader/loader.js'
import Message from '../../components/Message/message.js'




const EditorScreen = () => {

      const dispatch = useDispatch()

      const listCon = useSelector(state => state.listCon)
      const { loading, error, conferencedetails } = listCon

      useEffect(() => {
            dispatch(listConDetails())
      }, [dispatch])
      return (
            <>
                  <Appbar />
                  <h1>Editor Dashboard</h1>
                  <Editornavbar />
                  {loading ? (<Loader />) : error ? (
                        <Message variant='danger'>{error}</Message>
                  ) : (
                        <Table striped bordered hover responsive variant="dark" className='table-sm'>
                              <thead>
                                    <tr>
                                          <th>ID</th>
                                          <th>NAME</th>
                                          <th>EMAIL</th>
                                          <th>ADMIN</th>
                                          <th></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {conferencedetails.map((con) => (
                                          <tr key={con._id} >
                                                <td>{con.conname}</td>
                                                <td>{con.description}</td>
                                                <td>{con.organizer}</td>
                                                <td>{con.phone}</td>
                                                <td>{con.email}</td>
                                                <td>{con.venue}</td>
                                          </tr>
                                    ))}
                              </tbody>
                        </Table>
                  )}

            </>
      )
}


export default EditorScreen