import { Controller } from "../Controller.js";
import { Route } from "../Route.js";

export class ControllerRegistry {
    // Register<TController extends Controller>(): ControllerRegistry {
    //     type controllerType = keyof TController;
    //     let controller = new TController();
    //     debugger;
    //     this._controllers.push(new Route<TController>(""));
    //     return this;
    // }
    Register(controller: Controller): ControllerRegistry {
        //TODO: get HttpRoute and HttpGet decorators from controller
        debugger;
        //this._controllers.push(new Route<TController>(""));
        return this;
    }
    private _controllers: Route[] = [];
}
