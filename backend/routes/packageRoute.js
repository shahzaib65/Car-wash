const router = require('express').Router();
const Package = require('../model/package');
//endpoint create package
router.post('/createpackage',
async(req,res)=>{
    const {package_name,category,interior,exterior,service1,service2,
        service3,service4,service5,service6,package_time_limit,price,after_discount} = req.body;
   try {

  await Package.create({
    package_name: package_name,
    category: category,
    interior: interior,
    exterior: exterior,
    service1: service1,
    service2: service2,
    service3: service3,
    service4: service4,
    service5:service5,
    service6: service6,
    package_time_limit: package_time_limit,
    price: price,
    after_discount: after_discount
  })
  res.status(200).send({success: true,message: "Package is saved"})

   } catch (error) {
    res.status(500).send({success: false,message: error.message})
   }
});
//endpoint to retreive the bookings
router.get("/getPackage",async(req,res)=>{
try {
     const package  = await Package.find();
     res.status(200).send({success: true,packages: package})

} catch (error) {
   res.status(500).send({success: false, message: error.message}) 
}
});
//endpoint to update the booking status
router.put("/upateStatus/:id",async(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success: false, error: errors.array() });
  }
  try {
    const data = await Package.findOne({_id: req.params.id });
       await Package.findByIdAndUpdate(
        { _id: data._id },
        { $set: { price: req.body.price} },
        { new: true }
      );
      res .status(200).send({ success: true, message: 'Package status has been updated'});
  } catch (error) {
    res.status(500).send({success: false, error: error.message })
  }
});
//endpoint to update the payment status
router.put("/updatePayment/:id",async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success: false, error: errors.array() });
    }
    try {
      const data = await Package.findOne({_id: req.params.id });
         await Package.findByIdAndUpdate(
          { _id: data._id },
          { $set: { price: req.body.payment_status} },
          { new: true }
        );
        res .status(200).send({ success: true, message: 'package status has been updated'});
    } catch (error) {
      res.status(500).send({success: false, error: error.message })
    }
  });
//endpoint to update the charges
router.put("/updateCharges/:id",async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success: false, error: errors.array() });
    }
    try {
      const data = await Booking.findOne({_id: req.params.id });
         await Package.findByIdAndUpdate(
          { _id: data._id },
          { $set: { price: req.body.price} },
          { new: true }
        );
        res .status(200).send({ success: true, message: 'Payment charges has been updated'});
    } catch (error) {
      res.status(500).send({success: false, error: error.message })
    }
  });
//endpoint to delete booking
router.delete("/deleteBooking/:id",async(req,res)=>{
    try {
      const { id } = req.params;
      const user = await Package.findByIdAndDelete(id);
      if (!user) {
        return res.status(400).json({success: false,error: "User not found"});
      }
      res.status(200).json({success: false,message: "User deleted successfully"});
    } catch (error) {
      res.status(400).send({success: false,error: error.message})
    }
    });



module.exports = router;