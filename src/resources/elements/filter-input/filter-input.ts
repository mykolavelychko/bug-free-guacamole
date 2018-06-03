import {bindable, bindingMode} from "aurelia-framework";

export class FilterInput {
  @bindable({defaultBindingMode: bindingMode.twoWay}) value;
  @bindable placeholder;
}
