import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import path from 'path'
import cors from 'cors'


//routes
import conferenceRoutes from './routes/conferenceRoutes.js'
import userRoutes from './routes/userRoutes.js'
import researcherRoutes from './routes/researchRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import workPresenterRoutes from './routes/workPresenterRoutes.js'
import researchpapers from './routes/researchpaperRoutes.js'
import reviewDetails from './routes/reviewerRoute.js'
import adminRoutes from './routes/adminRoutes.js'
import newsRoutes from './routes/newsRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});




app.get('/', (req, res) => {
    res.send('API running...')
})

//calling routes
app.use('/api/conDetails', conferenceRoutes)
app.use('/api/users', userRoutes)
app.use('/api/researcher', researcherRoutes)
app.use('/api/presenter', workPresenterRoutes)
app.use('/api/uploads', uploadRoutes)
app.use('/api/researchpapers', researchpapers)
app.use('/api/reviewdetails', reviewDetails)
app.use('/api/admin', adminRoutes)
app.use('/api/news', newsRoutes)

const __dirname = path.resolve()
app.use('/documents', express.static(path.join(__dirname, '/documents')))

const PORT = process.env.PORT || 8040

app.listen(PORT, console.log(`server running on port ${PORT}`.brightYellow))