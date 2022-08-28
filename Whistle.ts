import { ControllerRegistry } from "./registries/Controller.registry.js";
import { RouteRegistry } from "./registries/Route.registry.js";

export class Whistle {
    static Routing: RouteRegistry = new RouteRegistry();
    static Controllers: ControllerRegistry = new ControllerRegistry();
    constructor() {}
}
