import { UserModel } from "../models/userSchema.js";

export const verifyUser = async (req, res) =>{
    const {name, _id, image, email} = req.body;
   try {
     const userExists = await UserModel.findById(_id);
     if(userExists){
        return res.status(200).json({"user":userExists});
     }else{
        const user = new UserModel(req.body);
        const savedUser = await user.save();
        return res.status(200).json({"user": savedUser});
     }
   } catch (error) {
        res.status(500).json({"Message": error});
   }
};