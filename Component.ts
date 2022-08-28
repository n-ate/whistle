import { Model } from "./Model.js";
import { View } from "./View.js";
import { Controller } from "./Controller.js";

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
