import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc auth user and get token
// @route POST /api/users/login
//@access Public

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isEditor: user.isEditor,
            isReviwer: user.isReviwer,
            isReasearcher: user.isReasearcher,
            isWorkPresnter: user.isWorkPresnter,
            isAtendee: user.isAtendee,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('invalid user')
    }
})


// @desc get user profile
// @route GET /api/users/profile
//@access Private

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isEditor: user.isEditor,
            isReviwer: user.isReviwer,
            isReasearcher: user.isReasearcher,
            isWorkPresnter: user.isWorkPresnter,
            isAtendee: user.isAtendee,
        })

    } else {
        res.status(404)
        throw new Error('User not found')
    }

})

// @desc Register a new user
// @route POST /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, isReasearcher, isWorkPresnter, isAtendee, insertDoc } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')

    }

    const user = await User.create({
        name,
        email,
        password,
        isReasearcher,
        isWorkPresnter,
        isAtendee,
        insertDoc

    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isEditor: user.isEditor,
            isReviwer: user.isReviwer,
            isReasearcher: user.isReasearcher,
            isWorkPresnter: user.isWorkPresnter,
            isAtendee: user.isAtendee,
            insertDoc: user.insertDoc,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }


})

const getAllUsers = asyncHandler(async (req, res) => {
    const user = await User.find({})
    res.json(user)

})

// @desc udpate user
// @route PUT /api/profile
//@access Private

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password
        }

        const updateUser = await user.save()

        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
            isEditor: updateUser.isEditor,
            isReviwer: updateUser.isReviwer,
            isReasearcher: updateUser.isReasearcher,
            isWorkPresnter: updateUser.isWorkPresnter,
            isAtendee: updateUser.isAtendee,
            insertDoc: updateUser.insertDoc,
            token: generateToken(updateUser._id),
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})


// @desc Get user by ID
// @route PUT /api/users/:id
//@access Private
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')
    if (user) {
        res.json(user)
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})


// @desc udpate user
// @route PUT /api/users/:id
//@access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.isAdmin = req.body.isAdmin

        const updateUser = await user.save()

        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})


export { authUser, getUserProfile, registerUser, updateUserProfile, getUserById, updateUser, getAllUsers }