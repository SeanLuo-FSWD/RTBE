import express from "express";
import path from "path";

class App {
  private _app: express.Application;
  private readonly _port: number | string = process.env.PORT || 8000;

  constructor(controllers: any[]) {
    this._app = express();
    console.log('xxxxxxxxxxxxxxxxxxxxxx');
    console.log(process.env.GOOGLE_AUTH_CLIENTID);
    console.log('cccccccccccccccccccc');
    console.log(typeof process.env.GOOGLE_AUTH_CLIENTID);
    
    
    this.initializeMiddleWares();
    this.initializeControllers(controllers);
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
}

export default App;
