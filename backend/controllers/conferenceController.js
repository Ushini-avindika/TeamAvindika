import asyncHandler from 'express-async-handler'
import ConferenceDetails from '../models/conferenceDetailsModel.js'

const addConDetails = asyncHandler(async (req, res) => {
      const conDetails = new ConferenceDetails({
            conname: 'conference Name',
            description: 'sample description',
            user: req.user._id,
            organizer: 'add organizer',
            phone: '1234567809',
            email: 'add email',
            startDate: '12/12/21',
            endDate: '',
            venue: 'add venue',
            isApproved: 'false'

      })

      const addConDetails = await conDetails.save()
      res.status(201).json(addConDetails)
})

const getAllConDetails = asyncHandler(async (req, res) => {
      const conDetails = await ConferenceDetails.find({})
      res.json(conDetails)
})

const getCondetailsById = asyncHandler(async (req, res) => {
      const conDetails = await ConferenceDetails.findById(req.params.id)

      if (conDetails) {
            res.json({
                  _id: conDetails._id,
                  conname: conDetails.conname,
                  description: conDetails.description,
                  organizer: conDetails.organizer,
                  phone: conDetails.phone,
                  email: conDetails.email,
                  startDate: conDetails.startDate,
                  endDate: conDetails.endDate,
                  venue: conDetails.venue,
                  isApproved: conDetails.isApproved,

            })
      } else {
            res.status(404)
            throw new Error('Conference Details not found')
      }
})

const updateConDetails = asyncHandler(async (req, res) => {
      const {
            conname,
            description,
            organizer,
            phone,
            email,
            startDate,
            endDate,
            venue,
            isApproved
      } = req.body

      const conDetails = await ConferenceDetails.findById(req.params.id)

      if (conDetails) {
            conDetails.conname = conname
            conDetails.description = description
            conDetails.organizer = organizer
            conDetails.phone = phone
            conDetails.email = email
            conDetails.startDate = startDate
            conDetails.endDate = endDate
            conDetails.venue = venue
            conDetails.isApproved = isApproved

            const updateConDetails = await conDetails.save()
            res.json(updateConDetails)


      } else {

            res.status(404)
            throw new Error('Conference details not found')

      }
})


const getApprovedConDetails = asyncHandler(async (req, res) => {
      const conDeatils = await ConferenceDetails.find({
            isApproved: true,
      })
      res.json(conDeatils)

})


const getUnApprovedConDetails = asyncHandler(async (req, res) => {
      const conDeatils = await ConferenceDetails.find({
            isApproved: false,
      })
      res.json(conDeatils)

})

const deleteConDetails = asyncHandler(async (req, res) => {
      const conDetails = await ConferenceDetails.findById(req.params.id)

      if (conDetails) {
            await conDetails.remove()
            res.json({ message: 'Conference Details removed' })
      } else {
            res.status(404)
            throw new Error('Conference details not found')
      }

})

export { addConDetails, getAllConDetails, getCondetailsById, updateConDetails, getApprovedConDetails, getUnApprovedConDetails, deleteConDetails }