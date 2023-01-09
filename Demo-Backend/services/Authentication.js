require('dotenv').config()
const { response } = require('express')
const jwt= require('jsonwebtoken')

function Authentication(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split('')[1]
    if(token==null)
        return res.sendStatus(401)
    else 
     jwt.verify(token,process.env.ACCCESS_TOKEN,(err,response)=>
    {
        if(err) 
            return res.sendStatus(403)
        else
        res.locals=response
        next()
    })
    
}

module.exports = {Authentication:Authentication}
