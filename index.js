import express from "express";
import consign from "consign"

const app = express();

consign()
    .include("db.js")
    .then("config/middlewares.js")
    .then("routes")
    .then("config/boot.js")
    .into(app);
    