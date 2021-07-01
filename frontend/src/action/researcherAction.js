import axios from "axios";
import { RESEARCHER_INSERT_REQUEST, RESEARCHER_INSERT_SUCESS, RESEARCHER_INSERT_FAIL } from "../constants/researcherConstant.js";

export const researchAdd = (researcherPaper, researcherDes, researchInsertDoc, researchIsApproved) => async (dispatch) => {
    try {
        dispatch({
            type: RESEARCHER_INSERT_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:8040/api/researcher/insertResearcher', { researcherPaper, researcherDes, researchInsertDoc, researchIsApproved },
            config
        )

        dispatch({
            type: RESEARCHER_INSERT_SUCESS,
            payload: data,
        })


        localStorage.setItem('researchInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: RESEARCHER_INSERT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}