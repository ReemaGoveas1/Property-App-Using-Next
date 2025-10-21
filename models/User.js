import { Schema, model, models } from "mongoose";

const userSchema = new Schema ({
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"]
    },
    userName: {
        type: String,
        required: [true, "Username is required"]
    },
    image: {
        type: String
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref:  "Property"
        }
    ]
}, {
    //this will automatically have updated at and created at
    timestamps: true
})

const User = models.User || model("User", userSchema);

export default User;