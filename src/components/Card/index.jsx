import React from 'react';
import './styles.css';
import Chat from './assets/chat.svg';
import Share from './assets/share.svg';
import Code from './assets/code.svg';
import { Link } from 'react-router-dom';

export default function Card({ id, imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios, usuario }) {
    return (

        <article className="card">
            <Link to={`/postagem/${id}`} className='card__link'>
                <div className='card__imagem'>
                    <img src={imagemUrl} alt='Imagem do post' />
                </div>

                <div className="card__conteudo">
                    <div className='conteudo__texto'>
                        <h3>{titulo}</h3>
                        <p>{resumo}</p>
                    </div>


                    <div className="conteudo__rodape">
                        <ul>
                            <li>
                                <img src={Code} alt='Ícone de código' />
                                {linhasDeCodigo}
                            </li>

                            <li>
                                <img src={Share} alt='Ícone de compartilhamento' />
                                {compartilhamentos}
                            </li>

                            <li>
                                <img src={Chat} alt='Ícone de chat' />
                                {comentarios}
                            </li>
                        </ul>

                        <div className='rodape__usuario'>
                            <img src={usuario.imagem} alt={`Imagem de ${usuario.nome}`} />
                            {usuario.nome}
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}
