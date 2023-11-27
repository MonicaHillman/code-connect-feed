import Feed from "./pages/Feed";
import Postagem from "./pages/Postagem";
import PaginaBase from "./pages/PaginaBase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NaoEncontrada from "./pages/NaoEncontrada";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Feed />}></Route>
                    <Route path="/postagem/:id" element={<Postagem />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;