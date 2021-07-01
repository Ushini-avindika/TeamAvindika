import mongoose from 'mongoose'

const workPresenterDataSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workshop'
    },

    workshopName: {
        type: String,
        required: true,
    },

    workshopDes: {
        type: String,
        required: true,
    },

    workTimeFrom: {
        type: String,
        required: true,
    },

    workTimeTo: {
        type: String,
        required: true,
    },

    workDate: {
        type: Date,
        required: true,
    },

    workInsertDoc: {
        type: String,
        required: false,
    },

    workIsApprove: {
        type: Boolean,
        default: false,
        required: false
    }



}, {
    timestamps: true
})

const Presenter = mongoose.model('WorkShop presenter', workPresenterDataSchema)

export default Presenter