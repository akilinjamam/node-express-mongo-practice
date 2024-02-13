const registerController = (req, res) => {
    try {
        const { name, email, password, dob, confirmPassword, age } = req.body;

        const newUser = {
            name,
            email,
            password,
            dob,
            confirmPassword,
            age
        }
        return res.status(201).json({
            success: true,
            message: 'data posted successfully',
            user: newUser
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        })
    }
}





module.exports = {
    registerController,
}