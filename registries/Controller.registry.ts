import { Dictionary } from "../collections/Dictionary.js";
import { Controller } from "../Controller.js";

export class ControllerRegistry {
    Log() {
        this._controllers.KeyValuePairs.forEach((pair) => console.log(`Controller: ${pair.Key.constructor.name.padEnd(30)}, Route: ${pair.Value}`));
    }
    Register(controller: Controller): ControllerRegistry {
        debugger;
        let metadata = controller.Metadata;
        console.log(metadata);

        //TODO: use metadata to build a routes collection with each route broken into url /segments/, when browser navigates use filter all routes on the first url segment for a match and then the second, third, etc.. until a single match is found. Error on no matches and console log on multiple matches, but use the first

        // if (!this._controllers.ContainsKey(controller)) this._controllers.Add(controller, "");
        return this;
    }
    private _controllers: Dictionary<Controller, string> = new Dictionary<Controller, string>();
}
