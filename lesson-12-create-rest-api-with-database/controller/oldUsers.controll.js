// const getAllUsers = async (req, res) => {
//     try {
//         const result = await User.find();

//         res.status(200).json({
//             success: true,
//             message: 'data is found successfully',
//             result
//         })
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

// const postUsers = async (req, res) => {
//     try {
//         const id = uuidv4();
//         const { name, age } = req.body;

//         const data = {
//             id,
//             name,
//             age: Number(age)
//         };

//         const result = await User.create(data);

//         res.status(201).json({
//             success: true,
//             message: 'data is posted successfully',
//             result
//         })
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

// const getOneUser = async (req, res) => {
//     try {
//         const id = req.params.id;

//         const result = await User.findOne({ id: id })

//         res.status(201).json({
//             success: true,
//             message: 'data is found successfully',
//             result
//         })
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

// const updateUser = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const { name, age } = req.body;

//         const data = {
//             name,
//             age
//         }

//         const result = await User.findOneAndUpdate({ id: id }, { $set: data }, { new: true })

//         res.status(201).json({
//             success: true,
//             message: 'data is updated successfully',
//             result
//         })
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

// const deleteUser = async (req, res) => {
//     try {
//         const id = req.params.id;


//         const result = await User.deleteOne({ id: id })

//         res.status(201).json({
//             success: true,
//             message: 'data is deleted successfully',
//             result
//         })
//     } catch (error) {

//     }
// }