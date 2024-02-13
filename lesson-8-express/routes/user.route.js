const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'I am get request at home'
    })
})
router.get('/login', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'I am get request at login'
    })
})
router.get('/registration', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'I am get request at registration'
    })
})
router.post('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'I am post request '
    })
})
router.put('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'I am put request at home'
    })
})
router.delete('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'I am delete request at home'
    })
})


module.exports = router;