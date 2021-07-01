import { WORKSHOP_INSERT_REQUEST, WORKSHOP_INSERT_SUCESS, WORKSHOP_INSERT_FAIL } from "../constants/workshopConstants.js";

export const workshopInsert = (state = {}, action) => {
    switch (action.type) {
        case WORKSHOP_INSERT_REQUEST:
            return { loading: true }
        case WORKSHOP_INSERT_SUCESS:
            return { loading: false, workshopInfo: action.payload }
        case WORKSHOP_INSERT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}