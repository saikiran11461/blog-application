const {userModel} = require("../models/user.model");


const userController = {
    getUser : async(req,res)=>{
        try {
            const user = await userModel.find();
            return res.status(200).send(user)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    singleUser : async(req,res)=>{
        try {
            const user = await userModel.findById(req.params.id);
            return res.status(200).send(user)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    deleteUser : async(req,res)=>{
        try {
            const user = await userModel.findByIdAndDelete(req.params.id);
            return res.status(200).send(user)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    createUser : async(req,res)=>{
        try {
            const user = await userModel.create(req.params.id , req.body);
            return res.status(200).send({user, message:"user created success"})
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    patchUser : async(req,res)=>{
        try {
            const user = await userModel.findByIdAndUpdate(req.params.id , req.body, {new:true});
            return res.status(201).send(user)
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}


module.exports = {userController}