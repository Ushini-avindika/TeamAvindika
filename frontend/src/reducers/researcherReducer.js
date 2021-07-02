import { RESEARCHER_INSERT_SUCESS, RESEARCHER_INSERT_REQUEST, RESEARCHER_INSERT_FAIL, RESEARCHER_APP_REQUEST, RESEARCHER_APP_SUCCESS, RESEARCHER_APP_FAIL, RESEARCHER_APP_RESET } from "../constants/researcherConstant.js";

export const researcherInsert = (state = {}, action) => {
    switch (action.type) {
        case RESEARCHER_INSERT_REQUEST:
            return { loading: true }
        case RESEARCHER_INSERT_SUCESS:
            return { loading: false, researcherInfo: action.payload }
        case RESEARCHER_INSERT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}

export const researchAppListReducer = (state = { research: [] }, action) => {
    switch (action.type) {
        case RESEARCHER_APP_REQUEST:
            return { loading: true }
        case RESEARCHER_APP_SUCCESS:
            return { loading: false, research: action.payload }
        case RESEARCHER_APP_FAIL:
            return { loading: false, error: action.payload }
        case RESEARCHER_APP_RESET:
            return { research: [] }
        default:
            return state
    }
}
