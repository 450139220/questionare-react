import React from "react";
import type { RouteObject } from "react-router";
import Layout from "@/layout";
import NotFound from "@/layout/NotFound";

const Dashboard = React.lazy(() => import("@/views/dashboard"));
const Market = React.lazy(() => import("@/views/market"));
const Creation = React.lazy(() => import("@/views/creation"));

export const routes: RouteObject[] = [
    {
        Component: Layout,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/market",
                element: <Market />,
            },
            {
                path: "/create",
                element: <Creation />,
            },
        ],
    },
    {
        path: "*",
        Component: NotFound,
    },
];
