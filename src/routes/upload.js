const path = require('path');
const multer = require('multer');

function getDest(req, file, type) {
  if (type === 'avatars') {
    return 'public/avatars';
  }
  if (type === 'heroPhotos') {
    return 'public/heroPhotos';
  }
  return 'public/tmp';
}

function getFilename(req, file, type) {
  if (type === 'avatars') {
    return req.body.id + path.extname(file.originalname);
  }
  if (type === 'heroPhotos') {
    return req.body.nickname + path.extname(file.originalname);
  }
  return file.fieldname + '-' + Date.now();
}

function createConfig(type) {
  return multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, getDest(req, file, type));
      },
      filename: function (req, file, cb) {
        cb(null, getFilename(req, file, type));
      },
    }),
  });
}

const uploadAvatar = createConfig('avatars');
const uploadHeroPhoto = createConfig('heroPhotos');

module.exports.uploadAvatarMw = (field) => uploadAvatar.single(field);

module.exports.uploadHeroPhotoMw = (field) => uploadHeroPhoto.single(field);
