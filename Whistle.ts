import { Component } from "./Component";
import { Controller } from "./Controller";
import { ControllerRegistry } from "./registries/Controller.registry";
import { Dictionary } from "./collections/Dictionary";
import { KeyValuePair } from "./collections/KeyValuePair";
import { Model } from "./Model";
import { MvcController } from "./decorators/MvcController.decorator";
import { MvcPersist } from "./decorators/MvcPersist.decorator";
import { MvcQuery } from "./decorators/MvcQuery.decorator";
import { StringPrototype } from "./prototypes/String.prototype";
import { View } from "./View";

export class Whistle {
    static Controllers: ControllerRegistry = new ControllerRegistry();
}

//export default { Whistle, Component, Controller, Model, View, String, MvcController, MvcPersist, MvcQuery, Dictionary, KeyValuePair };

//register early global classes here//
StringPrototype.Register();
