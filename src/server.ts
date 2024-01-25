import express from 'express';
import { Signale } from 'signale';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './user/infrastructure/userRouter';
import taskRouter from './task/infrastructure/taskRouter';


dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const signale = new Signale();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || '', {

})


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/user', userRouter);
app.use('/task', taskRouter);

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
