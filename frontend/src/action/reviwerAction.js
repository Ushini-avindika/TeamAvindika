import axios from 'axios'
import { WORKSHOP_LIST_REQUEST_REVIWER,
    WORKSHOP_LIST_SUCCESS_REVIWER,
    WORKSHOP_LIST_FAIL_REVIWER,
    WORKSHOP_LIST_RESET_REVIWER,
    RESEARCH_LIST_REQUEST_REVIWER,
    RESEARCH_LIST_SUCCESS_REVIWER,
    RESEARCH_LIST_FAIL_REVIWER,
    REVIWER_APPROVE_WORKSHOP_REQUEST,
    REVIWER_APPROVE_WORKSHOP_SUCCESS,
    REVIWER_APPROVE_WORKSHOP_FAIL,
    REVIWER_GETWORKSHOP_BYID_REQUEST,
    REVIWER_GETWORKSHOP_BYID_SUCCESS,
    REVIWER_GETWORKSHOP_BYID_FAIL,
    REVIWER_DECLINE_REQUEST,
    REVIWER_DECLINE_SUCCESS,
    REVIWER_DECLINE_FAIL,
    REVIWER_RESEARCHER_BYID_REQUEST,
    REVIWER_RESEARCHER_BYID_SUCCESS,
    REVIWER_RESEARCHER_BYID_FAIL,
    REVIWER_APPROVE_RESERCH_REQUEST,
    REVIWER_APPROVE_RESERCH_SUCCESS,
    REVIWER_APPROVE_RESERCH_FAIL,
    REVIWER_DECLINE_RESERCH_REQUEST,
    REVIWER_DECLINE_RESERCH_SUCCESS,
    REVIWER_DECLINE_RESERCH_FAIL

} from '../constants/reviwerConstants.js'


export const getAllWorkshops = () => async (dispatch, getState) => {
    try {
          dispatch({
                type: WORKSHOP_LIST_REQUEST_REVIWER,
          })
          const {
                userLogin: { userInfo },
          } = getState()

          const config = {
                headers: {
                      Authorization: `Bearer ${userInfo.token}`,
                },
          }

          const { data } = await axios.get('http://localhost:8040/api/reviewdetails/', config)

          dispatch({
                type: WORKSHOP_LIST_SUCCESS_REVIWER,
                payload: data
          })
    } catch (error) {
          dispatch({
                type: WORKSHOP_LIST_FAIL_REVIWER,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}


export const getAllResearch = () => async (dispatch, getState) => {
    try {
          dispatch({
                type: RESEARCH_LIST_REQUEST_REVIWER,
          })
          const {
                userLogin: { userInfo },
          } = getState()

          const config = {
                headers: {
                      Authorization: `Bearer ${userInfo.token}`,
                },
          }

          const { data } = await axios.get('http://localhost:8040/api/reviewdetails/research', config)

          dispatch({
                type: RESEARCH_LIST_SUCCESS_REVIWER,
                payload: data
          })
    } catch (error) {
          dispatch({
                type: RESEARCH_LIST_FAIL_REVIWER,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}

export const geWorkshopById = (id) => async(dispatch, getState) => {
      try{
            dispatch({
                  type: REVIWER_GETWORKSHOP_BYID_REQUEST,
            })
            const {
                  userLogin: { userInfo },

            } = getState()

            const config = {
                      headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${userInfo.token}`,
                      },
            }
            const { data } = await axios.get(`http://localhost:8040/api/reviewdetails/reviwer/workshop/${id}`, config)

            dispatch({
                  type: REVIWER_GETWORKSHOP_BYID_SUCCESS,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: REVIWER_GETWORKSHOP_BYID_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }

}



export const approveWorkshops = (workshop) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: REVIWER_APPROVE_WORKSHOP_REQUEST,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  },
            }

            const { data } = await axios.put(`http://localhost:8040/api/reviewdetails/workshop/${workshop._id}/approved`, workshop, config)

            dispatch({
                  type: REVIWER_APPROVE_WORKSHOP_SUCCESS,
                  payload: data,
            })
      } catch (error) {
            dispatch({
                  type: REVIWER_APPROVE_WORKSHOP_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}


export const declineWorkshopDetails = (workshop) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: REVIWER_DECLINE_REQUEST,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  },
            }

            const { data } = await axios.put(`http://localhost:8040/api/reviewdetails/workshop/${workshop._id}/declined`, workshop, config)

            dispatch({
                  type: REVIWER_DECLINE_SUCCESS,
                  payload: data,
            })
      } catch (error) {
            dispatch({
                  type: REVIWER_DECLINE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}


export const getResearcherById = (id) => async(dispatch, getState) => {
      try{
            dispatch({
                  type: REVIWER_RESEARCHER_BYID_REQUEST,
            })
            const {
                  userLogin: { userInfo },

            } = getState()

            const config = {
                      headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${userInfo.token}`,
                      },
            }
            const { data } = await axios.get(`http://localhost:8040/api/reviewdetails/reviwer/researcher/${id}`, config)

            dispatch({
                  type: REVIWER_RESEARCHER_BYID_SUCCESS,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: REVIWER_RESEARCHER_BYID_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }

}


export const approveReserach = (reserch) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: REVIWER_APPROVE_RESERCH_REQUEST,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  },
            }

            const { data } = await axios.put(`http://localhost:8040/api/reviewdetails/reserch/${reserch._id}/approved`, reserch, config)

            dispatch({
                  type: REVIWER_APPROVE_RESERCH_SUCCESS,
                  payload: data,
            })
      } catch (error) {
            dispatch({
                  type: REVIWER_APPROVE_RESERCH_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}


export const declineReserch = (reserch) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: REVIWER_DECLINE_RESERCH_REQUEST,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  },
            }

            const { data } = await axios.put(`http://localhost:8040/api/reviewdetails/reserch/${reserch._id}/declined`, reserch, config)

            dispatch({
                  type: REVIWER_DECLINE_RESERCH_SUCCESS,
                  payload: data,
            })
      } catch (error) {
            dispatch({
                  type: REVIWER_DECLINE_RESERCH_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}