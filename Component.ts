import { Model } from "./Model";
import { View } from "./View";
import { Controller } from "./Controller";

export class Component {
    private _model: Model;
    private _view: View;
    private _controller: Controller;

    constructor(model: Model, view: View, controller: Controller) {
        this._model = model;
        this._view = view;
        this._controller = controller;
    }
}
