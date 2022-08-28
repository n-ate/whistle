import { Controller } from "./Controller.js";

export class Route {
    private _routeTemplate: string;
    private _controller: Controller;

    constructor(controller: Controller, routeTemplate: string) {
        this._routeTemplate = routeTemplate;
        this._controller = controller;
    }

    static CombineRouteTemplates(template1: string, template2: string): string {
        if (template1.endsWith("/")) template1 = template1.substring(0, template1.length - 1);
        if (template2.startsWith("/")) template2 = template2.substring(1);
        return `${template1}/${template2}`;
    }
}
