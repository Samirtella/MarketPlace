import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route('connexion', '././auth/Login.tsx')
] satisfies RouteConfig;
