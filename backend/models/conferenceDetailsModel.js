import mongoose from 'mongoose'

const conferenceDetailsSchema = mongoose.Schema({
      user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
      },
      conname: {
            type: String,
            required: true
      },
      description: {
            type: String,
            required: true
      },
      organizer: {
            type: String,
            required: true
      },
      phone: {
            type: Number,
            required: true
      },
      email: {
            type: String,
            required: true
      },
      startDate: {
            type: Date
      },
      endDate: {
            type: Date
      },
      venue: {
            type: String,
            required: true
      },
      isApproved: {
            type: Boolean,
            required: false
      },


}, {
      timestamps: true
})

const ConferenceDetails = mongoose.model('ConferenceDetails', conferenceDetailsSchema)

export default ConferenceDetails