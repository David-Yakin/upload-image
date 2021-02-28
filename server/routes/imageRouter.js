const express = require('express');
const router = express.Router();
const multer = require('multer');

const storge = multer.diskStorage({
  destination: (req, file, storegePath) => {
    storegePath( null, `${__dirname}/../public/upload` );
  },
  filename: ( req, file, setName ) => {
    setName( null, file.originalname);
  }
})

const upload = multer({ 
  storage: storge,
  limits: {fileSize: 5000000},
 });

router.post('/', upload.single('image'), (req, res) =>{
  res.send('files uploaded!!!!');
} )

router.get('/', (req, res)=>{
  
  res.send()
})

  module.exports = router; 
