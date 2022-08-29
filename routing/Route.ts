import { Controller } from "../Controller";
import { RouteSegment } from "./RouteSegment";
import { StringExtension } from "../prototypes/StringExtension.interface";

export class Route {
    private _controller: Controller;
    private _methodName: string;
    private _routeSegments: RouteSegment[];

    get Controller(): Controller {
        return this._controller;
    }
    get MethodName(): string {
        return this._methodName;
    }
    get RouteSegments(): RouteSegment[] {
        return this._routeSegments;
    }

    constructor(controller: Controller, controllerTemplate: string, methodName: string, routeTemplate: string, otherTemplate: string) {
        this._controller = controller;
        this._methodName = methodName;
        let template = this.combineRouteTemplates(controllerTemplate, routeTemplate, otherTemplate);
        this._routeSegments = template.split("/").map((segment) => new RouteSegment(segment));
    }

    private combineRouteTemplates(controllerTemplate: string, routeTemplate: string, otherTemplate: string): string {
        let template = `${(controllerTemplate as String as StringExtension).trimAll("/")}/${(routeTemplate as String as StringExtension).trimAll("/")}/${(otherTemplate as String as StringExtension).trimAll("/")}`;
        let previousLength = -1;
        do {
            previousLength = template.length;
            template = template.replace("//", "/"); //remove repeated slashes
        } while (template.length !== previousLength);
        return (template as String as StringExtension).trimAll("/");
    }

    Matches(url: URL): boolean {
        let segments = url.pathname.split("/");
        if (segments.length !== this.RouteSegments.length) return false;
        for (let i = 0; i < segments.length; i++) {
            if (segments[i] !== this.RouteSegments[i].Raw) return false; //TODO: improve segments to support variable captures
        }
        return true;
    }
}
