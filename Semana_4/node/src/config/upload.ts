import multer from "multer";
import path from "path";
import crypto from "crypto";

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp")
const upFolder = path.resolve(__dirname, "..", "..", "tmp",'uploads')

export default {
  directory : tmpFolder,
  uploadDirectory : upFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      let fileHash = crypto.randomBytes(10).toString("hex");
      let fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }), //Utilizado para armazenar a imagem localmente
};
