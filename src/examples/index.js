const multer = require("multer");

const cloudinaryStorage = require("../storage/cloudinary");

const storage = cloudinaryStorage({
	config: {
		api_key: CLOUDINARY_API_KEY,
		api_secret: CLOUDINARY_SECRET,
		cloud_name: CLOUDINARY_CLOUD_NAME,
	},
	filename: (_req, file, cb) => {
		cb(null, `${Date.now()}${file.originalname}`);
	},
	destination: "cloud_folder_name",
});

const fileUpload = multer({ storage });

module.exports = fileUpload;
