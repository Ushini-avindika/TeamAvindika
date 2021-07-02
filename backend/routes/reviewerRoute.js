import express from 'express'
const router = express.Router()

import { getAllWorkshopDetails, getAllResearchDetails, updateWorkshopDeatils, getWorkshopById, declineWorkshopDeatils, getReasearchById, updateReserchDeatils, declineReserchDeatils } from '../controllers/reviewerController.js'
import { protect, reviver } from '../middleware/authMiddleware.js'

router.get('/reviwer/workshop/:id/', protect, reviver, getWorkshopById)
router.get('/reviwer/researcher/:id/', protect, reviver, getReasearchById)
router.get('/', getAllWorkshopDetails)
router.get('/research', getAllResearchDetails)
router.put('/workshop/:id/approved', protect, reviver, updateWorkshopDeatils)
router.put('/workshop/:id/declined', protect, reviver, declineWorkshopDeatils)
router.put('/reserch/:id/approved', protect, reviver, updateReserchDeatils)
router.put('/reserch/:id/declined', protect, reviver, declineReserchDeatils)

export default router 