import axios from 'axios'
import {
      CONFERENCE_LIST_REQUEST_ADMIN,
      CONFERENCE_LIST_SUCCESS_ADMIN,
      CONFERENCE_LIST_FAIL_ADMIN,
      EDITORS_LIST_REQUEST_ADMIN,
      EDITORS_LIST_SUCCESS_ADMIN,
      EDITORS_LIST_FAIL_ADMIN,
      REVIWER_LIST_REQUEST_ADMIN,
      REVIWER_LIST_SUCCESS_ADMIN,
      REVIWER_LIST_FAIL_ADMIN,
      ADMIN_CONFERENCE_DETAILS_ID_REQUEST,
      ADMIN_CONFERENCE_DETAILS_ID_SUCCESS,
      ADMIN_CONFERENCE_DETAILS_ID_FAIL,
      ADMIN_APPROVED_REQUEST,
      ADMIN_APPROVED_SUCCESS,
      ADMIN_APPROVED_FAIL,
      ADMIN_DECLINE_REQUEST,
      ADMIN_DECLINE_SUCCESS,
      ADMIN_DECLINE_FAIL,
      ADMIN_NEWS_LIST_REQUEST,
      ADMIN_NEWS_LIST_SUCCESS,
      ADMIN_NEWS_LIST_FAIL,
      ADMIN_NEWS_DETAILS_ID_REQUEST,
      ADMIN_NEWS_DETAILS_ID_SUCCESS,
      ADMIN_NEWS_DETAILS_ID_FAIL,
      ADMIN_APPROVED_NEWS_REQUEST,
      ADMIN_APPROVED_NEWS_SUCCESS,
      ADMIN_APPROVED_NEWS_FAIL

      
} from '../constants/adminConstants.js'



export const AdminconferenceList = () => async (dispatch, getState) => {
      try {
            dispatch({
                  type: CONFERENCE_LIST_REQUEST_ADMIN,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  }
            }

            const { data } = await axios.get('http://localhost:8040/api/conDetails/', config)

            dispatch({
                  type: CONFERENCE_LIST_SUCCESS_ADMIN,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: CONFERENCE_LIST_FAIL_ADMIN,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}


export const getEditorsList = () => async(dispatch, getState) => {
      try {
            dispatch({
                  type: EDITORS_LIST_REQUEST_ADMIN,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  }
            }

            const { data } = await axios.get('http://localhost:8040/api/admin/editor', config)

            dispatch({
                  type: EDITORS_LIST_SUCCESS_ADMIN,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: EDITORS_LIST_FAIL_ADMIN,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}


export const getReviwerList = () => async(dispatch, getState) => {
      try {
            dispatch({
                  type: REVIWER_LIST_REQUEST_ADMIN,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  }
            }

            const { data } = await axios.get('http://localhost:8040/api/admin/reviwer', config)

            dispatch({
                  type: REVIWER_LIST_SUCCESS_ADMIN,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: REVIWER_LIST_FAIL_ADMIN,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}


export const getConferenceDetailsById = (id) => async(dispatch, getState) => {
      try{
            dispatch({
                  type: ADMIN_CONFERENCE_DETAILS_ID_REQUEST,
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
            const { data } = await axios.get(`http://localhost:8040/api/conDetails/admin/con/${id}`, config)

            dispatch({
                  type: ADMIN_CONFERENCE_DETAILS_ID_SUCCESS,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: ADMIN_CONFERENCE_DETAILS_ID_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }

}


export const approveConference = (conferencedetails) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: ADMIN_APPROVED_REQUEST,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  },
            }

            const { data } = await axios.put(`http://localhost:8040/api/admin/${conferencedetails._id}/approved`, conferencedetails, config)

            dispatch({
                  type: ADMIN_APPROVED_SUCCESS,
                  payload: data,
            })
      } catch (error) {
            dispatch({
                  type: ADMIN_APPROVED_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const declineConference = (conferencedetails) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: ADMIN_DECLINE_REQUEST,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  },
            }

            const { data } = await axios.put(`http://localhost:8040/api/admin/${conferencedetails._id}/decline`, conferencedetails, config)

            dispatch({
                  type: ADMIN_DECLINE_SUCCESS,
                  payload: data,
            })
      } catch (error) {
            dispatch({
                  type: ADMIN_DECLINE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}


export const adminNewsList = () => async (dispatch) => {
      try {
            dispatch({
                  type: ADMIN_NEWS_LIST_REQUEST,
            })

            const { data } = await axios.get('http://localhost:8040/api/news/allNews')
            dispatch({
                  type: ADMIN_NEWS_LIST_SUCCESS,
                  payload: data
            })

      } catch (error) {
            dispatch({
                  type: ADMIN_NEWS_LIST_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}


export const getNewsById = (id) => async(dispatch, getState) => {
      try{
            dispatch({
                  type: ADMIN_NEWS_DETAILS_ID_REQUEST,
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
            const { data } = await axios.get(`http://localhost:8040/api/news/admin/news/${id}`, config)

            dispatch({
                  type: ADMIN_NEWS_DETAILS_ID_SUCCESS,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: ADMIN_NEWS_DETAILS_ID_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }

}

export const approveNews = (news) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: ADMIN_APPROVED_NEWS_REQUEST,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  },
            }

            const { data } = await axios.put(`http://localhost:8040/api/admin/news/${news._id}/approved`, news, config)

            dispatch({
                  type: ADMIN_APPROVED_NEWS_SUCCESS,
                  payload: data,
            })
      } catch (error) {
            dispatch({
                  type: ADMIN_APPROVED_NEWS_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}