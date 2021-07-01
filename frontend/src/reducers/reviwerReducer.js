import { WORKSHOP_LIST_REQUEST_REVIWER,
    WORKSHOP_LIST_SUCCESS_REVIWER,
    WORKSHOP_LIST_FAIL_REVIWER,
    WORKSHOP_LIST_RESET_REVIWER,
    RESEARCH_LIST_REQUEST_REVIWER,
    RESEARCH_LIST_SUCCESS_REVIWER,
    RESEARCH_LIST_FAIL_REVIWER
    
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
          case WORKSHOP_LIST_SUCCESS_REVIWER:
                return { loading: false, researchers: action.payload }
          case RESEARCH_LIST_SUCCESS_REVIWER:
                return { loading: false, error: action.payload }
          case RESEARCH_LIST_FAIL_REVIWER:
                return { researchers: [] }
          default:
                return state

    }
}

