import express from "express";
import { urlencoded, json } from "body-parser";
import router from "./router";
const baseURL = express();

baseURL.use(urlencoded({ extended: true }));
baseURL.use(json());

baseURL.use("/api/v1/", router);

//サーバ起動
const port = process.env.PORT || 3000;
baseURL.listen(port);
console.log("listen on port " + port);
