import express from 'express'
const router = express.Router()

import { insertPresenter, getAprrovedWorkshops } from '../controllers/workPresenterController.js'

router.post('/insertPresenter', insertPresenter)
router.get('/appWorkshop', getAprrovedWorkshops)

export default router