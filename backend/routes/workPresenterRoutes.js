import express from 'express'
const router = express.Router()

import { insertPresenter } from '../controllers/workPresenterController.js'

router.post('/insertPresenter', insertPresenter)

export default router