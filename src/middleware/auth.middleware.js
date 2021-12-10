const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const authToken = req.headers.authorization
    if (authToken !== undefined) {
        const token = authToken.split(' ')[1]
        
        jwt.verify(token, process.env.SECRET, (err, data) => {
            if(err) {
                return res.status(401).json({ msg: 'Missing auth token' })
            } else {
                req.token = token
                req.lUserId = data.id
                req.lUserEmail = data.email
                req.lUserName = data.name
                console.log(data);
                next()
            }
        })
    } else {
        return res.status(401).json({ msg: 'Jwt malformed' })
    }
}

module.exports = auth