import { v2 } from 'cloudinary';

const { CLOUDINARY_KEY, CLOUDINARY_SECRET, CLOUDINARY_NAME } = process.env;

v2.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

export const cloudinaryApi = v2.api.resources;
