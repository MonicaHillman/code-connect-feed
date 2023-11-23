import BarraDePesquisa from '../../components/BarraDePesquisa';
import Filtro from '../../components/Filtro';
import Ordenacao from '../../components/Ordenacao';
import Sidebar from '../../components/Sidebar';
import './styles.css'
export default function Feed() {

    return (
        <div className='container'>
            <Sidebar />
            <main>
                <BarraDePesquisa />
                <Filtro />
                <Ordenacao />
            </main>
        </div>
    )
}