import { Whistle } from "../whistle.js";
import { HomeController } from "./controllers/Home.controller.js";

export class App {
    constructor() {}
    private static _initialized: boolean = false;
    public static Start() {
        if (!this._initialized) {
            this._initialized = true;
            //Whistle.Routing.Controllers.Register<HomeController>();
            Whistle.Routing.Controllers.Register(new HomeController());
        }
    }
}
