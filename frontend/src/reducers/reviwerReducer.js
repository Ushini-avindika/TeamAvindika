import { WORKSHOP_LIST_REQUEST_REVIWER,
    WORKSHOP_LIST_SUCCESS_REVIWER,
    WORKSHOP_LIST_FAIL_REVIWER,
    WORKSHOP_LIST_RESET_REVIWER,
    RESEARCH_LIST_REQUEST_REVIWER,
    RESEARCH_LIST_SUCCESS_REVIWER,
    RESEARCH_LIST_FAIL_REVIWER,
    RESEARCH_LIST_RESET_REVIWER,
    REVIWER_APPROVE_WORKSHOP_REQUEST,
    REVIWER_APPROVE_WORKSHOP_SUCCESS,
    REVIWER_APPROVE_WORKSHOP_FAIL,
    REVIWER_GETWORKSHOP_BYID_REQUEST,
    REVIWER_GETWORKSHOP_BYID_SUCCESS,
    REVIWER_GETWORKSHOP_BYID_FAIL,
    REVIWER_GETWORKSHOP_BYID_RESET,
    REVIWER_DECLINE_REQUEST,
    REVIWER_DECLINE_SUCCESS,
    REVIWER_DECLINE_FAIL,
    REVIWER_RESEARCHER_BYID_REQUEST,
    REVIWER_RESEARCHER_BYID_SUCCESS,
    REVIWER_RESEARCHER_BYID_FAIL,
    REVIWER_RESEARCHER_BYID_RESET,
    REVIWER_APPROVE_RESERCH_REQUEST,
    REVIWER_APPROVE_RESERCH_SUCCESS,
    REVIWER_APPROVE_RESERCH_FAIL,
    REVIWER_DECLINE_RESERCH_REQUEST,
    REVIWER_DECLINE_RESERCH_SUCCESS,
    REVIWER_DECLINE_RESERCH_FAIL
    
} from '../constants/reviwerConstants.js'



export const getAllWorkshop = (state = { workshops: [] }, action) => {
    switch (action.type) {
          case WORKSHOP_LIST_REQUEST_REVIWER:
                return { loading: true }
          case WORKSHOP_LIST_SUCCESS_REVIWER:
                return { loading: false, workshops: action.payload }
          case WORKSHOP_LIST_FAIL_REVIWER:
                return { loading: false, error: action.payload }
          case WORKSHOP_LIST_RESET_REVIWER:
                return { workshops: [] }
          default:
                return state

    }
}


export const getAllResearch = (state = { researchers: [] }, action) => {
      switch (action.type) {
            case RESEARCH_LIST_REQUEST_REVIWER:
                  return { loading: true }
            case RESEARCH_LIST_SUCCESS_REVIWER:
                  return { loading: false, researchers: action.payload }
            case RESEARCH_LIST_FAIL_REVIWER:
                  return { loading: false, error: action.payload }
            case RESEARCH_LIST_RESET_REVIWER:
                  return { researchers: [] }
            default:
                  return state
  
      }
  }

  export const getWorkshopDetailsById = (state = { workshops:[] }, action)  => {
      switch (action.type) {
            case REVIWER_GETWORKSHOP_BYID_REQUEST:
                  return { loading: true }
            case REVIWER_GETWORKSHOP_BYID_SUCCESS:
                  return { loading: false, workshops: action.payload }
            case REVIWER_GETWORKSHOP_BYID_FAIL:
                  return { loading: false, error: action.payload }
            case REVIWER_GETWORKSHOP_BYID_RESET:
                  return { workshops: [] }
            default:
                  return state
      }
  }



  export const approveWorkshopReducer = (state = {workshops: {}} , action) => {
      switch (action.type) {
          case REVIWER_APPROVE_WORKSHOP_REQUEST:
                  return { loading: true }
          case REVIWER_APPROVE_WORKSHOP_SUCCESS:
                return { loading: false, success: true }
          case REVIWER_APPROVE_WORKSHOP_FAIL:
                return { loading: false, error: action.payload}
          default:
                return state
      }
}

export const declineWorkshopReducer = (state = {workshops: {}} , action) => {
      switch (action.type) {
          case REVIWER_DECLINE_REQUEST:
                  return { loading: true }
          case REVIWER_DECLINE_SUCCESS:
                return { loading: false, success: true }
          case REVIWER_DECLINE_FAIL:
                return { loading: false, error: action.payload}
          default:
                return state
      }
}


export const getResearchDetailsById = (state = { reserchers:[] }, action)  => {
      switch (action.type) {
            case REVIWER_RESEARCHER_BYID_REQUEST:
                  return { loading: true }
            case REVIWER_RESEARCHER_BYID_SUCCESS:
                  return { loading: false, reserchers: action.payload }
            case REVIWER_RESEARCHER_BYID_FAIL:
                  return { loading: false, error: action.payload }
            case REVIWER_RESEARCHER_BYID_RESET:
                  return { reserchers: [] }
            default:
                  return state
      }
  }


  export const approveReserchReducer = (state = {reserchers: {}} , action) => {
      switch (action.type) {
          case REVIWER_APPROVE_RESERCH_REQUEST:
                  return { loading: true }
          case REVIWER_APPROVE_RESERCH_SUCCESS:
                return { loading: false, success: true }
          case REVIWER_APPROVE_RESERCH_FAIL:
                return { loading: false, error: action.payload}
          default:
                return state
      }
}

export const declineReserchReducer = (state = {reserchers: {}} , action) => {
      switch (action.type) {
          case REVIWER_DECLINE_RESERCH_REQUEST:
                  return { loading: true }
          case REVIWER_DECLINE_RESERCH_SUCCESS:
                return { loading: false, success: true }
          case REVIWER_DECLINE_RESERCH_FAIL:
                return { loading: false, error: action.payload}
          default:
                return state
      }
}


