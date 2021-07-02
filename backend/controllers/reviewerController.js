import asyncHandler from 'express-async-handler'
import Workshop from '../models/workPresenterModel.js'
import Researcher from '../models/researchModel.js'




const getAllWorkshopDetails = asyncHandler(async (req, res) => {
  const workDetails = await Workshop.find({})
  res.json(workDetails)
})


const getAllResearchDetails = asyncHandler(async (req, res) => {
    const reskDetails = await Researcher.find({})
    res.json(reskDetails)
  })
  

  const getWorkshopById = asyncHandler(async (req, res) => {
    const reviwerWorkshopDetails = await Workshop.findById(req.params.id)

    if (reviwerWorkshopDetails) {
          res.json({
                _id: reviwerWorkshopDetails._id,
                workshopName: reviwerWorkshopDetails.workshopName,
                workshopDes: reviwerWorkshopDetails.workshopDes,
                workTimeFrom: reviwerWorkshopDetails.workTimeFrom,
                workTimeTo: reviwerWorkshopDetails.workTimeTo,
                workDate: reviwerWorkshopDetails.workDate,
                workInsertDoc: reviwerWorkshopDetails.workInsertDoc,
                createdAt: reviwerWorkshopDetails.createdAt,
                updatedAt: reviwerWorkshopDetails.updatedAt,
                workIsApprove: reviwerWorkshopDetails.workIsApprove,          
          })
    } else {
          res.status(404)
          throw new Error('News not found')
    }
})


  const updateWorkshopDeatils = asyncHandler(async(req, res) => {
    const workshop = await Workshop.findById(req.params.id)

    if(workshop) {
      workshop.workIsApprove = true
        const updateApprovel = await workshop.save()

        res.json(updateApprovel)
    }else {
        res.status(404)
        throw new Error('Workshop details not found')
    }
})

const declineWorkshopDeatils = asyncHandler(async(req, res) => {
  const workshop = await Workshop.findById(req.params.id)

  if(workshop) {
    workshop.workIsApprove = false
      const declineApprovel = await workshop.save()

      res.json(declineApprovel)
  }else {
      res.status(404)
      throw new Error('Workshop not found')
  }
})

const getReasearchById = asyncHandler(async (req, res) => {
  const reviwerResDetails = await Researcher.findById(req.params.id)

  if (reviwerResDetails) {
        res.json({
              _id: reviwerResDetails._id,
              researcherPaper: reviwerResDetails.researcherPaper,
              researcherDes: reviwerResDetails.researcherDes,
              researchInsertDoc: reviwerResDetails.researchInsertDoc,
              createdAt: reviwerResDetails.createdAt,
              updatedAt: reviwerResDetails.updatedAt,
              researchIsApproved: reviwerResDetails.researchIsApproved,          
        })
  } else {
        res.status(404)
        throw new Error('Researcher details not found')
  }
})


export{ getAllWorkshopDetails, getAllResearchDetails, updateWorkshopDeatils, getWorkshopById, declineWorkshopDeatils, getReasearchById }