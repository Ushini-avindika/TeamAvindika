import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler (async (req, res, next) => {
    let token

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ){

        try{
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')

            next()
        }catch (error) {

            console.error(error)
            res.status(401)
            throw new Error('Not autorized, token failed')
        }
    }



    if(!token){
        res.status(401)
        console.log('Not autorized, no token')
    }

})

//check authorization
const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next()
    }else {
        res.status(401)
        throw new Error('Not authorized as an admin')
    }
}

const editor = (req, res, next) => {
    if(req.user && req.user.isEditor){
        next()
    }else {
        res.status(401)
        throw new Error('Not authorized as an editor')
    }
}

const reviver = (req, res, next) => {
    if(req.user && req.user.isReviwer){
        next()
    }else {
        res.status(401)
        throw new Error('Not authorized as an reviwer')
    }
}


export { protect, admin, editor, reviver}