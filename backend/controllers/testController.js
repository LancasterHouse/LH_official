// get test route
//route GET /api/test
//access private
const getTest = (req, res) => {
    res.status(200).json({ message: 'testing get api routes'})

}


// set test route
//route POST /api/test
//access private
const setTest = (req, res) => {
    res.status(200).json({ message: 'testing post api routes'})

}


// update test route
//route PUT /api/test/:id
//access private
const updateTest = (req, res) => {
    res.status(200).json({ message: `Update test api ${req.params.id}`})


}


// delete test route
//route DELETE /api/test
//access private
const deleteTest = (req, res) => {
    res.status(200).json({ message: `delete test api ${req.params.id}`})
}

module.exports = {
    getTest,
    setTest,
    updateTest,
    deleteTest
}