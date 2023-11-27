
export default function Comentarios({ comentarios }) {
    return (
        <div>
            <h2>Comentários</h2>
            {comentarios ? comentarios.map((item, index) => (
                <li key={index}>
                    <h3>{item.usuario.nome}</h3>
                    <p>{item.texto}</p>
                </li>
            )) : null}
        </div>
    )
}