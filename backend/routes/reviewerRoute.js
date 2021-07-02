import express from 'express'
const router = express.Router()

import { getAllWorkshopDetails, getAllResearchDetails, updateWorkshopDeatils, getWorkshopById, declineWorkshopDeatils } from '../controllers/reviewerController.js'
import { protect, reviver } from '../middleware/authMiddleware.js'

router.get('/reviwer/workshop/:id/', protect, reviver, getWorkshopById)
router.get('/', protect, reviver, getAllWorkshopDetails)
router.get('/research', protect, reviver, getAllResearchDetails)
router.put('/workshop/:id/approved', protect, reviver, updateWorkshopDeatils)
router.put('/workshop/:id/declined', protect, reviver, declineWorkshopDeatils)

export default router 