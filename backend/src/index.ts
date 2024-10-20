import express, { Express } from 'express';
import cors from 'cors';
import connectDB from './db/index';
import rootRouter from './routes/index';
import { errorHandler, notFound } from './middlewares/errorMiddleware';

const app: Express = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/v1/', rootRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(5006, () => console.log('Server running'));
