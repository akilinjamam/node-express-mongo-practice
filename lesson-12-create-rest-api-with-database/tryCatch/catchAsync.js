const catchAsync = (fn) => {
    return async (req, res) => {
        try {
            await fn(req, res)
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })

        }
    }
}
module.exports = catchAsync