import { RESEARCHER_INSERT_SUCESS, RESEARCHER_INSERT_REQUEST, RESEARCHER_INSERT_FAIL } from "../constants/researcherConstant.js";

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
