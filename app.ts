import express, { Application, Request, Response } from 'express';
const app: Application = express();
import imageRouter from './routes/imageRouter'
const PORT:number = 8000;
app.use(express.json())
app.use('/cat', imageRouter);

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
})