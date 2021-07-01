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
  

export{ getAllWorkshopDetails, getAllResearchDetails }