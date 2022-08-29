export const MvcQuery = (routeTemplate: string) => {
    return (target: any, methodName: string, propertyDescriptor: PropertyDescriptor): void => {
        let metadata = target.Metadata ?? target.prototype.Metadata;
        metadata.AddMvcQueryMethod(methodName, routeTemplate);
    };
};
