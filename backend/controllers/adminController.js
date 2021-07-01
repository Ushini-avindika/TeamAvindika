import asyncHandler from 'express-async-handler'
import ConferenceDetails from '../models/conferenceDetailsModel.js'
import News from '../models/newsModel.js'
import User  from '../models/userModel.js'



//approve conference
const updateConferenceDeatils = asyncHandler(async(req, res) => {
    const conference = await ConferenceDetails.findById(req.params.id)

    if(conference) {
        conference.isApproved = true
        const updateApprovel = await conference.save()

        res.json(updateApprovel)
    }else {
        res.status(404)
        throw new Error('Conference not found')
    }
})

const declineConferenceDeatils = asyncHandler(async(req, res) => {
    const conference = await ConferenceDetails.findById(req.params.id)

    if(conference) {
        conference.isApproved = false
        const declineApprovel = await conference.save()

        res.json(declineApprovel)
    }else {
        res.status(404)
        throw new Error('Conference not found')
    }
})


const getEditorList = asyncHandler(async (req, res) => {
    const editors = await User.find({
        isEditor: true,
    })
    res.json(editors)

})

const getReviwerList = asyncHandler(async (req, res) => {
    const reviwer = await User.find({
        isReviwer: true,
    })
    res.json(reviwer)

})


//get sibgle conference details
const getConDetailsById = asyncHandler(async (req, res) => {
    const confDetails = await ConferenceDetails.findById(req.params.id)

    if (confDetails) {
          res.json({
                _id: confDetails._id,
                conname: confDetails.conname,
                description: confDetails.description,
                organizer: confDetails.organizer,
                phone: confDetails.phone,
                email: confDetails.email,
                startDate: confDetails.startDate,
                endDate: confDetails.endDate,
                venue: confDetails.venue,
                isApproved: confDetails.isApproved,

          })
    } else {
          res.status(404)
          throw new Error('Conference Details not found')
    }
})

const getAdminNewsById = asyncHandler(async (req, res) => {
    const adminNewsDetails = await News.findById(req.params.id)

    if (adminNewsDetails) {
          res.json({
                _id: adminNewsDetails._id,
                name: adminNewsDetails.name,
                date: adminNewsDetails.date,
                message: adminNewsDetails.message,
                isApproved: adminNewsDetails.isApproved

          })
    } else {
          res.status(404)
          throw new Error('News not found')
    }
})


const approveNewsDeatils = asyncHandler(async(req, res) => {
    const news = await News.findById(req.params.id)

    if(news) {
        news.isApproved = true
        const updateApprovel = await news.save()

        res.json(updateApprovel)
    }else {
        res.status(404)
        throw new Error('News not found')
    }
})


export { updateConferenceDeatils, getEditorList, getReviwerList, getConDetailsById, declineConferenceDeatils, getAdminNewsById, approveNewsDeatils }