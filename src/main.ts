/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
import {Aurelia} from "aurelia-framework"
import environment from "./environment";
import {PLATFORM} from "aurelia-pal";
import * as Bluebird from "bluebird";

Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName("resources/index"));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName("aurelia-testing"));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName("views/app/app")));
}
