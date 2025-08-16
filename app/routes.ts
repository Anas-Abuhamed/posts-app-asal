import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  // call component not route
  // // isAuthenticated
  // // logout route
  layout("routes/layouts/rootRoute.tsx", [
    layout("routes/layouts/entryProtected.tsx", [index("routes/login.tsx")]),
    route("register", "routes/register.tsx"),
    route("logout", "routes/logout.tsx"),
    layout("routes/layouts/innerProtected.tsx", [
      route("dashboard", "routes/layouts/dashboard.tsx", [
        // // default route
        index("routes/posts.tsx"),
        route("posts/:postId", "routes/post.tsx"),
        route("myposts", "routes/myposts.tsx"),
      ]),
    ]),
  ]
    // , { errorElement: "routes/error.tsx" }
  )
] satisfies RouteConfig;


