import {
      NEWS_LIST_REQUEST,
      NEWS_LIST_SUCCESS,
      NEWS_LIST_FAIL,
      NEWS_LIST_RESET,
      NEWS_DELETE_REQUEST,
      NEWS_DELETE_SUCCESS,
      NEWS_DELETE_FAIL,
      NEWS_BYID_REQUEST,
      NEWS_BYID_SUCCESS,
      NEWS_BYID_FAIL,
      NEWS_BYID_RESET,
      NEWS_UPDATE_REQUEST,
      NEWS_UPDATE_SUCCESS,
      NEWS_UPDATE_FAIL,
      NEWS_UPDATE_RESET,
      NEWS_CREATE_REQUEST,
      NEWS_CREATE_SUCCESS,
      NEWS_CREATE_FAIL,
      NEWS_CREATE_RESET,
      NEWS_APPROVED_LIST_REQUEST,
      NEWS_APPROVED_LIST_SUCCESS,
      NEWS_APPROVED_LIST_FAIL,
      NEWS_APPROVED_LIST_RESET,
      NEWS_UNAPPROVED_LIST_REQUEST,
      NEWS_UNAPPROVED_LIST_SUCCESS,
      NEWS_UNAPPROVED_LIST_FAIL,
      NEWS_UNAPPROVED_LIST_RESET,
} from '../constants/newsConstants.js'

export const newsListReducer = (state = { news: [] }, action) => {
      switch (action.type) {
            case NEWS_LIST_REQUEST:
                  return { loading: true }
            case NEWS_LIST_SUCCESS:
                  return { loading: false, news: action.payload }
            case NEWS_LIST_FAIL:
                  return { loading: false, error: action.payload }
            case NEWS_LIST_RESET:
                  return { news: [] }
            default:
                  return state
      }
}

export const newsDeleteReducer = (state = {}, action) => {
      switch (action.type) {
            case NEWS_DELETE_REQUEST:
                  return { loading: true }
            case NEWS_DELETE_SUCCESS:
                  return { loading: false, success: true }
            case NEWS_DELETE_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}

export const newsgetReducer = (state = { news: {} }, action) => {
      switch (action.type) {
            case NEWS_BYID_REQUEST:
                  return { ...state, loading: true }
            case NEWS_BYID_SUCCESS:
                  return { loading: false, news: action.payload }
            case NEWS_BYID_FAIL:
                  return { loading: false, error: action.payload }
            case NEWS_BYID_RESET:
                  return { news: {} }
            default:
                  return state

      }
}

export const newsUpadateReducer = (state = { news: {} }, action) => {
      switch (action.type) {
            case NEWS_UPDATE_REQUEST:
                  return { loading: true }
            case NEWS_UPDATE_SUCCESS:
                  return { loading: false, success: true, news: action.payload }
            case NEWS_UPDATE_FAIL:
                  return { loading: false, error: action.payload }
            case NEWS_UPDATE_RESET:
                  return { news: {} }
            default:
                  return state
      }
}

export const newsCreateReducer = (state = {}, action) => {
      switch (action.type) {
            case NEWS_CREATE_REQUEST:
                  return { loading: true }
            case NEWS_CREATE_SUCCESS:
                  return { loading: false, success: true, news: action.payload }
            case NEWS_CREATE_FAIL:
                  return { loading: false, error: action.payload }
            case NEWS_CREATE_RESET:
                  return {}
            default:
                  return state

      }
}

export const newsApprovedListReducer = (state = { news: [] }, action) => {
      switch (action.type) {
            case NEWS_APPROVED_LIST_REQUEST:
                  return { loading: true }
            case NEWS_APPROVED_LIST_SUCCESS:
                  return { loading: false, news: action.payload }
            case NEWS_APPROVED_LIST_FAIL:
                  return { loading: false, error: action.payload }
            case NEWS_APPROVED_LIST_RESET:
                  return { news: [] }
            default:
                  return state
      }
}

export const newsUnApprovedListReducer = (state = { news: [] }, action) => {
      switch (action.type) {
            case NEWS_UNAPPROVED_LIST_REQUEST:
                  return { loading: true }
            case NEWS_UNAPPROVED_LIST_SUCCESS:
                  return { loading: false, news: action.payload }
            case NEWS_UNAPPROVED_LIST_FAIL:
                  return { loading: false, error: action.payload }
            case NEWS_UNAPPROVED_LIST_RESET:
                  return { news: [] }
            default:
                  return state
      }
}

