import './styles.css';
export default function Comentarios({ comentarios }) {
    return (
        <div className="container__comentarios">
            <h2>Comentários</h2>
            <ul className="comentarios__lista">
                {comentarios ? comentarios.map((item, index) => (
                    <li key={index}>
                        <span>
                            <img src='https://www.w3schools.com/howto/img_avatar.png' alt="avatar" />
                            <p>{item.usuario.nome}</p>
                            <p>{item.texto}</p>
                        </span>
                        <a href="#" className='comentarios__item'>Responder</a>
                        <a href="#" className='comentarios__item link__respostas'>Ver respostas</a>

                    </li>
                )) : null}
            </ul>
        </div >
    )
}