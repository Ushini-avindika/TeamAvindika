import React, { useState } from "react";
import './navbar.css'
import { LoginScreen } from "../../Screens/LoginScreen/loginScreen";
import { useDispatch, useSelector } from "react-redux";
import { Nav, NavDropdown } from "react-bootstrap";
import { logout } from "../../action/userAction.js";
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

const Appbar = () => {

      const dispatch = useDispatch()

      const userLogin = useSelector(state => state.userLogin)
      const { userInfo } = userLogin

      const logoutHandler = () => {
            dispatch(logout())
      }

      const [navlinkOpen, navlinkToggle] = useState(false);
      const [navbar, setnavbar] = useState(false);

      const handleNavLinksToggle = () => {
            navlinkToggle(!navlinkOpen)
      }

      const renderClasses = () => {
            let classes = 'navlinks';

            if (navlinkOpen) {
                  classes += " active"
            }
            return classes;
      }

      const changeBackground = () => {
            if (window.scrollY >= 80) {
                  setnavbar(true)
            } else {
                  setnavbar(false)
            }
      }

      window.addEventListener('scroll', changeBackground);

      const [showModal, setShowModal] = useState(false);

      const openModal = () => {
            setShowModal(prev => !prev);
      };


      return (
            <>
                  <nav className={navbar ? 'navbar active' : 'navbar'}>
                        <div className="logo">
                              <i className="fas fa-mountain"></i>
                              <h4>ICAF</h4>
                        </div>
                        <ul className={renderClasses()}>

                              <li className="link"><a href="/">Home</a></li>
                              <li className="link"><a href="/register">Register</a></li>
                              <li className="link"><a href="#">Contact us</a></li>
                              {userInfo ? (


                                    <NavDropdown className="link" title={userInfo.name} id='username'>
                                          <LinkContainer to="/profile">
                                                <NavDropdown.Item class="link-dark">Profile</NavDropdown.Item>
                                          </LinkContainer>
                                          <NavDropdown.Item onClick={logoutHandler}>
                                                <li className="link">logout</li>
                                          </NavDropdown.Item>
                                    </NavDropdown>

                              ) : <Nav.Link className="link">
                                    <Link to='/login'>Login</Link>
                              </Nav.Link>}


                              {userInfo && userInfo.isEditor && (
                                    <NavDropdown className="link" title='Editor Dashboard'>
                                          <Link to="/editorLanding">
                                                editor
                                          </Link>

                                    </NavDropdown>
                              ) || userInfo && userInfo.isAdmin && (
                                    <NavDropdown className="link" title='Admin  Dashboard'>
                                          <Link to='/admincon'>
                                                Admin
                                          </Link>

                                    </NavDropdown>
                              ) || userInfo && userInfo.isReasearcher && (
                                    <NavDropdown className="link" title='Researcher'>
                                          <Link to='/researcher'>
                                                Insert Research Paper
                                          </Link>
                                          <Link to="/researchApp">
                                                Approved Research papers
                                          </Link>

                                    </NavDropdown>
                              ) || userInfo && userInfo.isWorkPresnter && (
                                    <NavDropdown className="link" title='Workshop Presenter'>
                                          <Link to='/workshop'>
                                                Insert Workshop Details
                                          </Link>
                                          <Link to='/workApp'>
                                                Approved Workshop details
                                          </Link>

                                    </NavDropdown>
                              ) || userInfo && userInfo.isReviwer && (
                                    <NavDropdown className="link" title='Riviewer'>
                                          <Link to='/reviwerWorkshop'>
                                                Riviewer
                                          </Link>


                                    </NavDropdown>
                              ) || userInfo && userInfo.isAtendee && (
                                    <NavDropdown className="link" title='Atendee'>
                                          <Link to='/atendee'>
                                                Pay UpFront
                                          </Link>

                                    </NavDropdown>
                              )

                              }


                        </ul>
                        <div onClick={handleNavLinksToggle} className="hambuger-toggle">
                              <i className="fas fa-bars fa-lg"></i>
                        </div>
                  </nav >
            </>
      )

}
export default Appbar