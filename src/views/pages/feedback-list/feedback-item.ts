import {bindable} from "aurelia-framework";

export class FeedbackItem {
  @bindable 
  feedback: any;
  
  @bindable
  expanded: boolean = false;
}
