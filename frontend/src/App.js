import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/homescreen'
import LoginScreen from './Screens/LoginScreen/loginScreen'
import RegisterScreen from './Screens/RegisterScreen/registerScreen'
import LoggedinHomeScreen from './Screens/loggedinHomeScreen/lggedInHomeScreen'
import AdminScreen from './components/Admin/adminDashboard/adminDashboard'
import EditorScreen from './Screens/EditorScreen/Editor dashboard/editorDashboard'
import appconlistScreen from './Screens/EditorScreen/approvedScreen'
import unappconlistScreen from './Screens/EditorScreen/unapprovedScreen'
import profileScreen from './Screens/ProfileScreen/profileScreen'
import AdminConference from './components/Admin/adminConferenceDetails/adminConferenceDetails.js'
import getAdminEditor from './components/Admin/adminUserDetails/adminEditorsList.js'
import getAdminReviwer from './components/Admin/adminUserDetails/adminReviwer.js'
import ConferenceDetailsUpdate from './Screens/ConferenceDetailsEditScreen/conferenceDetailsEditScreen.js'
import researcherScreen from './Screens/ResearcherScreen/researcherScreen.js'
import workShopScreen from './Screens/WorkShopScreen/workShopScreen'
import newsListScreen from './Screens/NewsListScreen/newsListScreen'
import NewsEditScreen from './Screens/NewsEditScreen/newsEditScreen.js'
import AdminApproveScreen from './components/Admin/adminConferenceDetails/approveScreen.js'
import conferenceDetails from './Screens/ConferenceDetails/conferenceDetails.js'
import AdminNewsDetails from './components/Admin/adminNewsDetails/adminNewsDetails.js'
import AdminNewsApprove from './components/Admin/adminNewsDetails/adminNewsApprove.js'
import AppNewsScreen from './Screens/EditorScreen/Editor dashboard/appNewsScreen.js'
import ViewNewsScreen from './Screens/ViewNewsScreen/viewNewsScreen.js'
import UnAppNewsScreen from './Screens/EditorScreen/Editor dashboard/unappNewsScreen.js'
import EditorLanding from './Screens/EditorScreen/Editor dashboard/editorLandingScreen.js'
import WorkshopList from './Screens/ReviwerScreen/WorkshopDetails/reviewerWorkshopDetails.js'
import ReasearcherDetails from './Screens/ReviwerScreen/ResercherDetails/reviwerResearch.js'
import WorkshopsApprove from './Screens/ReviwerScreen/WorkshopDetails/WorkshopsApproveScreen.js'
import ReserchApprove from './Screens/ReviwerScreen/ResercherDetails/researchApproveScreen.js'
import AdminWorkshop from './components/Admin/adminWorkshopList/adminWorkshopList.js'
import AdminReserch from './components/Admin/adminResercher/adminResercherList.js'

const App = () => {
      return (
            <Router>
                  <div className="main">
                        <Route path="/" component={HomeScreen} exact />
                        <Route path="/login" component={LoginScreen} />
                        <Route path="/register" component={RegisterScreen} />
                        <Route path="/loggedInHome" component={LoggedinHomeScreen} />
                        <Route path="/admin" component={AdminScreen} />
                        <Route path="/editor" component={EditorScreen} />
                        <Route path="/applist" component={appconlistScreen} />
                        <Route path="/unapplist" component={unappconlistScreen} />
                        <Route path="/adminCon" component={AdminConference} />
                        <Route path="/adminEditors" component={getAdminEditor} />
                        <Route path="/adminReviwer" component={getAdminReviwer} />
                        <Route path="/con/:id" component={ConferenceDetailsUpdate} />
                        <Route path="/researcher" component={researcherScreen} />
                        <Route path="/workshop" component={workShopScreen} />
                        <Route path="/conDetails/:id" component={AdminApproveScreen} />
                        <Route path="/newslist" component={newsListScreen} />
                        <Route path='/news/:id' component={NewsEditScreen} />
                        <Route path="/conference" component={conferenceDetails} />
                        <Route path="/profile" component={profileScreen} />
                        <Route path="/newsAdmin" component={AdminNewsDetails} />
                        <Route path="/adminNews/:id" component={AdminNewsApprove} />
                        <Route path="/reviwerWorkshop" component={WorkshopList} />
                        <Route path="/reviwerResearch" component={ReasearcherDetails} />
                        <Route path="/view/:id" component={ViewNewsScreen} />
                        <Route path="/appNews" component={AppNewsScreen} />
                        <Route path="/editorLanding" component={EditorLanding} />
                        <Route path="/unappNews" component={UnAppNewsScreen} />
                        <Route path="/workshopDetails/:id" component={WorkshopsApprove} />
                        <Route path="/reserch/:id" component={ReserchApprove} />
                        <Route path="/adminWorkshops" component={AdminWorkshop} />
                        <Route path="/adminReserch" component={AdminReserch} />
                  </div>
            </Router >
      )
}

export default App