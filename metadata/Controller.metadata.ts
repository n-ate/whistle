import { Controller } from "../Controller";
import { Dictionary } from "../collections/Dictionary";

export class ControllerMetadata {
    private _controller: Controller;
    private _controllerTemplate: string | undefined;
    private _persistMethods: Dictionary<string, string> = new Dictionary<string, string>();
    private _queryMethods: Dictionary<string, string> = new Dictionary<string, string>();
    private _routeMethods: Dictionary<string, string> = new Dictionary<string, string>();

    get Controller(): Controller {
        return this._controller;
    }
    get ControllerTemplate(): string {
        return this._controllerTemplate ?? "";
    }
    get PersistMethods(): Dictionary<string, string> {
        return new Dictionary<string, string>(this._persistMethods);
    }
    get QueryMethods(): Dictionary<string, string> {
        return new Dictionary<string, string>(this._queryMethods);
    }
    get RouteMethods(): Dictionary<string, string> {
        return new Dictionary<string, string>(this._routeMethods);
    }

    constructor(controller: Controller) {
        this._controller = controller;
    }

    AddMvcControllerRoute(routeTemplate: string) {
        if (this._controllerTemplate !== undefined) throw `Only one MvcController decorator is allowed per class: ${this._controller.constructor.name}, template: ${routeTemplate}`;
        this._controllerTemplate = routeTemplate;
    }
    AddMvcPersistMethod(methodName: string, routeTemplate: string) {
        let success = this._persistMethods.TryAdd(methodName, routeTemplate);
        if (!success) throw `Only one MvcPersist decorator is allowed per method: ${this._controller.constructor.name}.${methodName}, template: ${routeTemplate}`;
    }
    AddMvcQueryMethod(methodName: string, routeTemplate: string) {
        let success = this._queryMethods.TryAdd(methodName, routeTemplate);
        if (!success) throw `Only one MvcQuery decorator is allowed per method: ${this._controller.constructor.name}.${methodName}, template: ${routeTemplate}`;
    }
    AddMvcRouteToMethod(methodName: string, routeTemplate: string) {
        let success = this._routeMethods.TryAdd(methodName, routeTemplate);
        if (!success) throw `Only one MvcRoute decorator is allowed per method: ${this._controller.constructor.name}.${methodName}, template: ${routeTemplate}`;
    }
}
