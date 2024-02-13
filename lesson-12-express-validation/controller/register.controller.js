const tryCatch = require("../shared/catchAsynce")

const createregister = tryCatch(
    (req, res) => {
        const { name, email, password, dob } = req.body;
        const newUser = {
            name,
            email,
            password,
            dob
        }
        return res.status(200).json({
            success: true,
            message: 'registration completed successfully',
            newUser
        })
    }
)


module.exports = {
    createregister
}