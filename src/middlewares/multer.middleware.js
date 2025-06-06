import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    
    cb(null, file.originalname) // its not good to use originalname you, we can change that afterwards
  }
})

export const upload = multer({ storage })