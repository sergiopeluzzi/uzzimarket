const getUsers = async (req, res) => {
    return res.status(200).json({
        msg: 'getUsers'
    })
}

module.exports = { getUsers }