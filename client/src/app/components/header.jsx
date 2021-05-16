import React, { Component } from "react"

import logoA from "../../imagens/logoA.png"

export class Header extends Component{

    render(){

        return(

            <>
            
                <header>
                    <img src={logoA}></img>
                    <h1>Supermercados A</h1>
                </header>

            </>

        )

    }

}

export default (Header)