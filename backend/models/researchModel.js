import mongoose from 'mongoose'

const researcherDataSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Researcher'
    },

    researcherPaper: {
        type: String,
        required: true,
    },

    researcherDes: {
        type: String,
        required: true,
    },

    researchInsertDoc: {
        type: String,
        required: false,
    },

    researchIsApproved: {
        type: Boolean,
        default: false,
        required: false
    },


}, {
    timestamps: true
})

const Researcher = mongoose.model('Researcher', researcherDataSchema)

export default Researcher


