import express from 'express';
import cors from 'cors';
import 'express-async-errors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
