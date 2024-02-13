const loginController = (req, res) => {
    try {
        const { email, password } = req.body
        return res.status(201).json({
            success: true,
            message: 'user logged in',
            user: {
                email,
                password
            }
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        })
    }
}


module.exports = {
    loginController,
}