import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from '../src/reducers/userReducers.js'
import { conDetailsDeleteReducer, conListReducer, conUnApprovedReduceer, conDetailsUpdateReducer, conDetailsReducer, conCreateReducer } from '../src/reducers/conferenceReducer.js'
import { conApprovedReduceer } from '../src/reducers/conferenceReducer.js'
import { conferenceReducer, getEditorReducer } from '../src/reducers/adminReducers.js'
import { userRegisterReducer, userDetailsReducer } from '../src/reducers/userReducers.js'
import { researcherInsert } from './reducers/researcherReducer.js'
import { workshopInsert } from './reducers/workshopReducer.js'
import { conferenceReducer, getEditorReducer, getReviwerReducer, getConferenceDetailsById, conferenceApprovedReducer, conferenceDeclinedReducer } from '../src/reducers/adminReducers.js'
import { conferenceReducer, getEditorReducer, getReviwerReducer } from '../src/reducers/adminReducers.js'
import { newsListReducer, newsDeleteReducer, newsgetReducer, newsUpadateReducer, newsCreateReducer, newsApprovedListReducer, newsUnApprovedListReducer } from '../src/reducers/newsReducers.js'
import { userUpdateProfileReducer } from '../src/reducers/userReducers.js'
import { conferenceReducer, getEditorReducer, getReviwerReducer, getConferenceDetailsById, conferenceApprovedReducer, conferenceDeclinedReducer, newsReducer, adminNewsReducer, getNewsDetailsById, workshopReducer, reserchReducer, newsDeclinedReducer } from '../src/reducers/adminReducers.js'
import { newsListReducer } from '../src/reducers/newsReducers.js'
import { getAllWorkshop, getAllResearch, getWorkshopDetailsById, approveWorkshopReducer, declineWorkshopReducer, getResearchDetailsById, approveReserchReducer, declineReserchReducer } from '../src/reducers/reviwerReducer.js'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    listCon: conListReducer,
    appCon: conApprovedReduceer,
    unappCon: conUnApprovedReduceer,
    userRegister: userRegisterReducer,
    appConference: conferenceReducer,
    deleteCon: conDetailsDeleteReducer,
    editors: getEditorReducer,
    updateCon: conDetailsUpdateReducer,
    ConsDetails: conDetailsReducer,
    researcherInsert: researcherInsert,
    workshopInsert: workshopInsert,
    createConferenceDetails: conCreateReducer,
    reviwer: getReviwerReducer,
    listNews: newsListReducer,
    cDetails: getConferenceDetailsById,
    confApproved: conferenceApprovedReducer,
    confDecline: conferenceDeclinedReducer,
    delNews: newsDeleteReducer,
    getNews: newsgetReducer,
    newsUpdate: newsUpadateReducer,
    newsCreate: newsCreateReducer,
    cDetails: getConferenceDetailsById,
    newsDetails: newsReducer,
    userDetailsReducer: userDetailsReducer,
    userUpdateProfileReducer: userUpdateProfileReducer,
    newsApproved: adminNewsReducer,
    nDetails: getNewsDetailsById,
    listWorkshops: getAllWorkshop,
    listResearchers: getAllResearch,
    appNewList: newsApprovedListReducer,
    unappNewList: newsUnApprovedListReducer,
    workDetails:getWorkshopDetailsById,
    workApproved : approveWorkshopReducer,
    workDecline : declineWorkshopReducer,
    resDetails : getResearchDetailsById,
    resApproved: approveReserchReducer,
    resDecline: declineReserchReducer,
    appWorkshop: workshopReducer,
    resList: reserchReducer,
    newsDeclined :newsDeclinedReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
)

export default store