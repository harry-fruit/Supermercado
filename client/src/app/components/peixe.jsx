import React, { Component } from "react"

import img38 from "../../imagens/img38.png"
import img39 from "../../imagens/img39.png"
import img40 from "../../imagens/img40.png"
import img41 from "../../imagens/img41.png"

export class Peixe extends Component{
    render(){

        return (
            <>
                <h1>Seção de Peixes</h1>

                <section className="container">

                    <div className="produto">
                        <img src={img38}></img>
                        <figcaption className="descricao">Tilápia inteira fresca kg</figcaption>  
                        <p className="preco">R$ 17,99</p>
                    </div>

                    <div className="produto">
                        <img src={img39}></img>
                        <figcaption className="descricao">Tambaqui de cativeiro inteiro fresco kg</figcaption>  
                        <p className="preco">R$ 21,79</p>
                    </div>

                    <div className="produto">
                        <img src={img40}></img>
                        <figcaption className="descricao">Pintado de cativeiro inteiro fresco kg</figcaption>  
                        <p className="preco">R$ 28,99</p>
                    </div>

                    <div className="produto">
                        <img src={img41}></img>
                        <figcaption className="descricao">Camarão Oceani descascado cozido congelado 400 g</figcaption>  
                        <p className="preco">R$ 39,99</p>
                    </div>

                </section>

        </>
        )

    }
}

export default (Peixe)