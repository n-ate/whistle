import { Controller } from "../Controller";
import { Route } from "../routing/Route";

export class ControllerRegistry {
    private _persistRoutes: Route[] = [];
    private _queryRoutes: Route[] = [];

    LogRoutes() {
        console.log("** Persist Routes **");
        this._persistRoutes.forEach((r) => console.log(`Method: ${r.Controller.constructor.name.padStart(20)}.${r.MethodName.padEnd(20)} Route: ${r.RouteSegments.map((s) => s.Raw).join("/")}`));
        console.log("** Query Routes **");
        this._queryRoutes.forEach((r) => console.log(`Method: ${r.Controller.constructor.name.padStart(20)}.${r.MethodName.padEnd(20)} Route: ${r.RouteSegments.map((s) => s.Raw).join("/")}`));
    }
    Register(controller: Controller): ControllerRegistry {
        //NOTE: all decorators are called before this point, so all metadata should be available for the entire controller
        let metadata = controller.Metadata;
        let routeMethodNames = metadata.RouteMethods.Keys;
        let persistMethodNames = metadata.PersistMethods.Keys.filter((persistName) => !routeMethodNames.some((routeName) => routeName === persistName));
        let queryMethodNames = metadata.QueryMethods.Keys.filter((queryName) => !routeMethodNames.some((routeName) => routeName === queryName));

        //persist//
        let methodNames = routeMethodNames.concat(persistMethodNames);
        for (let i = 0; i < methodNames.length; i++) {
            let name = methodNames[i];
            let routeName = metadata.RouteMethods.TryGet(name) ?? "";
            let persistName = metadata.PersistMethods.TryGet(name) ?? "";
            let route = new Route(metadata.Controller, metadata.ControllerTemplate, name, routeName, persistName);
            this._persistRoutes.push(route);
        }

        //query//
        methodNames = routeMethodNames.concat(queryMethodNames);
        for (let i = 0; i < methodNames.length; i++) {
            let name = methodNames[i];
            let routeName = metadata.RouteMethods.TryGet(name) ?? "";
            let queryName = metadata.QueryMethods.TryGet(name) ?? "";
            let route = new Route(metadata.Controller, metadata.ControllerTemplate, name, routeName, queryName);
            this._queryRoutes.push(route);
        }
        return this;
    }
}
