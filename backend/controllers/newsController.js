import asyncHandler from 'express-async-handler'
import News from '../models/newsModel.js'

const createNews = asyncHandler(async (req, res) => {
      const newsDetails = new News({
            name: "name",
            date: '12/12/21',
            user: req.user._id,
            message: "message",
            isApproved: 'false',
      })
      const createdNews = await newsDetails.save()
      res.status(201).json(createdNews)
})

const updateNews = asyncHandler(async (req, res) => {
      const {
            name,
            date,
            message,
            isApproved
      } = req.body

      const newsDetails = await News.findById(req.params.id)

      if (newsDetails) {
            newsDetails.name = name
            newsDetails.date = date
            newsDetails.message = message
            newsDetails.isApproved = isApproved

            const updatedNews = await newsDetails.save()
            res.json(updatedNews)
      } else {
            res.status(404)
            throw new Error('News not found')
      }
})

const deleteNews = asyncHandler(async (req, res) => {
      const newsDetails = await News.findById(req.params.id)

      if (newsDetails) {
            await newsDetails.remove()
            res.json({ message: 'News removed' })
      } else {
            res.status(404)
            throw new Error('News not found')
      }


})

const getAllNews = asyncHandler(async (req, res) => {
      const newsDetails = await News.find({})
      res.json(newsDetails)
})

const getNewsById = asyncHandler(async (req, res) => {
      const newsDetails = await News.findById(req.params.id)

      if (newsDetails) {
            res.json({
                  _id: newsDetails._id,
                  name: newsDetails.name,
                  date: newsDetails.date,
                  message: newsDetails.message,
                  isApproved: newsDetails.isApproved

            })
      } else {
            res.status(404)
            throw new Error('News not found')
      }
})

const getAprrovedNews = asyncHandler(async (req, res) => {
      const newsDetails = await News.find({
            isApproved: true,
      })
      res.json(newsDetails)
})

const getUnAprrovedNews = asyncHandler(async (req, res) => {
      const news = await News.find({
            isApproved: false,
      })
      res.json(news)
})



export { createNews, getNewsById, updateNews, deleteNews, getAllNews, getAprrovedNews, getUnAprrovedNews }