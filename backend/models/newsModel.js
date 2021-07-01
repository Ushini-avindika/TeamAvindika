import mongoose from 'mongoose'

const NewsSchema = mongoose.Schema({
      user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
      },
      name: {
            type: String,
            required: true
      },
      date: {
            type: Date,
      },
      message: {
            type: String,
            required: true
      },
      isApproved: {
            type: Boolean,
      }
})

const News = mongoose.model('News', NewsSchema)

export default News