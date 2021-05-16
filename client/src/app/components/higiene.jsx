import React, { Component } from "react"

import img27 from "../../imagens/img27.png"
import img28 from "../../imagens/img28.png"
import img29 from "../../imagens/img29.png"
import img30 from "../../imagens/img30.png"
import img31 from "../../imagens/img31.png"

export class Higiene extends Component{
    render(){

        return (
            <>
            <h1>Seção de Higiene pessoal</h1>

            <section className="container">

                <div className="produto">
                    <img src={img27}></img>
                    <figcaption className="descricao">Kit enxaguante bucal Colgate Plax Total 12 500 ml + Plax 250 ml</figcaption>  
                    <p className="preco">R$ 19,69</p>
                </div>

                <div className="produto">
                    <img src={img28}></img>
                    <figcaption className="descricao">Kit toalha umedecida Johnson’s c/ 48 unidades Leve 4 Pague 3</figcaption>  
                    <p className="preco">R$ 32,89</p>
                </div>

                <div className="produto">
                    <img src={img29}></img>
                    <figcaption className="descricao">Lava roupas concentrado Ariel fragrâncias 1,2 L</figcaption>  
                    <p className="preco">R$ 17,90</p>
                </div>

                <div className="produto">
                    <img src={img30}></img>
                    <figcaption className="descricao">Limpador Veja Gold multiuso original 500 ml com 10% de desconto</figcaption>  
                    <p className="preco">R$ 2,99</p>
                </div>

                <div className="produto">
                    <img src={img31}></img>
                    <figcaption className="descricao">Papel higiênico Neve folha dupla ou tripla 20/30 metros com 4 unidades</figcaption>  
                    <p className="preco">R$ 6,99</p>
                </div>

            </section>

        </>
        )

    }
}

export default (Higiene)