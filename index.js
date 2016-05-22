import express from "express";
import consign from "consign"

const app = express();

consign()
    .include("db.js")
    .then("bootstrap/middlewares.js")
    .then("routes")
    .then("bootstrap/boot.js")
    .into(app);
    