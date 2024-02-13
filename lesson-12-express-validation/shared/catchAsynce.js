const tryCatch = (fn) => {
    return (req, res) => {
        try {
            fn(req, res)
        } catch (error) {
            return res.status(400).json({
                success: false,
                error: error.message
            })
        }
    }
}

module.exports = tryCatch;