// const HttpGet = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
//     // do something with your method
// };

import { Controller } from "../Controller.js";
import { ControllerMetadata } from "../metadata/Controller.metadata.js";

export const MvcQuery = (routeTemplate: string) => {
    //debugger;

    return (target: any, methodName: string, propertyDescriptor: PropertyDescriptor): void => {
        //let target2 = class extends target {};
        let metadata = target.Metadata ?? target.prototype.Metadata;
        metadata.AddMvcQueryMethod(methodName, routeTemplate);
        // Whistle.Routing.Controllers.UpdateRegistration(target, routeTemplate);
        //debugger;
        //return target;
    };
    // return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    //     propertyDescriptor.enumerable = value;
    //   }
};

// const allowlistOnly = (allowlist: string[]) => {
//     return (target: any, memberName: string) => {
//       let currentValue: any = target[memberName];

//       Object.defineProperty(target, memberName, {
//         set: (newValue: any) => {
//           if (!allowlist.includes(newValue)) {
//             return;
//           }
//           currentValue = newValue;
//         },
//         get: () => currentValue
//       });
//     };
//   }
