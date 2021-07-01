import express from 'express'
const router = express.Router()
import { updateConferenceDeatils, getEditorList, getReviwerList, declineConferenceDeatils, approveNewsDeatils } from '../controllers/adminController.js'

import { protect, admin } from '../middleware/authMiddleware.js'


router.put('/:id/approved', protect, admin, updateConferenceDeatils)
router.put('/:id/decline', protect, admin, declineConferenceDeatils)

router.put('/news/:id/approved', protect, admin, approveNewsDeatils)

router.get('/editor', protect,admin, getEditorList)
router.get('/reviwer', protect,admin, getReviwerList)


export default router