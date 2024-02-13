const sendResponse = (res, data) => {

    const responseData = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message,
        result: data.data
    }

    res.status(data.statusCode).json(responseData)
}

module.exports = sendResponse;