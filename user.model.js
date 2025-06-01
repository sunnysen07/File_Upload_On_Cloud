const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        minLength:[2,"username should be greater than 2 letter"],

    },
        email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    }
})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;