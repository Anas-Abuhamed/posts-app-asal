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
        index("routes/posts.tsx"),
        route("posts/:postId", "routes/post.tsx"),
        route("myposts", "routes/myPosts.tsx"),
      ]),
    ]),
    route("*", "routes/notFound.tsx"),
  ]
    // , { errorElement: "routes/error.tsx" }
  )
] satisfies RouteConfig;



// import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";
// import { redirectIfLoggedIn, requireAuth } from "./middleware/auth";

// export default [
//   layout("routes/layouts/rootRoute.tsx", [
//     index("routes/login.tsx", { middleware: [redirectIfLoggedIn] }),
//     route("register", "routes/register.tsx"),
//     route("logout", "routes/logout.tsx"),
//     route(
//       "dashboard",
//       "routes/layouts/dashboard.tsx",
//       [
//         index("routes/posts.tsx"),
//         route("posts/:postId", "routes/post.tsx"),
//         route("myposts", "routes/myPosts.tsx"),
//       ],
//       { middleware: [requireAuth] }
//     ),
//   ])
// ] satisfies RouteConfig;



