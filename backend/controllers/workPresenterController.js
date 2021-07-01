import asyncHandler from 'express-async-handler'
import Presenter from '../models/workPresenterModel.js'


// @desc insert document of workshop
// @route POST /api/presenter/insertPresenter
//@access Public

const insertPresenter = asyncHandler(async (req, res) => {
  const { workshopName, workshopDes, workTimeFrom, workTimeTo, workDate, workInsertDoc, workIsApprove } = req.body


  const presenter = await Presenter.create({
    workshopName,
    workshopDes,
    workTimeFrom,
    workTimeTo,
    workDate,
    workInsertDoc,
    workIsApprove

  })

  if (presenter) {
    res.status(201).json({
      _id: presenter._id,
      workshopName: presenter.workshopName,
      workshopDes: presenter.workshopDes,
      workTimeFrom: presenter.workTimeFrom,
      workTimeTo: presenter.workTimeTo,
      workDate: presenter.workDate,
      workInsertDoc: presenter.workInsertDoc,
      workIsApprove: presenter.workIsApprove

    })
  } else {
    res.status(400)
    throw new Error('Invalid WorkShop data')
  }


})



export { insertPresenter }