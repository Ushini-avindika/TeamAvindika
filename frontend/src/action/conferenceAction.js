import axios from 'axios'
import {
      CONFERENCE_LIST_REQUEST,
      CONFERENCE_LIST_SUCCESS,
      CONFERENCE_LIST_RESET,
      CONFERENCE_LIST_FAIL,
      CONFERENCE_APPROVED_LIST_REQUEST,
      CONFERENCE_APPROVED_LIST_SUCCESS,
      CONFERENCE_APPROVED_LIST_RESET,
      CONFERENCE_APPROVED_LIST_FAIL,
      CONFERENCE_UNAPPROVED_LIST_REQUEST,
      CONFERENCE_UNAPPROVED_LIST_SUCCESS,
      CONFERENCE_UNAPPROVED_LIST_FAIL,
      CONFERENCE_UNAPPROVED_LIST_RESET,
      CONFERENCE_DETAILS_DELETE_REQUEST,
      CONFERENCE_DETAILS_DELETE_SUCCESS,
      CONFERENCE_DETAILS_DELETE_FAIL,
      CONFERENCE_DETAILS_UPDATE_REQUEST,
      CONFERENCE_DETAILS_UPDATE_SUCCESS,
      CONFERENCE_DETAILS_UPDATE_FAIL,
      CONFERENCE_DETAILS_UPDATE_RESET,
      CONFERENCE_DETAILS_BYID_RESET,
      CONFERENCE_DETAILS_BYID_REQUEST,
      CONFERENCE_DETAILS_BYID_FAIL,
      CONFERENCE_DETAILS_BYID_SUCCESS,
      CONFERENCE_DETAILS_CREATE_REQUEST,
      CONFERENCE_DETAILS_CREATE_SUCCESS,
      CONFERENCE_DETAILS_CREATE_FAIL,
      CONFERENCE_DETAILS_CREATE_RESET,

} from '../constants/conferenceConstants'

export const listConDetails = () => async (dispatch) => {
      try {
            dispatch({
                  type: CONFERENCE_LIST_REQUEST,
            })
            // const {
            //       userLogin: { userInfo },
            // } = getState()

            // const config = {
            //       headers: {
            //             Authorization: `Bearer ${userInfo.token}`,
            //       },
            // }

            const { data } = await axios.get('http://localhost:8040/api/conDetails/')

            dispatch({
                  type: CONFERENCE_LIST_SUCCESS,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: CONFERENCE_LIST_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const appConList = () => async (dispatch) => {
      try {
            dispatch({
                  type: CONFERENCE_APPROVED_LIST_REQUEST,
            })


            const { data } = await axios.get('http://localhost:8040/api/conDetails/approvedCon')

            dispatch({
                  type: CONFERENCE_APPROVED_LIST_SUCCESS,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: CONFERENCE_APPROVED_LIST_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const unappConList = () => async (dispatch, getState) => {
      try {
            dispatch({
                  type: CONFERENCE_UNAPPROVED_LIST_REQUEST,
            })
            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  },
            }

            const { data } = await axios.get('http://localhost:8040/api/conDetails/unAprrovedCon', config)

            dispatch({
                  type: CONFERENCE_UNAPPROVED_LIST_SUCCESS,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: CONFERENCE_UNAPPROVED_LIST_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const deleteConDetails = (id) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: CONFERENCE_DETAILS_DELETE_REQUEST,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  },
            }

            await axios.delete(`http://localhost:8040/api/conDetails/${id}`, config)

            dispatch({ type: CONFERENCE_DETAILS_DELETE_SUCCESS })

      } catch (error) {
            dispatch({
                  type: CONFERENCE_DETAILS_CREATE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}



export const getConferenceDetails = (id) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: CONFERENCE_DETAILS_BYID_REQUEST,
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

            const { data } = await axios.get(`http://localhost:8040/api/conDetails/${id}`, config)

            dispatch({
                  type: CONFERENCE_DETAILS_BYID_SUCCESS,
                  payload: data
            })

      } catch (error) {
            dispatch({
                  type: CONFERENCE_DETAILS_BYID_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const updateConDetails = (conferencedetails) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: CONFERENCE_DETAILS_UPDATE_REQUEST
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

            const { data } = await axios.put(`http://localhost:8040/api/conDetails/${conferencedetails._id}`, conferencedetails, config)



            dispatch({ type: CONFERENCE_DETAILS_UPDATE_SUCCESS, payload: data })


      } catch (error) {
            dispatch({
                  type: CONFERENCE_DETAILS_UPDATE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const createConDetails = () => async (dispatch, getState) => {
      try {
            dispatch({
                  type: CONFERENCE_DETAILS_CREATE_REQUEST
            })
            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  },
            }

            const { data } = await axios.post('http://localhost:8040/api/conDetails/addConDetails/', {}, config)

            dispatch({
                  type: CONFERENCE_DETAILS_CREATE_SUCCESS,
                  payload: data,
            })

      } catch (error) {
            dispatch({
                  type: CONFERENCE_DETAILS_DELETE_FAIL,
                  payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
      }
}