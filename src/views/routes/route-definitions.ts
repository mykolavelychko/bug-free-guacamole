import {PLATFORM} from "aurelia-pal";
import {AppRouter, NavigationInstruction, RouteConfig} from "aurelia-router";

/**
 * Setup routes for app.
 */
export class RouteDefinitions {

  private redirectToFirstNavRoute: (instruction: NavigationInstruction) => Promise<void> | void;

  constructor(router: AppRouter) {
    this.redirectToFirstNavRoute = instruction => {
      instruction.config.redirect = router.navigation[0].config.route as string;
    };
  }

  getRoutes(): RouteConfig[] {
    return this.allRoutes();
  }

  private allRoutes(): RouteConfig[] {
    return [
      {
        route: "",
        navigationStrategy: this.redirectToFirstNavRoute
      },
      {
        name: "feedback-list",
        route: "feedback-list",
        moduleId: PLATFORM.moduleName("views/pages/feedback-list/feedback-list"),
        nav: true,
        title: "Feedback list"
      },
      {
        name: "feedback",
        route: "feedback",
        moduleId: PLATFORM.moduleName("views/pages/feedback/feedback"),
        nav: true,
        title: "Feedback"
      }
    ];
  }

}
