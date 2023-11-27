import TermoFiltrado from "./TermoFiltrado";
import './styles.css'
export default function Filtro() {
    return (
        <section className='container-filtros'>
            <ul className="lista-filtros">
                <TermoFiltrado termo='Programação' />
            </ul>
            <button>Limpar tudo</button>
        </section>
    )
}