import express from "express";
import cors from "cors";
export const Connect_app = ()=>{
    const app = express();
    app.use(
        cors({
            // origin: "http://localhost:5173",
            origin: "*",
            methods: "GET,PUT,PATCH,POST,DELETE",
            // credentials: true,
        })
    );
    app.use(express.text());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    return app;
}