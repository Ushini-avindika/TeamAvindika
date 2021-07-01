import express from 'express'

const router = express.Router()

import { getApprovedResaerchPapers,getUnApprovedResaerchPapers,approvalDecision } from '../controllers/reasearchpapersController.js'

router.get('/',getApprovedResaerchPapers)
router.get('/',getUnApprovedResaerchPapers)
router.get('/',approvalDecision)

export default router