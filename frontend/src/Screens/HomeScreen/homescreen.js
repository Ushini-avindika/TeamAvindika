import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Appbar from '../../components/Navbar/navbar.js'
import Footer from '../../components/Footer/footer.js'
import Showcase from '../../components/Showcase/showcase.js'
import { Button, Form, Table } from 'react-bootstrap';
import NewsList from '../../components/NewsApprovelist/newsApprovelist.js'
import { Link } from "react-router-dom";
import './homescreen.css'


const homeScreen = () => {

      return (
            <>
                  <div className="man">
                        <Appbar />
                        <Showcase />
                        <NewsList />

                        <Footer />

                  </div>
            </>
      )
}

export default homeScreen