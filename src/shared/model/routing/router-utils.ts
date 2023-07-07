import {ModuleContext} from "./module-context";
import {RouteContext} from "./route-context";

export class RouterUtils {
  static getRoute(module: ModuleContext, route: RouteContext | null, suffix: string | object = '', extra: string = ''): string {
    if (typeof suffix === 'object' && route) {
      let uri = route.uri;
      Object.entries(suffix).forEach((k) => {
        uri = uri.replace(`:${k[0]}`, k[1]);
      });
      return '/' + module.id + uri + extra;
    } else {
      return '/' + module.id + (route?.uri || '') + suffix;
    }
  }
}
