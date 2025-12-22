const express= require('express');
const {addVideo,getVideos}=require("../controllers/videoController.js");
const { authenticateToken } = require('../middleware/auth.js');

const router = express.Router();

// Admin
// router.post("/videos",authenticateToken,allowRoles("admin"), addVideo);

router.post("/", addVideo);


// Patients
router.get("/", getVideos);

 
module.exports = router;
