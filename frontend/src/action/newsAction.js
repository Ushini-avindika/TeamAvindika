import axios from 'axios'
import {
      NEWS_LIST_REQUEST,
      NEWS_LIST_SUCCESS,
      NEWS_LIST_FAIL,
      NEWS_DELETE_REQUEST,
      NEWS_DELETE_SUCCESS,
      NEWS_DELETE_FAIL,
      NEWS_BYID_REQUEST,
      NEWS_BYID_SUCCESS,
      NEWS_BYID_FAIL,
      NEWS_UPDATE_REQUEST,
      NEWS_UPDATE_SUCCESS,
      NEWS_UPDATE_FAIL,
      NEWS_CREATE_REQUEST,
      NEWS_CREATE_SUCCESS,
      NEWS_CREATE_FAIL,
      NEWS_APPROVED_LIST_REQUEST,
      NEWS_APPROVED_LIST_SUCCESS,
      NEWS_APPROVED_LIST_FAIL,
      NEWS_APPROVED_LIST_RESET,
      NEWS_UNAPPROVED_LIST_REQUEST,
      NEWS_UNAPPROVED_LIST_SUCCESS,
      NEWS_UNAPPROVED_LIST_FAIL,

} from '../constants/newsConstants'

export const listAllNews = () => async (dispatch) => {
      try {
            dispatch({
                  type: NEWS_LIST_REQUEST,
            })

            const { data } = await axios.get('https://aficacapp.herokuapp.com/allNews')
            dispatch({
                  type: NEWS_LIST_SUCCESS,
                  payload: data
            })

      } catch (error) {
            dispatch({
                  type: NEWS_LIST_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const deleteNews = (id) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: NEWS_DELETE_REQUEST,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  },
            }

            await axios.delete(`http://localhost:8040/api/news/${id}`, config)

            dispatch({ type: NEWS_DELETE_SUCCESS })
      } catch (error) {
            dispatch({
                  type: NEWS_DELETE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const getNewsDetails = (id) => async (disaptch) => {
      try {
            disaptch({
                  type: NEWS_BYID_REQUEST,
            })

            const { data } = await axios.get(`http://localhost:8040/api/news/${id}`)

            disaptch({
                  type: NEWS_BYID_SUCCESS,
                  payload: data
            })
      } catch (error) {
            disaptch({
                  type: NEWS_BYID_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const updateNews = (news) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: NEWS_UPDATE_REQUEST
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

            const { data } = await axios.put(`http://localhost:8040/api/news/${news._id}`, news, config)

            dispatch({ type: NEWS_UPDATE_SUCCESS, payload: data })
      } catch (error) {
            dispatch({
                  type: NEWS_UPDATE_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}


export const createNewsDetails = () => async (dispatch, getState) => {
      try {
            dispatch({
                  type: NEWS_CREATE_REQUEST
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  },
            }

            const { data } = await axios.post('http://localhost:8040/api/news/addNews', {}, config)

            dispatch({
                  type: NEWS_CREATE_SUCCESS,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: NEWS_CREATE_FAIL,
                  payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
      }
}

export const listAppNews = () => async (dispatch) => {
      try {
            dispatch({
                  type: NEWS_APPROVED_LIST_REQUEST,
            })



            const { data } = await axios.get('http://localhost:8040/api/news/appNews')
            dispatch({
                  type: NEWS_APPROVED_LIST_SUCCESS,
                  payload: data
            })

      } catch (error) {
            dispatch({
                  type: NEWS_APPROVED_LIST_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const listUnAppNews = () => async (dispatch) => {
      try {
            dispatch({
                  type: NEWS_UNAPPROVED_LIST_REQUEST,
            })

            const { data } = await axios.get('http://localhost:8040/api/news/unappNews')

            dispatch({
                  type: NEWS_UNAPPROVED_LIST_SUCCESS,
                  payload: data
            })

      } catch (error) {
            dispatch({
                  type: NEWS_UNAPPROVED_LIST_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}