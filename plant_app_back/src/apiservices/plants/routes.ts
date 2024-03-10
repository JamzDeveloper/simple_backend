import { Router } from "express";
import uploadImage from "../../middleware/file-image-multer";
import { postPlant } from "./controller";
const route = Router();

route.post("/uploadimage", uploadImage, postPlant);

export default route;
