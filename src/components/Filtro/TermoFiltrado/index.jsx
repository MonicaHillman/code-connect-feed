import './styles.css'
export default function TermoFiltrado({ termo }) {
    return (
        <li className='lista-filtros__item'>
            {termo}
        </li>
    )
}