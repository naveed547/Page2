import React from "LibApp/react";

const Page2 = React.lazy(() => import("./App"));

const routes = [
  {
    path: "/page2",
    component: Page2,
  },
];

export default routes;
