import express from 'express'

const router = express.Router()

import { addConDetails, getAllConDetails, getCondetailsById, updateConDetails, getUnApprovedConDetails, getApprovedConDetails, deleteConDetails } from '../controllers/conferenceController.js'
import { getConDetailsById } from '../controllers/adminController.js'
import { protect, editor, admin } from '../middleware/authMiddleware.js'

router.post('/addConDetails', protect, editor, addConDetails)
router.get('/', getAllConDetails)
router.get('/approvedCon', getApprovedConDetails)
router.get('/unAprrovedCon', protect, editor, getUnApprovedConDetails)
router.route('/:id')
      .get(protect, editor, getCondetailsById)
      .delete(protect, editor, deleteConDetails)
      .put(protect, editor, updateConDetails)
router.get('/approvedCon', protect, editor, getApprovedConDetails)
router.get('/unAprrovedCon', protect, editor, getUnApprovedConDetails)

router.get('/admin/con/:id/', protect, admin, getConDetailsById)

export default router