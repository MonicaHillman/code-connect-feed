import { useState, useEffect } from 'react';
import BarraDePesquisa from '../../components/BarraDePesquisa';
import Card from '../../components/Card';
import Filtro from '../../components/Filtro';
import Ordenacao from '../../components/Ordenacao';
import './styles.css'
export default function Feed() {
    const [dados, setDados] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes').then(
            resposta => resposta.json()
        )
            .then(dados => setDados(dados))
    }, [])

    console.log(dados)

    return (

        <>
            <BarraDePesquisa />
            <Filtro />
            <Ordenacao />


            <ul className="cards">
                {dados ? dados.map((item, index) => (
                    <li key={index}>
                        <Card
                            id={item.id}
                            imagemUrl={item.imagem_capa}
                            titulo={item.titulo}
                            resumo={item.resumo}
                            linhasDeCodigo={item.linhas_de_codigo}
                            compartilhamentos={item.compartilhamentos}
                            comentarios={item.comentarios}
                            usuario={item.usuario}
                        />
                    </li>
                )) : null
                }
            </ul>

        </>

    )
}