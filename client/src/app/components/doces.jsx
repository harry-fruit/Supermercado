import React, { Component } from "react"

import img15 from "../../imagens/img15.png"
import img16 from "../../imagens/img16.png"
import img17 from "../../imagens/img17.png"

export class Doces extends Component{
    render(){

        return (
            <>
                <h1>Seção de Doces</h1>

                <section className="container">

                    <div className="produto">
                        <img src={img15}></img>
                        <figcaption className="descricao">Leite condensado Moça semidesnatado TP 395 g</figcaption>  
                        <p className="preco">R$ 4,69</p>
                    </div>

                    <div className="produto">
                        <img src={img16}></img>
                        <figcaption className="descricao">Chocolate em tablete Lacta sabores 90 g</figcaption>  
                        <p className="preco">R$ 4,19</p>
                    </div>

                    <div className="produto">
                        <img src={img17}></img>
                        <figcaption className="descricao">Chocolate Lindt Lindor Milk ou Swiss Classic 100 g</figcaption>  
                        <p className="preco">R$ 19,90</p>
                    </div>

                </section>
            </>
        )

    }
}

export default (Doces)