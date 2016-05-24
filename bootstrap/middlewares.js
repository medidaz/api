import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";

module.exports = app => {
  app.set("json spaces", 4);
  app.set("port", 3000);
  app.use(helmet());
  app.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }));
  app.use(compression());
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });
};