import express from 'express'
const router = express.Router()

import { insertResearcher } from '../controllers/researchController.js'

router.post('/insertResearcher', insertResearcher)


export default router