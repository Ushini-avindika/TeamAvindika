import express from 'express'
const router = express.Router()

import { getAprrovedResearch, insertResearcher } from '../controllers/researchController.js'

router.post('/insertResearcher', insertResearcher)
router.get('/appResearch', getAprrovedResearch)


export default router