// export const HttpRoute = (target: ObjectConstructor): Function => {
//     Whistle.Routing.Controllers.Register(target);
//     return target;
//     // return class extends target {
//     //     fuel = 100;
//     // };

import { Controller } from "../Controller";

// };
export const MvcController = (routeTemplate: string): Function => {
    //debugger;
    // Whistle.Routing.Controllers.Register()
    return (target: any): void => {
        //debugger;
        let metadata = target.Metadata ?? target.prototype.Metadata;
        metadata.AddMvcControllerRoute(routeTemplate);
        //let target2 = class extends target {};
        // debugger;
        // return target;
    };
};
