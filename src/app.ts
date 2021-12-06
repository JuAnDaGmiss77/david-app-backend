import  express  from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from './routes/auth';
import ipRoutes from './routes/ip';

const app = express();
const corsOptions = {
    origin: 'https://david-app-20.herokuapp.com',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api', ipRoutes);

export default app;