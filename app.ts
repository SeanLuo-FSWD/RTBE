import express from "express";
import path from "path";

class App {
  private _app: express.Application;
  private readonly _port: number | string = process.env.PORT || 8000;

  constructor(controllers: any[]) {
    this._app = express();
    this.initializeControllers(controllers);
    this.initializeMiddleWares();
    this.initHostingReactUI();
  }

  public start() {
    this._app.listen(this._port, () => {
      console.log(`App listening on the port ${this._port}`);
    });
  }

  private initializeControllers(controllers: any[]) {
    controllers.forEach((controller) => {
      this._app.use("/api", controller.router);
    });
  }

  public initializeMiddleWares() {
    require("./src/middleware/express.middleware")(this._app);
  }

  public initHostingReactUI() {
    this._app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "build", "index.html"));
    });
  }
}

export default App;
