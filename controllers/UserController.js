const userSchema = require("../models/UserModel")
const encrypt = require("../utils/Encrypt")

const createUser = async(req,res)=>{
    try{

        const hashedPasssword = encrypt.encrypPassword(req.body.password)
        const userObj = Object.assign(req.body,{password:hashedPasssword})
        const savedUser = await userSchema.create(userObj)
        res.status(201).json({
            message:"User created successfully",
            data:savedUser,
            flag:1
        })

    }catch(error){
        res.status(500).json({
            message:"Error in creating User",
            data:error,
            flag:-1
        })
    }
}

const getAllUsers = async(req,res)=>{
    try{
        const users = await userSchema.find().populate("role")
        res.status(200).json({
            message:"User fetched successfully",
            data:users,
            flag:1
        })

    }catch(error){
        res.status(500).json({
            message:"Error in getting users",
            data:error,
            flag:-1
        })
    }
}

const deleteUser = async(req,res)=>{
    try{   
        const id = req.params.id
        const deletedUser = await userSchema.findByIdAndDelete(id).populate("role")
        if(deletedUser==null){
            res.statu(404).json({
                message:"User not found",
                flag:-1
            })

        }else{
            res.status(200).json({
                message:"User Deleted Successfully",
                data:deletedUser,
                flag:1
            })
        }

    }catch(error){
        res.status(500).json({
            message:"Error in deleting User",
            data:error,
            falg:-1
        })
    }
}

const getUserById = async(req,res)=>{
    try{
        const id = req.params.id
        const user = await userSchema.findById(id).populate("role")
        if(user==null){
            res.status(404).json({
                message:"User not found",
                flag:-1
            })
        } else{
            res.status(200).json({
                message:"User found successfully",
                data:user,
                flag:1
            })
        }

    }catch(error){
        res.status(500).json({
            message:"Error in getting the user by id",
            data:error,
            flag:-1
        })
    }
}

const updateUser = async(req,res)=>{
    const newUser = req.body
    try{   
        const updatedUser = await userSchema.findByIdAndUpdate(req.params.id,newUser).populate("role")
        if(updatedUser===null){
            res.status(404).json({
                message:"User not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message: "User has been updated!",
                flag: 1
            })
        }

    }catch(error){
        res.status(500).json({
            message:"Error in updating the user",
            data:error,
            flag:-1
        })
    }
}


const loginUser = async(req,res)=>{
    try{
        const email = req.body.email
        const password = req.body.password

        const userFromEmail = await userSchema.findOne({email:email})
        if(userFromEmail!=null){
            const flag = encrypt.comparePassword(password,userFromEmail.password)
            if(flag==true){
                res.status(200).json({
                    message:"Logged in successfully",
                    data:userFromEmail,
                    flag:1
                })
            }else{
                res.status(404).json({
                    message:"User Not Found",
                    flag:-1
                })
            }
        }else{
            res.status(404).json({
                message:"Employee not found",
                flag:-1
            })
        }

    }catch(error){
        res.status(500).json({
            message:"erver error",
            data:error,
            flag:-1
        })
    }
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    getUserById,
    updateUser,
    loginUser
}