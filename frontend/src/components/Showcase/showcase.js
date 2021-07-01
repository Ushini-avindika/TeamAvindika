import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader/loader.js'
import Message from '../../components/Message/message.js'
import { Button, Form, Table, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Showcase = () => {




      return (


            <div className="showcase">
                  <h2>DIscover an Adventure</h2>
                  <h1>SLIIT ICAC</h1>
                  <p>Lorem ispum dolor sit amet, combdhsw, sadisdnsb, elit.
                        Resbmnfdmf ex
                        lobkdnsdmi asj.
                  </p>
                  <div className="showcase__buttons">
                        <Link to={"/conference"}>
                              <button button className="showcase__btn-service">MORE DETAILS</button>
                        </Link>
                        <button className="showcase__btn-about">ABOUT US</button>
                  </div>
            </div >
      )
}

export default Showcase