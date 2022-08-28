import { Whistle } from "../Whistle.js";
import { HomeController } from "./controllers/Home.controller.js";

export class App {
    constructor() {}
    private static _initialized: boolean = false;
    static Start() {
        if (!this._initialized) {
            this._initialized = true;
            //Whistle.Routing.Controllers.RegisterT<HomeController>();
            console.log("Register()");
            //Whistle.Routing.Controllers.Register(new HomeController());
            Whistle.Controllers.Register(new HomeController());
            console.log("Log()");
            Whistle.Routing.Controllers.Log();
        }
    }
}
