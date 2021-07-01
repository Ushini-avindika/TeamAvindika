import {
      CONFERENCE_LIST_REQUEST,
      CONFERENCE_LIST_SUCCESS,
      CONFERENCE_LIST_FAIL,
      CONFERENCE_LIST_RESET,
      CONFERENCE_APPROVED_LIST_REQUEST,
      CONFERENCE_APPROVED_LIST_SUCCESS,
      CONFERENCE_APPROVED_LIST_FAIL,
      CONFERENCE_APPROVED_LIST_RESET,
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
      CONFERENCE_DETAILS_BYID_REQUEST,
      CONFERENCE_DETAILS_BYID_SUCCESS,
      CONFERENCE_DETAILS_BYID_FAIL,
      CONFERENCE_DETAILS_BYID_RESET,
      CONFERENCE_DETAILS_CREATE_REQUEST,
      CONFERENCE_DETAILS_CREATE_SUCCESS,
      CONFERENCE_DETAILS_CREATE_FAIL,
      CONFERENCE_DETAILS_CREATE_RESET,
} from '../constants/conferenceConstants.js'


export const conListReducer = (state = { conferencedetails: [] }, action) => {
      switch (action.type) {
            case CONFERENCE_LIST_REQUEST:
                  return { loading: true }
            case CONFERENCE_LIST_SUCCESS:
                  return { loading: false, conferencedetails: action.payload }
            case CONFERENCE_LIST_FAIL:
                  return { loading: false, error: action.payload }
            case CONFERENCE_LIST_RESET:
                  return { conferencedetails: [] }
            default:
                  return state

      }
}

export const conApprovedReduceer = (state = { conferencedetails: [] }, action) => {
      switch (action.type) {
            case CONFERENCE_APPROVED_LIST_REQUEST:
                  return { loading: true }
            case CONFERENCE_APPROVED_LIST_SUCCESS:
                  return { loading: false, conferencedetails: action.payload }
            case CONFERENCE_APPROVED_LIST_FAIL:
                  return { loading: false, error: action.payload }
            case CONFERENCE_APPROVED_LIST_RESET:
                  return { conferencedetails: [] }
            default:
                  return state
      }
}

export const conUnApprovedReduceer = (state = { conferencedetails: [] }, action) => {
      switch (action.type) {
            case CONFERENCE_UNAPPROVED_LIST_REQUEST:
                  return { loading: true }
            case CONFERENCE_UNAPPROVED_LIST_SUCCESS:
                  return { loading: false, conferencedetails: action.payload }
            case CONFERENCE_UNAPPROVED_LIST_FAIL:
                  return { loading: false, error: action.payload }
            case CONFERENCE_UNAPPROVED_LIST_RESET:
                  return { conferencedetails: [] }
            default:
                  return state
      }
}

export const conDetailsDeleteReducer = (state = {}, action) => {
      switch (action.type) {
            case CONFERENCE_DETAILS_DELETE_REQUEST:
                  return { loading: true }
            case CONFERENCE_DETAILS_DELETE_SUCCESS:
                  return { loading: false, success: true }
            case CONFERENCE_DETAILS_DELETE_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}

export const conDetailsUpdateReducer = (state = { conferencedetails: {} }, action) => {
      switch (action.type) {
            case CONFERENCE_DETAILS_UPDATE_REQUEST:
                  return { loading: true }
            case CONFERENCE_DETAILS_UPDATE_SUCCESS:
                  return { loading: false, success: true, conferencedetails: action.payload }
            case CONFERENCE_DETAILS_UPDATE_FAIL:
                  return { loading: false, error: action.payload }
            case CONFERENCE_DETAILS_UPDATE_RESET:
                  return { conferencedetails: {} }
            default:
                  return state
      }
}

export const conDetailsReducer = (state = { conferencedetails: {} }, action) => {
      switch (action.type) {
            case CONFERENCE_DETAILS_BYID_REQUEST:
                  return { ...state, loading: true }
            case CONFERENCE_DETAILS_BYID_SUCCESS:
                  return { loading: false, conferencedetails: action.payload }
            case CONFERENCE_DETAILS_BYID_FAIL:
                  return { loading: false, error: action.payload }
            case CONFERENCE_DETAILS_BYID_RESET:
                  return { conferencedetails: {} }
            default:
                  return state
      }
}

export const conCreateReducer = (state = {}, action) => {
      switch (action.type) {
            case CONFERENCE_DETAILS_CREATE_REQUEST:
                  return { loading: true }
            case CONFERENCE_DETAILS_CREATE_SUCCESS:
                  return { loading: false, success: true, conferencedetails: action.payload }
            case CONFERENCE_DETAILS_CREATE_FAIL:
                  return { loading: false, error: action.payload }
            case CONFERENCE_DETAILS_CREATE_RESET:
                  return {}
            default:
                  return state
      }
}