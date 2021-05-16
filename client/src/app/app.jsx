import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Home } from "./components/home"
import { Carnes } from "./components/carnes"
import { Margarina } from "./components/margarina"
import { Graos } from "./components/graos"
import { Temperos } from "./components/temperos"
import { Doces } from "./components/doces"
import { Bebidas } from "./components/bebidas"
import { Higiene } from "./components/higiene"
import { Legumes } from "./components/legumes"
import { Frutas } from "./components/frutas"
import { Peixe } from "./components/peixe"
import { Contato } from "./components/contato"

import { Header } from "./components/header"
import { Nav } from "./components/nav"
import { Footer } from "./components/footer"



export class App extends Component{

    render(){

        const App = () => (
            <main>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/carnes" component={Carnes}/>
                    <Route path="/margarina" component={Margarina}/>
                    <Route path="/graos" component={Graos}/>
                    <Route path="/temperos" component={Temperos}/>
                    <Route path="/doces" component={Doces}/>
                    <Route path="/bebidas" component={Bebidas}/>
                    <Route path="/higiene" component={Higiene}/>
                    <Route path="/legumes" component={Legumes}/>
                    <Route path="/frutas" component={Frutas}/>
                    <Route path="/peixe" component={Peixe}/>
                    <Route path="/contato" component={Contato}/>
                </Switch>
                
            </main>

        )

        return (

            <>
                <Header/>
                <BrowserRouter>
                    <Nav/>
                    <App/>
                </BrowserRouter>
                <Footer/>
            </>
        )

    }
    
}

export default (App)