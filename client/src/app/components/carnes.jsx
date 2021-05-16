import React, { Component } from "react"

import img1 from "../../imagens/img1.png"
import img2 from "../../imagens/img2.png"
import img3 from "../../imagens/img3.png"
import img4 from "../../imagens/img4.png"
import img5 from "../../imagens/img5.png"
import img6 from "../../imagens/img6.png"
import img7 from "../../imagens/img7.png"
import img8 from "../../imagens/img8.png"
import img9 from "../../imagens/img9.png"
import img10 from "../../imagens/img10.png"
import img11 from "../../imagens/img11.png"


export class Carnes extends Component{
    render(){

        return (
            <>
                <h1>Seção de Carnes</h1>

                <section className="container">

                    <div className="produto">
                        <img src={img1}></img>
                        <figcaption className="descricao">Picanha Friboi tradicional peça a vácuo kg</figcaption>  
                        <p className="preco">R$ 57,99</p>
                    </div>

                    <div className="produto">
                        <img src={img2}></img>
                        <figcaption className="descricao">Fraldinha Friboi peça kg</figcaption>  
                        <p className="preco">R$ 36,99</p>
                    </div>

                    <div className="produto">
                        <img src={img3}></img>
                        <figcaption className="descricao">Contrafilé pedaço kg</figcaption>  
                        <p className="preco">R$ 41,99</p>
                    </div>

                    <div className="produto">
                        <img src={img4}></img>
                        <figcaption className="descricao">Paleta de cordeiro Do Chef congelada peça kg</figcaption>  
                        <p className="preco">R$ 45,99</p>
                    </div>

                    <div className="produto">
                        <img src={img5}></img>
                        <figcaption className="descricao">Cupim Friboi pedaço kg</figcaption>  
                        <p className="preco">R$ 36,99</p>
                    </div>

                    <div className="produto">
                        <img src={img6}></img>
                        <figcaption className="descricao">Picanha suína Pamplona temperada resfriada peça kg</figcaption>  
                        <p className="preco">R$ 26,99</p>
                    </div>

                    <div className="produto">
                        <img src={img7}></img>
                        <figcaption className="descricao">Costela suína Perdigão a granel kg</figcaption>  
                        <p className="preco">R$ 21,99</p>
                    </div>

                    <div className="produto">
                        <img src={img8}></img>
                        <figcaption className="descricao">Bisteca suína Sadia a granel kg</figcaption>  
                        <p className="preco">R$ 17,99</p>
                    </div>

                    <div className="produto">
                        <img src={img9}></img>
                        <figcaption className="descricao">Coxinha da asa de frango a granel kg</figcaption>  
                        <p className="preco">R$ 14,99</p>
                    </div>

                    <div className="produto">
                        <img src={img10}></img>
                        <figcaption className="descricao">Linguiça toscana Seara a granel kg</figcaption>  
                        <p className="preco">R$ 15,29</p>
                    </div>

                    <div className="produto">
                        <img src={img11}></img>
                        <figcaption className="descricao">Linguiça calabresa defumada Seara a granel kg</figcaption>  
                        <p className="preco">R$ 18,59</p>
                    </div>

                </section>


            </>
        )

    }
}

export default (Carnes)