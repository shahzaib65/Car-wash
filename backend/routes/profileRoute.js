const router = require("express").Router();
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
router.post("/profile", async (req, res) => {
  try {
    if (!req?.files?.image)
      return res.status(400).send("Please upload an image");
    const file = req?.files?.image;
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now}`,
      resource_type: "auto",
      folder: "profile",
    });
    if (result) {
      res.status(200).send(result.secure_url);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
