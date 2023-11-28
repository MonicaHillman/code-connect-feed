import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import './styles.css'
import { useEffect, useState } from 'react';
import NaoEncontrada from '../NaoEncontrada';
import Codigo from '../../components/Codigo';
import Comentarios from '../../components/Comentarios';
export default function Postagem() {
    const [publicacao, setPublicacao] = useState();
    const parametros = useParams();

    console.log(publicacao)

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setPublicacao(...dados)
            })
    }, [])

    if (!publicacao) {
        return <NaoEncontrada />
    }

    return (
        <section className='container__publicacao'>
            <Card
                id={publicacao.id}
                imagemUrl={publicacao.imagem_capa}
                titulo={publicacao.titulo}
                resumo={publicacao.resumo}
                linhasDeCodigo={publicacao.linhas_de_codigo}
                compartilhamentos={publicacao.compartilhamentos}
                comentarios={publicacao.comentarios}
                usuario={publicacao.usuario}
            />

            
            <Codigo>
                {publicacao.conteudo_codigo}
            </Codigo>

            <Comentarios comentarios={publicacao.comentarios_postagem} />

        </section>
    )
}