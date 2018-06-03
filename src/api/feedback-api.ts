import {BaseAPI} from "./base-api";

export class FeedbackAPI extends BaseAPI {
  servicePath = "/recruitment";

  getList() {
    return this._get("/apidemo.json");
  }
}