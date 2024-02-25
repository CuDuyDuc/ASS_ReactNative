import { ObjectId } from "mongoose"

export interface UserModel{
    _id:ObjectId
    username:String,
    email:String,
    password:String,
    photoUrl:String
}