import React, { useState } from "react"
import PayPal from "./PayPal"
import { Button, Form, Row, Col } from 'react-bootstrap'
import Navbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import { Badge } from "react-bootstrap"
import { Jumbotron, Button } from "react-bootstrap"


const atendeeScreen = () => {

    const [checkout, setCheckout] = useState(false)


    return (
        <>
            <Navbar />

            <Jumbotron>
                <br />
                <br />
                <br />
                <center><Badge variant="dark"><h3>Click Pay Buton To Pay $100 As Conference Upfront</h3></Badge></center>
                <center>
                    <br />
                    <br />
                    <div className="container">
                        {checkout ? (
                            <PayPal />
                        ) : (
                            <Button type="button" size="lg" variant="warning" onClick={() => {
                                setCheckout(true)
                            }}>
                                <h4>Pay Upfront</h4>
                            </Button>
                        )}
                    </div>
                </center>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </Jumbotron>
            <Footer />
        </>

    )
}

export default atendeeScreen