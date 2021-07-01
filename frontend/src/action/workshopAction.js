import axios from "axios";
import { WORKSHOP_INSERT_REQUEST, WORKSHOP_INSERT_SUCESS, WORKSHOP_INSERT_FAIL } from "../constants/workshopConstants.js";

export const workshopAdd = (workshopName, workshopDes, workTimeFrom, workTimeTo, workDate, workInsertDoc, workIsApprove) => async (dispatch) => {
    try {
        dispatch({
            type: WORKSHOP_INSERT_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:8040/api/presenter/insertPresenter', { workshopName, workshopDes, workTimeFrom, workTimeTo, workDate, workInsertDoc, workIsApprove },
            config
        )

        dispatch({
            type: WORKSHOP_INSERT_SUCESS,
            payload: data,
        })


        localStorage.setItem('workshopInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: WORKSHOP_INSERT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}