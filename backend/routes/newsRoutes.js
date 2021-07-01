import express from 'express'

const router = express.Router()

import { createNews, updateNews, deleteNews, getAllNews, getAprrovedNews, getNewsById, getUnAprrovedNews } from '../controllers/newsController.js'
import { protect, editor, admin, } from '../middleware/authMiddleware.js'
import { getAdminNewsById } from '../controllers/adminController.js'


router.post('/addNews', protect, editor, createNews)
router.get('/allNews', getAllNews)
router.get('/appNews', getAprrovedNews)
router.get('/unappNews', getUnAprrovedNews)
router.get('/:id', getNewsById)
router.route('/:id')
      .put(protect, editor, updateNews)
      .delete(protect, editor, deleteNews)



router.get('/admin/news/:id', protect, admin, getAdminNewsById)

export default router


