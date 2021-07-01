import asyncHandler from 'express-async-handler'
import Researcher from '../models/researchModel.js'

const insertResearcher = asyncHandler(async (req, res) => {
  const { researcherPaper, researcherDes, researchInsertDoc, researchIsApproved } = req.body


  const researcher = await Researcher.create({
    researcherPaper,
    researcherDes,
    researchInsertDoc,
    researchIsApproved

  })

  if (researcher) {
    res.status(201).json({
      _id: researcher._id,
      researcherPaper: researcher.researcherPaper,
      researcherDes: researcher.researcherDes,
      researchInsertDoc: researcher.researchInsertDoc,
      researchIsApproved: researcher.researchIsApproved
    })
  } else {
    res.status(400)
    throw new Error('Invalid Researcher data')
  }


})



export { insertResearcher }