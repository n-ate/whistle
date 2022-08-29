export const MvcController = (routeTemplate: string): Function => {
    return (target: any): void => {
        let metadata = target.Metadata ?? target.prototype.Metadata;
        metadata.AddMvcControllerRoute(routeTemplate);
        //let target2 = class extends target {};
    };
};
