import React, { Component } from "react"

import img14 from "../../imagens/img14.png"

export class Temperos extends Component{
    render(){

        return (
            <>
                <h1>Seção de Temperos</h1>

                <section className="container">

                    <div className="produto">
                        <img src={img14} className="fixSize"></img>
                        <figcaption className="descricao">Azeite de oliva Gallo clássico extra virgem vidro 500 ml</figcaption>  
                        <p className="preco">R$ 19,99</p>
                    </div>

                </section>
            </>
        )

    }
}

export default (Temperos)