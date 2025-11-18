import { Outlet } from "react-router";
import Header from "./Header";
import Copyright from "./Copyright";

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Copyright />
        </>
    );
}
