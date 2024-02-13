const { getAllUsers, postAllUsers, updateUsers, deleteUsers } = require('../controller/user.controller');

const router = require('express').Router();


router.get('/', getAllUsers);

router.post('/', postAllUsers)
router.put('/:id', updateUsers)
router.delete('/:id', deleteUsers)


module.exports = router;