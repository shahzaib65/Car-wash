const router = require('express').Router();
const Detailing = require('../model/detailing');
const dotenv = require("dotenv");
dotenv.config();
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
//endpoint to create service
router.post('/detailingPicture',async(req,res)=>{
  try {
    if (!req?.files?.photo) return res.status(400).send('Please upload an image');
  const file = req.files.photo
   const result = await cloudinary.uploader.upload(file.tempFilePath, {
     public_id: `${Date.now}`,
     resource_type: "auto",
     folder: "Detailing",
   });
   console.log(result)
   if (result) {
    const detailing = await Detailing.create({
     service1: req.body.service1,
     service2: req.body.service2,
     service3: req.body.service3,
     service4: req.body.service4,
     service5: req.body.service5,
     service6: req.body.service6,
     service7: req.body.service7,
     service8: req.body.service8,
     service9: req.body.service9,
     service_time: req.body.service_time,
     price: req.body.price,
     service_image_id: result.public_id,
     service_url: result.secure_url,
     car_type: req.body.car_type,
     discount_percentage: req.body.discount_percentage,
     after_discount: req.body.after_discount
    })
     res.status(200).send({success: true,data: detailing});
   }
 } catch (error) {
   res.status(404).send({success: false,message:error.message});
 }
   

})

//endpoint to get service
router.get('/detailing',async(req,res)=>{
  try {
    const data = await Wash.find();
    res.status(200).send({success: true, Detailing: data}) 
  } catch (error) {
    res.status(500).send({success: false,message: error.message})
  }
});
//endpoint to delete booking
router.delete("/deleteDetaiing/:id",async(req,res)=>{
  try {
    const { id } = req.params;
    const detailing = await Detailing.findByIdAndDelete(id);
    if (!detailing) {
      return res.status(400).json({success: false,error: "User not found"});
    }
    res.status(200).json({success: false,message: "User deleted successfully"});
  } catch (error) {
    res.status(400).send({success: false,error: error.message})
  }
  });
  //endpoint to update the Wash
router.put("/updateDetailing/:id",async(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success: false, error: errors.array() });
  }
  try {
    const data = await Detailing.findOne({_id: req.params.id });
       await Detailing.findByIdAndUpdate(
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