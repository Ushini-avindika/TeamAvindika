import axios from 'axios'
import { WORKSHOP_LIST_REQUEST_REVIWER,
    WORKSHOP_LIST_SUCCESS_REVIWER,
    WORKSHOP_LIST_FAIL_REVIWER,
    WORKSHOP_LIST_RESET_REVIWER,
    RESEARCH_LIST_REQUEST_REVIWER,
    RESEARCH_LIST_SUCCESS_REVIWER,
    RESEARCH_LIST_FAIL_REVIWER,
} from '../constants/reviwerConstants.js'


export const getAllWorkshops = () => async (dispatch, getState) => {
    try {
          dispatch({
                type: WORKSHOP_LIST_REQUEST_REVIWER,
          })
          const {
                userLogin: { userInfo },
          } = getState()

          const config = {
                headers: {
                      Authorization: `Bearer ${userInfo.token}`,
                },
          }

          const { data } = await axios.get('http://localhost:8040/api/reviewdetails/', config)

          dispatch({
                type: WORKSHOP_LIST_SUCCESS_REVIWER,
                payload: data
          })
    } catch (error) {
          dispatch({
                type: WORKSHOP_LIST_FAIL_REVIWER,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}


export const getAllResearch = () => async (dispatch, getState) => {
    try {
          dispatch({
                type: RESEARCH_LIST_REQUEST_REVIWER,
          })
          const {
                userLogin: { userInfo },
          } = getState()

          const config = {
                headers: {
                      Authorization: `Bearer ${userInfo.token}`,
                },
          }

          const { data } = await axios.get('localhost:8040/api/reviewdetails/research', config)

          dispatch({
                type: RESEARCH_LIST_SUCCESS_REVIWER,
                payload: data
          })
    } catch (error) {
          dispatch({
                type: RESEARCH_LIST_FAIL_REVIWER,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}