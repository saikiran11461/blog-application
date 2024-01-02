const {userModel} = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    },
    register:async(req,res)=>{
        let {firstName, lastName, email, password} = req.body;
        const user =await userModel.findOne({email});
        if(user){
             res.send({message:"user alredy exist"})
        }
        else{
            bcrypt.hash(password, 8, function(err, hashPassword) {
                if(err){
                    return res.send("Sign up failed, please try again later")
                }
                const user = new userModel(
                    { 
                      firstName,
                      lastName,
                      email,
                      password:hashPassword,
                    })
                 user.save()
                return res.send( {user,message:"Sign up successfull"})
            });
        }   
    },
    login:async(req,res)=>{
        const {email,password} = req.body;   
        const user = await userModel.findOne({email});
        console.log(user)
        if(!user){
           return res.status(500).send({message:"invalid email or password "}) 
        }
         bcrypt.compare(password, user.password, function(err, result){
            if(err){
                res.send({message:"plase try agin later"})
            }
            if(result == true){
                var token = jwt.sign({ email:user.email, name:user.name }, "saikiranjwtkey")
                res.status(200).send({message:"login success",user:user.id, token:token})
            }
            else{
                res.status(500).send({message:"invalid login credincials"})
            }
        })
    }

}


module.exports = {userController}