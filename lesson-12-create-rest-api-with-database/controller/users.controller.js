const { v4: uuidv4 } = require('uuid');
const User = require('../model/users.mode');
const catchAsync = require('../tryCatch/catchAsync');
const sendResponse = require('../response/response');

const getAllUsers = catchAsync(
    async (req, res) => {
        const result = await User.find();

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'data is found successfully',
            data: result
        })
    })


const postUsers = catchAsync(
    async (req, res) => {
        const id = uuidv4();
        const { name, age } = req.body;

        const data = {
            id,
            name,
            age: Number(age)
        };

        const result = await User.create(data);

        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: 'data is posted successfully',
            data: result
        })

    })
const getOneUser = catchAsync(
    async (req, res) => {
        const id = req.params.id;

        const result = await User.findOne({ id: id })

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'data is found successfully',
            data: result
        })
    })


const updateUser = catchAsync(
    async (req, res) => {
        const id = req.params.id;
        const { name, age } = req.body;

        const data = {
            name,
            age
        }
        const result = await User.findOneAndUpdate({ id: id }, { $set: data }, { new: true })

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'data is updated successfully',
            data: result
        })
    })

const deleteUser = catchAsync(
    async (req, res) => {
        const id = req.params.id;

        const result = await User.deleteOne({ id: id })

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'data is deleted successfully',
            data: result
        })
    })

module.exports = {
    getAllUsers,
    postUsers,
    getOneUser,
    updateUser,
    deleteUser
}