import {RouteConfig} from "aurelia-router";
import {RouteDefinitions} from "views/routes/route-definitions";

export class App {

  router;

  configureRouter(config, router) {
    this.router = router;

    config.title = "Usabilla Assignment";
    // Configure routes
    config.map(this.getRouteDefinitions(router));
    // Route to the first state if the route is unknown
    config.mapUnknownRoutes(_ => router.navigation[0].config);
  }

  private getRouteDefinitions(router): RouteConfig[] {
    return new RouteDefinitions(router).getRoutes();
  }
}
