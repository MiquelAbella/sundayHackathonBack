const User = require("../models/User");

const register = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(200).json({ok:true, user:user})
    } catch (error) {
        res.status(503).json({ok:false, msg:"something happened"}) 
    }
}

module.exports = {register}