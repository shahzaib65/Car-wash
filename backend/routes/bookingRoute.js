const router = require('express').Router();
const Booking = require('../model/booking');
const { body, validationResult } = require('express-validator');

//endpoint create booking
router.post('/createbooking',
[
    body('booking_service', 'Please select the service').isLength({min: 3}),
    body('booking_status', 'Please select the service').isLength({min: 3}),
    body('booking_schedule', 'Please select the service').isLength({min: 3}),
    body('service_time', 'Please select the service').isLength({min: 3}),
    body('charges', 'Please select the service').isLength({min: 3}),
    body('payment_status', 'Payment status').isLength({min: 3}),
],
async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success: false, error: errors.array() });
    }
   try {
const {booking_service_name,booking_status,booking_schedule,service_time,charges,payment_status} = req.body;
  await Booking.create({
    booking_service_name: booking_service_name,
    charges: charges,
    payment_status: payment_status,
    booking_status: booking_status,
    booking_schedule: booking_schedule,
    service_time: service_time,
    userId: req.body.userId
  })
  res.status(200).send({success: true,message: "Booking is saved"})

   } catch (error) {
    res.status(500).send({success: false,message: error.message})
   }
});
//endpoint to retreive the bookings
router.get("/getBooking",async(req,res)=>{
try {
     const booking  = await Booking.find();
     res.status(200).send({success: true,bookings: booking})

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
    const data = await Booking.findOne({_id: req.params.id });
       await Booking.findByIdAndUpdate(
        { _id: data._id },
        { $set: { booking_status: req.body.booking_status} },
        { new: true }
      );
      res .status(200).send({ success: true, message: 'Booking status has been updated'});
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
      const data = await Booking.findOne({_id: req.params.id });
         await Booking.findByIdAndUpdate(
          { _id: data._id },
          { $set: { payment_status: req.body.payment_status} },
          { new: true }
        );
        res .status(200).send({ success: true, message: 'Payment status has been updated'});
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
         await Booking.findByIdAndUpdate(
          { _id: data._id },
          { $set: { charges: req.body.charges} },
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
      const user = await Booking.findByIdAndDelete(id);
      if (!user) {
        return res.status(400).json({success: false,error: "User not found"});
      }
      res.status(200).json({success: false,message: "User deleted successfully"});
    } catch (error) {
      res.status(400).send({success: false,error: error.message})
    }
    });



module.exports = router;