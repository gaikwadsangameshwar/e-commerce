import mongoose,{Schema,model,models} from "mongoose";

export interface User{
    _id:mongoose.Types.ObjectId,
    username:string,
    email:string,
    password:string,
    refreshToken:string,
    createdAt:Date,
    updatedAt:Date
}

const userSchema=new Schema(
    {
        username:{
            type:String,
            required:[true,"username is required"]
        },
        email:{
            type:String,
            required:[true,"username is required"],
            unique:true
        },
        password:{
            type:String,
            required:[true,"username is required"]
        },
        refreshToken:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

const UserModel = models.User || model<User>("User", userSchema);
export default UserModel;