const router = require('express').Router();
const Wash = require('../model/carWash');
const dotenv = require("dotenv");
dotenv.config();
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
//endpoint to create service
router.post('/servicePicture',async(req,res)=>{
  try {
    if (!req?.files?.photo) return res.status(400).send('Please upload an image');
  const file = req.files.photo
   const result = await cloudinary.uploader.upload(file.tempFilePath, {
     public_id: `${Date.now}`,
     resource_type: "auto",
     folder: "profile",
   });
   console.log(result)
   if (result) {
    const wash = await Wash.create({
     service1: req.body.service1,
     service2: req.body.service2,
     service3: req.body.service3,
     service4: req.body.service4,
     service5: req.body.service5,
     service6: req.body.service6,
     service7: req.body.service7,
     service8: req.body.service8,
     service9: req.body.service9,
     price: req.body.service1,
     service_image_id: result.public_id,
     service_url: result.secure_url
    })
     res.status(200).send({success: true,data: wash});
   }
 } catch (error) {
   res.status(404).send({success: false,message:error.message});
 }
   

})

//endpoint to get service
router.get('/Wash',async(req,res)=>{
  try {
    const data = await Wash.find();
    res.status(200).send({success: true, Wash: data}) 
  } catch (error) {
    res.status(500).send({success: false,message: error.message})
  }
});
//endpoint to delete booking
router.delete("/deleteService/:id",async(req,res)=>{
  try {
    const { id } = req.params;
    const Wash = await Wash.findByIdAndDelete(id);
    if (!Wash) {
      return res.status(400).json({success: false,error: "User not found"});
    }
    res.status(200).json({success: false,message: "User deleted successfully"});
  } catch (error) {
    res.status(400).send({success: false,error: error.message})
  }
  });
  //endpoint to update the Wash
router.put("/updateWash/:id",async(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success: false, error: errors.array() });
  }
  try {
    const data = await Wash.findOne({_id: req.params.id });
       await Wash.findByIdAndUpdate(
        { _id: data._id },
        { $set: { service1: req.body.service1} },
        { new: true }
      );
      res .status(200).send({ success: true, message: 'Wash status has been updated'});
  } catch (error) {
    res.status(500).send({success: false, error: error.message })
  }
});



module.exports = router;