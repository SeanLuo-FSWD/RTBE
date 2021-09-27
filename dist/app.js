"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var App = /** @class */ (function () {
    function App(controllers) {
        this._port = process.env.PORT || 8000;
        this._app = (0, express_1.default)();
        this.initializeMiddleWares();
        this.initializeControllers(controllers);
        this.initHostingReactUI();
    }
    App.prototype.start = function () {
        var _this = this;
        this._app.listen(this._port, function () {
            console.log("App listening on the port " + _this._port);
        });
    };
    App.prototype.initializeControllers = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            _this._app.use("/api", controller.router);
        });
    };
    App.prototype.initializeMiddleWares = function () {
        require("./src/middleware/express.middleware")(this._app);
    };
    App.prototype.initHostingReactUI = function () {
        this._app.get("/*", function (req, res) {
            console.log("sent again....");
            res.sendFile(path_1.default.join(__dirname, "build", "index.html"));
        });
    };
    return App;
}());
exports.default = App;
