import express, { Application } from "express";
import cors from "cors";
// import dbConnection from "../db/config";
import PlantRoute from "../apiservices/plants/routes";
import path from "path";
class Server {
  private app: Application;
  private port: string;
  private path;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
    this.path = {
      plant: "/api/plant",
    };
    this.middlewares();
    this.connectionDb();
    this.routes();
  }

  async connectionDb() {
    // await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, "../public")));
  }

  routes() {
    this.app.use(this.path.plant, PlantRoute);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server on port", this.port);
    });
  }
}

export default Server;
