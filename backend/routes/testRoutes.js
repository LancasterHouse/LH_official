const express = require('express')
const router = express.Router()
const {getTest, setTest, updateTest, deleteTest} = require('../controllers/testController')


router.route('/').get(getTest).post(setTest)
router.route('/:id').delete(deleteTest).put(updateTest)


// router.get('/', getTest)


// router.post('/', setTest)




// router.put('/:id', updateTest)



// router.delete('/:id', deleteTest)


// router.post('/', (req, res) => {
//     res.status(200).json({ message: 'testing post api routes'})
// } )




module.exports = router