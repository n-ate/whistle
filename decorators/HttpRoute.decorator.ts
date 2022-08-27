import { Whistle } from "../whistle.js";

export const HttpRoute = (target: ObjectConstructor): Function => {
    Whistle.Routing.Controllers.Register(target);
    return target;
    // return class extends target {
    //     fuel = 100;
    // };
};
