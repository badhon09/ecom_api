const express = require('express');

const router = express.Router();
const roomController = require('../controllers/roomController.js');
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null,'images')
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now()+path.extname(file.originalname))
  }
})
const upload = multer({storage:storage})

router.get('/', roomController.getAllRooms);
router.get('/getroom/:roomId', roomController.getRoomById);
router.get('/search-room', roomController.getSearchRooms);
// router.post('/add', roomController.getAllRooms);

//CREATE
router.post("/add/:hotelid",upload.single('photos'), roomController.createRoom);


module.exports = router;