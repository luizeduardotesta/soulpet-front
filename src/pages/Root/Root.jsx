import { Outlet } from "react-router-dom";
import { Header } from "../../componentes/Header/Header";

export function Root() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}