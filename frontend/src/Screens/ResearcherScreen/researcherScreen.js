import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import Message from '../../components/Message/message.js'
import Loader from '../../components/Loader/loader.js'
import axios from 'axios'
import { researchAdd } from '../../action/researcherAction'

const researcherScreen = ({ location, history }) => {
    const [researcherPaper, setResearcherPaper] = useState('')
    const [researcherDes, setResearcherDes] = useState('')
    const [researchIsApproved, setResearchIsApproved] = useState(false)
    const [researchInsertDoc, setResearchInsertDoc] = useState('')
    const [uploading, setUploading] = useState(false)


    const dispatch = useDispatch()

    const researcherInsert = useSelector(state => state.researcherInsert)
    const { loading, error, researcherInfo } = researcherInsert

    const redirect = location.search ? location.search.split('=')[1] : '/'


    useEffect(() => {
        if (researcherInfo) {
            history.push(redirect)
        }

    }, [history, researcherInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(researchAdd(researcherPaper, researcherDes, researchInsertDoc, researchIsApproved))
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
            setResearchInsertDoc(data)
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
                        <h3 align='center'>Researcher Document Insert</h3>

                        <Form.Group controlId='researcherPaper'>
                            <div className="form-group bn">
                                <Form.Label>Research Paper</Form.Label>
                                <Form.Control type='text' className="form-control" placeholder='Enter Research Paper'
                                    value={researcherPaper}
                                    onChange={(e) => setResearcherPaper(e.target.value)}
                                ></Form.Control>
                            </div>
                        </Form.Group>

                        <Form.Group controlId='researcherDes'>
                            <div className="form-group bn">
                                <Form.Label>Research Description</Form.Label>
                                <Form.Control type='text' className="form-control" placeholder='Enter Research Description'
                                    value={researcherDes}
                                    onChange={(e) => setResearcherDes(e.target.value)}
                                ></Form.Control>
                            </div>
                        </Form.Group>


                        <Form.Group controlId='image'>
                            <div className="form-group bn">
                                <Form.Label>Upload Document</Form.Label>
                                <Form.Control type='text' className="form-control" placeholder='Enter Document URL'
                                    value={researchInsertDoc}
                                    onChange={(e) => setResearchInsertDoc(e.target.value)}
                                ></Form.Control>
                            </div>
                            <Form.File id="file" label='Choose File' custom onChange={uploadFileHandler}></Form.File>
                            {uploading && <Loader />}
                        </Form.Group>

                        <a href="https://drive.google.com/file/d/1uHAC2EJBvxkhVgGLnFab52P1U6FoE8Du/view?usp=sharing" target="_blank">Researcher Document Template</a>


                        <Button type="submit" className="btn btn-primary btn-block">Submit</Button>

                    </Form>
                </div>

            </div>



            <Footer />

        </>

    )
}

export default researcherScreen