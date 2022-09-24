const User = require('../model/userModel')

const userController = {
    getAllUser: async (req,res) => {
        try {
            let users = await User.find().select('-password');
              //filter only user
            let nonAdminData = users.filter((item) => item.role === "user");

            res.status(200).json({ users: nonAdminData })
        } catch (error) {
            return res.status(500).json ({ msg: error.message}) 
        }
    },
    getSingleUser: async (req,res) => {
        try {
            let user = await User.findById({ _id:req.params.id });
            res.json({ user })
        } catch (error) {
            return res.status(500).json ({ msg: error.message})  
        }
    },
    getCurrentUser: async (req,res) => {
        try {
            let id =req.user.id;

            let user =  await User.findById({_id:id })

            res.json({ user })
        } catch (error) {
            return res.status(500).json ({ msg: error.message}) 
        }
    }
}

module.exports = userController