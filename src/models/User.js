import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User Name is required"],
    unique: true,
    minlength: [3, "User Name must be at least 3 characters long"],
    maxlength: [50, "User Name must not exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    unique: true,
    minlength: [6, "Password must be at least 6 characters long"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    unique: true,
    minlength: [10, "Phone number must be at least 10 digits long"],
    maxlength: [15, "Phone number must not exceed 15 digits"],
    match: [/^\d+$/, "Phone number should contain only digits"],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
