import express from 'express';
import userRouter from './routes/user.routes.js';

const app = express();

app.use(express.json());

app.use(userRouter);

ap.listen(3334, () => console.log('running at port 3334'));