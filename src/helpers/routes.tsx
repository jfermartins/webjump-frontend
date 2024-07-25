import { NavListOptionsRoutes } from "../constants/constants";

export const HasThisRoute = (routeKey: string): boolean => {
    return Object.keys(NavListOptionsRoutes).includes(routeKey);
};
