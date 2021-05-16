import React, { Component } from "react"

import img18 from "../../imagens/img18.png"
import img19 from "../../imagens/img19.png"
import img20 from "../../imagens/img20.png"
import img21 from "../../imagens/img21.png"
import img22 from "../../imagens/img22.png"
import img23 from "../../imagens/img23.png"
import img24 from "../../imagens/img24.png"
import img25 from "../../imagens/img25.png"
import img26 from "../../imagens/img26.png"

export class Bebidas extends Component{
    render(){

        return (
            <>
            <h1>Seção de Bebidas</h1>

            <section className="container">

                <div className="produto">
                    <img src={img18}></img>
                    <figcaption className="descricao">Refrigerante H2OH! sabores pet 1,5 L</figcaption>  
                    <p className="preco">R$ 4,99</p>
                </div>

                <div className="produto">
                    <img src={img19}></img>
                    <figcaption className="descricao">Cerveja Bohemia puro malte lata 350 ml</figcaption>  
                    <p className="preco">R$ 2,49</p>
                </div>

                <div className="produto">
                    <img src={img20}></img>
                    <figcaption className="descricao">Vinho Espumante Casa Perini moscatel branco 750 ml</figcaption>  
                    <p className="preco">R$ 46,99</p>
                </div>
                <div className="produto">
                    <img src={img21}></img>
                    <figcaption className="descricao">Vinho Espumante Salton moscatel branco 750 ml</figcaption>  
                    <p className="preco">R$ 29,90</p>
                </div>
                <div className="produto">
                    <img src={img22}></img>
                    <figcaption className="descricao">Vinho Salton Intenso merlot tinto 750 ml</figcaption>  
                    <p className="preco">R$ 31,90</p>
                </div>
                <div className="produto">
                    <img src={img23}></img>
                    <figcaption className="descricao">Vinho Frisante Mioranza suave rosé 750 ml</figcaption>  
                    <p className="preco">R$ 19,90</p>
                </div>
                <div className="produto">
                    <img src={img24}></img>
                    <figcaption className="descricao">Vinho Frances Bois Mirail Rouge tinto 750 ml</figcaption>  
                    <p className="preco">R$ 31,90</p>
                </div>
                <div className="produto">
                    <img src={img25}></img>
                    <figcaption className="descricao">Vinho Chileno Tres Toros cabernet sauvignon tinto 750 ml</figcaption>  
                    <p className="preco">R$ 29,90</p>
                </div>
                <div className="produto">
                    <img src={img26}></img>
                    <figcaption className="descricao">Vinho Português Terra Mãe tinto 750 ml</figcaption>  
                    <p className="preco">R$ 30,90</p>
                </div>

            </section>

        </>
        )

    }
}

export default (Bebidas)