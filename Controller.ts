import { ControllerMetadata } from "./metadata/Controller.metadata";

export class Controller {
    constructor() {}

    private _metadata: ControllerMetadata | undefined;

    get Metadata(): ControllerMetadata {
        if (this._metadata === undefined) this._metadata = new ControllerMetadata(this);
        return this._metadata;
    }
}
