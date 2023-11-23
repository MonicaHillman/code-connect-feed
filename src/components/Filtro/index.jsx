import TermoFiltrado from "./TermoFiltrado";
import './styles.css'
export default function Filtro() {
    return (
        <section class='container-filtros'>
            <ul className="lista-filtros">
                <TermoFiltrado termo='Front-end' />
                <TermoFiltrado termo='Front-end' />
                <TermoFiltrado termo='Front-end' />
            </ul>
            <button>Limpar tudo</button>
        </section>
    )
}