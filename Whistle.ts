import { ControllerRegistry } from "./registries/Controller.registry.js";
import { StringPrototype } from "./prototypes/String.prototype.js";

export class Whistle {
    static Controllers: ControllerRegistry = new ControllerRegistry();
}

//register early global classes here//
StringPrototype.Register();
