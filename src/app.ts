import  express  from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from './routes/auth';
import ipRoutes from './routes/ip';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api', ipRoutes);

export default app;