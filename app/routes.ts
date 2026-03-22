import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),

    // authentification
    route('connexion', '././auth/Login.tsx'),
    route('inscription', '././auth/Inscription.tsx')
] satisfies RouteConfig;
