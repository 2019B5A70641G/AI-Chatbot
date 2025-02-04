import express from "express";
import {config} from "dotenv";
//import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();

import {COOKIE_SECRET} from '@env';

//middlewares
app.use(cors({origin: "https://ai-chatbot-frontend-8d71.onrender.com" ,credentials: true}));
app.use(express.json());
app.use(cookieParser(COOKIE_SECRET));
//remove it before production
//app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;
