import React, { Component } from "react"

import img13 from "../../imagens/img13.png"

export class Graos extends Component{
    render(){

        return (
            <>
            <h1>Seção de Grãos</h1>

            <section className="container">

                <div className="produto">
                    <img src={img13}></img>
                    <figcaption className="descricao">Arroz branco Blue Ville tipo 1 5 kg</figcaption>  
                    <p className="preco">R$ 22,98</p>
                </div>

            </section>

        </>
        )

    }
}

export default (Graos)