import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

export default async function handler(req, res) {
  try {
    await upload.single("image")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        console.log(err);
        return res.status(400).json({ message: "File upload failed 1." });
      } else if (err) {
        console.log(err);
        return res.status(400).json({ message: "File upload failed 2." });
      }
      return res.status(200).json({ message: "File uploaded successfully." });
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "File upload failed. 3" });
  }
}
