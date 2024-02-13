const createLogin = (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = {
            email,
            password
        }
        return res.status(200).json({
            success: true,
            message: 'login completed successfully',
            newUser
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        })
    }
}


module.exports = {
    createLogin
}