import express, { urlencoded } from 'express';
const app = express();
import cors from 'cors';
import cookieparser from 'cookie-parser';
app.use(express.json({
    limit: "16kb",
    extended: true
}));
app.use(cors({
    origin: "*",
    credentials: true
}));
app.use(cookieparser());
app.use(urlencoded({
    limit: "16kb",
    extended: true
}));
app.use(express.static('public'));
export default app;