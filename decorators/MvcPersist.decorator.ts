// const HttpGet = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
//     // do something with your method
// };

export const MvcPersist = (routeTemplate: string) => {
    //debugger;
    return (target: any, methodName: string, propertyDescriptor: PropertyDescriptor): void => {
        let metadata = target.Metadata ?? target.prototype.Metadata;
        metadata.AddMvcQueryMethod(methodName, routeTemplate);
        //debugger;
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
