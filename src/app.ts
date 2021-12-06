import  express  from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from './routes/auth';
import ipRoutes from './routes/ip';

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://david-app-20.herokuapp.com');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api', ipRoutes);

export default app;