const User = require('../models/User');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, `${req.user.id}-${Date.now()}-${file.originalname}`),
});
exports.upload = multer({ storage }).single('profilePic');

exports.updateProfilePic = async (req, res) => {
  const profilePic = req.file.path;
  await User.findByIdAndUpdate(req.user.id, { profilePic });
  res.json({ msg: "Profile picture updated", profilePic });
};

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};
