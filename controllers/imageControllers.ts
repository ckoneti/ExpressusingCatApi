import {Request, Response, NextFunction} from 'express';
import axios from 'axios';
import {GetImageResponse} from '../types';
import 'dotenv/config';
import FormData from 'form-data';
import fs from 'fs';
const headers = {
'x-api-key': process.env.CAT_API_KEY,
'content-type':'application/json'
}
const getImageById = async(request:Request, res:Response)=>{
try{
const imageId:string =  req.param;

const {res = await axios.get<GetImageResponse>(`${process.env.CAT_API_URL}/${imageId}`,{headers}) ;
return res.send(data).status(status);
}
catch (error) {
if(axios.isAxiosError(error)){
return res.status(400).json({ error: 'Error fetching'});
}
 return 'Unexpected Error';
   }
}

const addImage = async(req:Request, res:Response)=>{
try{
var formData = new FormData();
formData.append('file', fs.createReadStream('C:/Users/The Durga/Desktop/myImage.jpg'))
const { data,status } = await axios.post(`${process.env.CAT_API_UR}L/upload}`, formData , {
      headers: {
        'x-api-key': process.env.CAT_API_KEY,
        'content-key': 'multipart/form-data'
      }
    });
 res.send(data).status(status);
 }
 catch(error:unknown){
 console.log('error', error);
 }
}

const deleteImage = async(req:Request, res:Response)=>{
try{
const deleteImageId:string =  || req.param
const {status} = await axios.delete(`${process.env.CAT_API_URL}/${deleteImageId}`, {headers})
return res.sendStatus(status)
}
catch (error: unknown) {
if(axios.isAxiosError(error)){
return res.status(400).json({ error: 'Error deleting the image'});
}
return 'Unexpected Error';
}
}

export default {getImageById, deleteImage, addImage};

