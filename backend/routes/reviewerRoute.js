import express from 'express'
const router = express.Router()

import { getAllWorkshopDetails, getAllResearchDetails } from '../controllers/reviewerController.js'
import { protect, reviver } from '../middleware/authMiddleware.js'

router.get('/', protect, reviver, getAllWorkshopDetails)
router.get('/research', protect, reviver, getAllResearchDetails)

export default router 