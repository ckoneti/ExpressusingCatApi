import express, {Request, Response, NextFunction} from 'express';
import imageControllers from '../controllers/imageControllers'
const imageRouter = express.Router();

// get image by Id
imageRouter.get('/getImagesById',imageControllers.getImageById)


// post an image

imageRouter.post('/addImageById', imageControllers.addImage);

// delete an image

imageRouter.delete('/deleteImageById', imageControllers.deleteImage)



export default imageRouter;


