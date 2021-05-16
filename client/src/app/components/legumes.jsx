import React, { Component } from "react"

import img32 from "../../imagens/img32.png"
import img33 from "../../imagens/img33.png"
import img34 from "../../imagens/img34.png"
import img35 from "../../imagens/img35.png"
import img36 from "../../imagens/img36.png"
import img37 from "../../imagens/img37.png"
import img42 from "../../imagens/img42.png"
import img44 from "../../imagens/img44.png"
import img45 from "../../imagens/img45.png"
import img46 from "../../imagens/img46.png"
import img47 from "../../imagens/img47.png"

export class Legumes extends Component{
    render(){

        return (
            <>
            <h1>Seção de Legumes</h1>

            <section className="container">

                <div className="produto">
                    <img src={img32}></img>
                    <figcaption className="descricao">Abobrinha italiana kg</figcaption>  
                    <p className="preco">R$ 1,99</p>
                </div>

                <div className="produto">
                    <img src={img33}></img>
                    <figcaption className="descricao">Alho Roxo cada 100g</figcaption>  
                    <p className="preco">R$ 2,89</p>
                </div>

                <div className="produto">
                    <img src={img34}></img>
                    <figcaption className="descricao">Batata doce rosada kg</figcaption>  
                    <p className="preco">R$ 1,99</p>
                </div>

                <div className="produto">
                    <img src={img35}></img>
                    <figcaption className="descricao">Berinjela kg</figcaption>  
                    <p className="preco">R$ 3,89</p>
                </div>

                <div className="produto">
                    <img src={img36}></img>
                    <figcaption className="descricao">Cebola kg</figcaption>  
                    <p className="preco">R$ 4,49</p>
                </div>

                <div className="produto">
                    <img src={img37}></img>
                    <figcaption className="descricao">Cenoura kg</figcaption>  
                    <p className="preco">R$ 2,29</p>
                </div>

                <div className="produto">
                    <img src={img42}></img>
                    <figcaption className="descricao">Mandioquinha kg</figcaption>  
                    <p className="preco">R$ 6,98</p>
                </div>

                <div className="produto">
                    <img src={img44}></img>
                    <figcaption className="descricao">Pepino japonês kg</figcaption>  
                    <p className="preco">R$ 2,99</p>
                </div>

                <div className="produto">
                    <img src={img45}></img>
                    <figcaption className="descricao">Pimentão verde kg</figcaption>  
                    <p className="preco">R$ 3,79</p>
                </div>

                <div className="produto">
                    <img src={img46}></img>
                    <figcaption className="descricao">Tomate carmem kg</figcaption>  
                    <p className="preco">R$ 3,99</p>
                </div>

                <div className="produto">
                    <img src={img47}></img>
                    <figcaption className="descricao">Tomate Grape Mel Trebeschi 180 g</figcaption>  
                    <p className="preco">R$ 2,29</p>
                </div>

            </section>

        </>
        )

    }
}

export default (Legumes)