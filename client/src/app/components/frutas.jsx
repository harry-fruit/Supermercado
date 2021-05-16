import React, { Component } from "react"

import img48 from "../../imagens/img48.png"
import img49 from "../../imagens/img49.png"
import img50 from "../../imagens/img50.png"
import img51 from "../../imagens/img51.png"
import img52 from "../../imagens/img52.png"
import img53 from "../../imagens/img53.png"
import img54 from "../../imagens/img54.png"
import img55 from "../../imagens/img55.png"
import img56 from "../../imagens/img56.png"
import img57 from "../../imagens/img57.png"
import img58 from "../../imagens/img58.png"
import img59 from "../../imagens/img59.png"
import img60 from "../../imagens/img60.png"
import img61 from "../../imagens/img61.png"
import img62 from "../../imagens/img62.png"

export class Frutas extends Component{
    render(){

        return (
            <>
                <h1>Seleção de Frutas</h1>

                <section className="container">

                    <div className="produto">
                        <img src={img57}></img>
                        <figcaption className="descricao">Manga tommy kg</figcaption>  
                        <p className="preco">R$ 3,99</p>
                    </div>

                    <div className="produto">
                        <img src={img58}></img>
                        <figcaption className="descricao">Maracujá azedo kg</figcaption>  
                        <p className="preco">R$ 5,98</p>
                    </div>

                    <div className="produto">
                        <img src={img59}></img>
                        <figcaption className="descricao">Mexerica ponkan kg</figcaption>  
                        <p className="preco">R$ 2,89</p>
                    </div>

                    <div className="produto">
                        <img src={img60}></img>
                        <figcaption className="descricao">Pera williams kg</figcaption>  
                        <p className="preco">R$ 7,99</p>
                    </div>

                    <div className="produto">
                        <img src={img61}></img>
                        <figcaption className="descricao">Uva branca bandeja 500 g</figcaption>  
                        <p className="preco">R$ 5,99</p>
                    </div>

                    <div className="produto">
                        <img src={img62}></img>
                        <figcaption className="descricao">Uva preta bandeja 500 g</figcaption>  
                        <p className="preco">R$ 6,49</p>
                    </div>

                    <div className="produto">
                        <img src={img49}></img>
                        <figcaption className="descricao">Abacate kg</figcaption>  
                        <p className="preco">4,59</p>
                    </div>

                    <div className="produto">
                        <img src={img50}></img>
                        <figcaption className="descricao">Caqui fuyu kg</figcaption>  
                        <p className="preco">R$ 4,99</p>
                    </div>

                    <div className="produto">
                        <img src={img51}></img>
                        <figcaption className="descricao">Goiaba vermelha kg</figcaption>  
                        <p className="preco">R$ 3,99</p>
                    </div>

                    <div className="produto">
                        <img src={img52}></img>
                        <figcaption className="descricao">Laranja pera kg</figcaption>  
                        <p className="preco">R$ 2,79</p>
                    </div>

                    <div className="produto">
                        <img src={img53}></img>
                        <figcaption className="descricao">Limão taiti kg</figcaption>  
                        <p className="preco">R$ 1,99</p>
                    </div>

                    <div className="produto">
                        <img src={img54}></img>
                        <figcaption className="descricao">Maçã Fuji kg</figcaption>  
                        <p className="preco">R$ 4,99</p>
                    </div>

                    <div className="produto">
                        <img src={img55}></img>
                        <figcaption className="descricao">Maçã Senninha pacote 1kg</figcaption>  
                        <p className="preco">R$ 4,49</p>
                    </div>

                    <div className="produto">
                        <img src={img56}></img>
                        <figcaption className="descricao">Mamão papaya unid.</figcaption>  
                        <p className="preco">R$ 2,99</p>
                    </div>

                    <div className="produto">
                        <img src={img48}></img>
                        <figcaption className="descricao">Abacaxi pérola unid.</figcaption>  
                        <p className="preco">R$ 5,39</p>
                    </div>

                </section>

            </>
        )

    }
}

export default (Frutas)