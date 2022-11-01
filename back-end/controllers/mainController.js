module.exports = {

login: async (req, res) => {
    const loginInfo = req.body

    res.send({loginInfo})
}




}