import { Dictionary } from "../collections/Dictionary.js";
import { Controller } from "../Controller.js";

export class ControllerMetadata {
    AddMvcControllerRoute(routeTemplate: string) {
        if (this._controllerTemplate !== undefined) throw `Only one MvcController decorator is allowed per class: ${this._controller.constructor.name}, template: ${routeTemplate}`;
        this._controllerTemplate = routeTemplate;
    }
    AddMvcQueryMethod(methodName: string, routeTemplate: string) {
        let success = this._queryMethods.TryAdd(methodName, routeTemplate);
        if (!success) throw `Only one MvcQuery decorator is allowed per method: ${this._controller.constructor.name}.${methodName}, template: ${routeTemplate}`;
    }
    AddMvcPersistMethod(methodName: string, routeTemplate: string) {
        let success = this._persistMethods.TryAdd(methodName, routeTemplate);
        if (!success) throw `Only one MvcPersist decorator is allowed per method: ${this._controller.constructor.name}.${methodName}, template: ${routeTemplate}`;
    }
    AddMvcRouteToMethod(methodName: string, routeTemplate: string) {
        let success = this._routeMethods.TryAdd(methodName, routeTemplate);
        if (!success) throw `Only one MvcRoute decorator is allowed per method: ${this._controller.constructor.name}.${methodName}, template: ${routeTemplate}`;
    }
    private _queryMethods: Dictionary<string, string> = new Dictionary<string, string>();
    private _persistMethods: Dictionary<string, string> = new Dictionary<string, string>();
    private _routeMethods: Dictionary<string, string> = new Dictionary<string, string>();
    private _controllerTemplate: string | undefined;
    private _controller: Controller;
    constructor(controller: Controller) {
        this._controller = controller;
    }
}
