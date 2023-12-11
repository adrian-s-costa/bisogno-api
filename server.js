import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import formRouter from './routes/form.route.js';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(formRouter);

server.listen(process.env.PORT, () => {
  console.log("Server is on PORT: " + process.env.PORT);
});