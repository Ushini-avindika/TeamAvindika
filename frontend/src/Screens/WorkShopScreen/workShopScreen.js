import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import Message from '../../components/Message/message.js'
import Loader from '../../components/Loader/loader.js'
import axios from 'axios'
import { workshopAdd } from '../../action/workshopAction'



const workShopScreen = ({ location, history }) => {
    const [workshopName, setWorkshopName] = useState('')
    const [workshopDes, setWorkshopDes] = useState('')
    const [workTimeFrom, setWorkTimeFrom] = useState('')
    const [workTimeTo, setWorkTimeTo] = useState('')
    const [workDate, setWorkDate] = useState('')
    const [workIsApprove, setWorkIsApprove] = useState(false)
    const [workInsertDoc, setWorkInsertDoc] = useState('')
    const [uploading, setUploading] = useState(false)








    const dispatch = useDispatch()

    const workshopInsert = useSelector(state => state.workshopInsert)
    const { loading, error, workshopInfo } = workshopInsert

    const redirect = location.search ? location.search.split('=')[1] : '/'


    useEffect(() => {
        if (workshopInfo) {
            history.push(redirect)
        }

    }, [history, workshopInsert, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(workshopAdd(workshopName, workshopDes, workTimeFrom, workTimeTo, workDate, workInsertDoc, workIsApprove))
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('document', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            const { data } = await axios.post('http://localhost:8040/api/uploads/document', formData, config)
            setWorkInsertDoc(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }




    return (
        <>
            <Navbar />

            <div className='wrapper'>
                <div className='nm'>
                    {error && <Message variant='danger'>{error}</Message>}
                    {loading && <Loader />}
                </div>
                <div className='content'>

                    <Form onSubmit={submitHandler}>
                        <h3 align='center'>Work Shop Document Insert</h3>

                        <Form.Group controlId='workShopName'>
                            <div className="form-group bn">
                                <Form.Label>Workshop Name</Form.Label>
                                <Form.Control type='text' className="form-control" placeholder='Enter Workshop Name'
                                    value={workshopName}
                                    onChange={(e) => setWorkshopName(e.target.value)}
                                ></Form.Control>
                            </div>
                        </Form.Group>

                        <Form.Group controlId='workshopDes'>
                            <div className="form-group bn">
                                <Form.Label>Workshop Description</Form.Label>
                                <Form.Control type='text' className="form-control" placeholder='Enter Workshop Description'
                                    value={workshopDes}
                                    onChange={(e) => setWorkshopDes(e.target.value)}
                                ></Form.Control>
                            </div>
                        </Form.Group>

                        <Form.Group controlId='workTimeFrom'>
                            <div className="form-group bn">
                                <Form.Label>Workshop Starting Time</Form.Label>
                                <Form.Control type='text' className="form-control" placeholder='Enter Starting Workshop Time'
                                    value={workTimeFrom}
                                    onChange={(e) => setWorkTimeFrom(e.target.value)}
                                ></Form.Control>
                            </div>
                        </Form.Group>

                        <Form.Group controlId='workTimeTo'>
                            <div className="form-group bn">
                                <Form.Label>Workshop Ending Time</Form.Label>
                                <Form.Control type='text' className="form-control" placeholder='Enter Ending Workshop Time'
                                    value={workTimeTo}
                                    onChange={(e) => setWorkTimeTo(e.target.value)}
                                ></Form.Control>
                            </div>
                        </Form.Group>


                        <Form.Group controlId='workDate'>
                            <div className="form-group bn">
                                <Form.Label>Workshop Date</Form.Label>
                                <Form.Control type='date' className="form-control" placeholder='Enter Workshop Date'
                                    value={workDate}
                                    onChange={(e) => setWorkDate(e.target.value)}
                                ></Form.Control>
                            </div>
                        </Form.Group>

                        <Form.Group controlId='image'>
                            <div className="form-group bn">
                                <Form.Label>Upload Document</Form.Label>
                                <Form.Control type='text' className="form-control" placeholder='Enter Document URL'
                                    value={workInsertDoc}
                                    onChange={(e) => setWorkInsertDoc(e.target.value)}
                                ></Form.Control>
                            </div>
                            <Form.File id="file" label='Choose File' custom onChange={uploadFileHandler}></Form.File>
                            {uploading && <Loader />}
                        </Form.Group>

                        <a href="https://drive.google.com/file/d/1CMjNhwaIRVnJGRF5OGyOLJ-0xFJNlotw/view?usp=sharing" target="_blank">Workshop Document Template</a>

                        <Button type="submit" className="btn btn-primary btn-block">Submit</Button>

                    </Form>
                </div>

            </div>



            <Footer />

        </>

    )
}

export default workShopScreen