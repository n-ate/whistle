import { Controller } from "../../Controller.js";
import { MvcController } from "../../decorators/MvcController.decorator.js";
import { MvcQuery } from "../../decorators/MvcQuery.decorator.js";

@MvcController("/segment/")
export class HomeController extends Controller {
    constructor() {
        super();
    }

    @MvcQuery("/index")
    GetIndex() {}
}
