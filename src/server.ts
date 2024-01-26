import express from 'express';
import { Signale } from 'signale';
import dotenv from 'dotenv';
import userRouter from './user/infrastructure/userRouter';
import taskRouter from './task/infrastructure/taskRouter';
import connectToDatabase from './database/db';


dotenv.config();

connectToDatabase();

const app = express();
const port = process.env.PORT || 4000;
const signale = new Signale();

app.use(express.json());

app.use('/user', userRouter);
app.use('/task', taskRouter);

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
