const router = require('express').Router();
const User = require('../model/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require('express-validator');
const dotenv = require("dotenv");
dotenv.config();
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


  router.post("/Picture", async (req, res) => {
    try {
       if (!req?.files?.image) return res.status(400).send('Please upload an image');
     const file = req.files.image;
      const result = await cloudinary.uploader.upload(file.tempFilePath, {
        public_id: `${Date.now}`,
        resource_type: "auto",
        folder: "profile",
      });
      if (result) {
        res.status(200).send(result);
      }
    } catch (error) {
      res.status(404).send(error.message);
    }
  });

//endpoint to create user
router.post("/createuser",[
    body('username', 'Enter a valid username').isLength({ min: 3 }),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    body('email','email is not valid').isEmail(),
    body('phone','Please put the phone number').isLength({max: 11})
],async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success: false, error: errors.array() });
    }
    try {
        let check_user = await User.findOne({ email: req.body.email });
        if (check_user) {
          return res.status(400).json({success: false, error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        check_user = await User.create({
          username: req.body.username,
          password: secPass,
          email: req.body.email,
        });

//    if(check_user){
//     const token = jwt.sign({ userId: check_user._id },JWT_SECRET, { expiresIn: '1d' });
//         let mailOption = {
//           from: process.env.SMTP_MAIL,
//           to: req.body.email,
//           subject: "Account activation",
//           text: `Click the following link to activate your account: http://localhost:5000/api/auth/activate/${token}`,
//         };
//         transporter.sendMail(mailOption, function (error) {
//           if (error) {
//             res.status(404).send(error);
//           } else {
//             res
//               .status(200)
//               .send({ successMessage: "Email sent successfully" });
//           }
//         });
//    }
        res.json({success: true, message: "Your account have been created" })
      } catch (error) {
        res.status(500).send({success: false,error: error.message});
      }
});
//endpoint to login user
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success: false, errors:  errors.array() });
    }
    const { email, password } = req.body;
    console.log(req.body)
    try {
      let user = await User.findOne({ email});
      if (!user) {
        return res.status(400).json({success: false, error: "Please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ success: false, error: "Please try to login with correct credentials" });
      }
     res.status(200).send({success: true,userInfo: user.select("-password")})
    // res.status(200).send({isAdmin,id: userId})
  
    } catch (error) {
      res.status(500).send({success: false,error: error.message});
    }
  });
//endpoint to change username
router.post("/change-username/:id",
body('username', 'Enter a valid username').isLength({ min: 3 }),async(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success: false, error: errors.array() });
  }
  try {
    const data = await User.findOne({_id: req.params.id });
    console.log(data);
      const userData = await User.findByIdAndUpdate(
        { _id: data._id },
        { $set: { username: req.body.username} },
        { new: true }
      );
      res
        .status(200)
        .send({
            success: true,
          message: 'Your username has been updated'
        });
  } catch (error) {
    res.status(500).send({success: false, error: error.message })
  }
});
 //endpoint to change password
 router.post('/change-password',[
    body('username', 'Enter a valid username').isLength({ min: 3 }),
    body('oldPassword', 'Old password must be atleast 5 characters').isLength({ min: 5 }),
    body('newPassword', 'New Password must be atleast 5 characters').isLength({ min: 5 }),
  ],async(req, res) => {
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success: false, error: errors.array() });
    }
    try {
      const { username, oldPassword, newPassword } = req.body;
     // const user = await User.findOne(user => user.username === username);
     const user = await User.findOne({username: username});
      if (!user) {
        return res.status(404).json({success: false, error: 'User not found' });
      }
      const isValidPassword = bcrypt.compareSync(oldPassword, user.password);
      if (!isValidPassword) {
        return res.status(401).json({success: false, error: 'Invalid old password' });
      }
      const salt = await bcrypt.genSalt(10);
      const securePass = await bcrypt.hash(newPassword, salt);
      const userData = await User.findByIdAndUpdate(
        { _id: user._id },
        { $set: { password: securePass} },
        { new: true }
      );
      res
        .status(200)
        .send({
          success: true,
          message: 'Your password has been updated'
        });
    } catch (error) {
      res.status(400).send({success: false,error: error.message})
    }
  });
//endpoint to delete the user
router.delete("/delete-user/:id",async(req,res)=>{
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        return res.status(400).json({success: false,error: "User not found"});
      }
      res.status(200).json({success: false,message: "User deleted successfully"});
    
    } catch (error) {
      res.status(400).send({success: false,error: error.message})
    }
    });

//enpoint Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.get('/getuser/:id',  async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select("-password")
      res.send({data: user})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })



module.exports = router