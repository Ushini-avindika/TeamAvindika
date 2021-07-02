import {
    WORKSHOP_INSERT_REQUEST,
    WORKSHOP_INSERT_SUCESS,
    WORKSHOP_INSERT_FAIL,
    WORKSHOP_APP_REQUEST,
    WORKSHOP_APP_SUCCESS,
    WORKSHOP_APP_FAIL,
    WORKSHOP_APP_RESET

} from "../constants/workshopConstants.js";

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

export const workshopAppListReducer = (state = { workshop: [] }, action) => {
    switch (action.type) {
        case WORKSHOP_APP_REQUEST:
            return { loading: true }
        case WORKSHOP_APP_SUCCESS:
            return { loading: false, workshop: action.payload }
        case WORKSHOP_APP_FAIL:
            return { loading: false, error: action.payload }
        case WORKSHOP_APP_RESET:
            return { workshop: [] }
        default:
            return state
    }
}