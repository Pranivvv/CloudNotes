var jwt = require('jsonwebtoken');
const jwtSecretKey = '56593e3a139c4e5f8b5c1a1e474239e6'

const fetchUser = (req, res, next) =>{
    // Get user from jwt token and send id in responce
    const token = req.header('auth-token')
    if(!token){
        res.status(401).json({error: 'Please validate using valid token'})
    }
    try {
        const data = jwt.verify(token, jwtSecretKey)
        req.user=data.user
    } catch (error) {
        res.status(401).json({error: error})   
    }
    next()
}

module.exports = fetchUser