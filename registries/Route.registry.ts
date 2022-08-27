import { Controller } from "../Controller.js";
import { Route } from "../Route.js";
import { ControllerRegistry } from "./Controller.registry.js";

export class RouteRegistry {
    private static _routes: Route[] = [];
    public Controllers: ControllerRegistry = new ControllerRegistry();

    public static RegisterControllerRouteTemplate<TController extends Controller>(routeTemplate: string) {
        debugger;
        throw new Error("Method not implemented.");
    }
    public static RegisterActionRouteTemplate<TController extends Controller>(routeTemplate: string) {
        debugger;
        throw new Error("Method not implemented.");
    }
}
