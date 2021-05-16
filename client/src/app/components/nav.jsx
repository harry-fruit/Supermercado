import React, { Component } from "react"
import { BrowserRouter, Link } from "react-router-dom"

export class Nav extends Component{

    render(){

        return(

            <>
            
                <nav>
                        <Link to="/home">
                            <p>Home</p>
                        </Link>
                        <Link to="/carnes">
                            <p>Carnes</p>
                        </Link>
                        <Link to="/margarina">
                            <p>Margarina</p>
                        </Link>
                        <Link to="/graos">
                            <p>Graos</p>
                        </Link>
                        <Link to="/temperos">
                            <p>Temperos</p>
                        </Link>
                        <Link to="/doces">
                            <p>Doces</p>
                        </Link>
                        <Link to="/bebidas">
                            <p>Bebidas</p>
                        </Link>
                        <Link to="/higiene">
                            <p>Higiene</p>
                        </Link>
                        <Link to="/legumes">
                            <p>Legumes</p>
                        </Link>
                        <Link to="/frutas">
                            <p>Frutas</p>
                        </Link>
                        <Link to="/peixe">
                            <p>Peixes</p>
                        </Link>
                        <Link to="/contato">
                            <p>Contato</p>
                        </Link>
                </nav>

            </>

        )

    }

}

export default (Nav)