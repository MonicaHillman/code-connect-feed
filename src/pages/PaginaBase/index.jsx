import './styles.css'
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
export default function PaginaBase() {
    return (
        <div className='container'>
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}