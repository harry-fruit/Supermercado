import React, { Component } from "react"

import img12 from "../../imagens/img12.png"

export class Margarina extends Component{
    render(){

        return (
            <>
                <h1>Seção de Margarina</h1>

                <section className="container">

                    <div className="produto">
                        <img src={img12}></img>
                        <figcaption className="descricao">Margarina Qualy tradicional 500 g</figcaption>  
                        <p className="preco">R$ 4,99</p>
                    </div>

                </section>


            </>
        )

    }
}

export default (Margarina)