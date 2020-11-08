import multer, { StorageEngine } from "multer";
import path from "path";
import crypto from "crypto";

interface IUploadConfig {
  driver: "s3" | "disk";
  directory: string;
  multer: {
    storage: StorageEngine;
  };
  uploadDirectory: string;
  config: {
    disk: {};
    aws: {
      bucket: string;
      bucket_Path: string;
    };
  };
}

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp");
const upFolder = path.resolve(__dirname, "..", "..", "tmp", "uploads");

export default {
  directory: tmpFolder,
  uploadDirectory: upFolder,
  driver: process.env.Storage_Driver,

  multer: {
    storage: multer.diskStorage({
      destination: upFolder,
      filename(request, file, callback) {
        let fileHash = crypto.randomBytes(10).toString("hex");
        let fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }), //Utilizado para armazenar a imagem localmente
  },

  config: {
    disk: {},
    aws: {
      bucket: process.env.AWS_BUCKET_NAME,
      bucket_Path: process.env.AWS_BUCKET_URL,
    },
  },
} as IUploadConfig;
