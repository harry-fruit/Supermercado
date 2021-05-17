import React, { Component } from "react"

export class Home extends Component{
    render(){

        return (
            <>
                <h1>Home</h1>
                <section className="container">
                    <section className="alunos">
                        <h2>DESENVOLVEDORES</h2>

                        <div className="student">
                            <p> Isaque Duarte Moreira </p>
                            <p> RGM:26416026</p>
                        </div> 

                        <div className="student">
                            <p>Guilherme Fernandes Pittner</p>
                            <p>RGM:26167662</p>
                        </div>

                        <div className="student">
                            <p>Marcos Augusto Quiuqui Machado Queiroz</p>
                            <p>RGM:22539409</p>
                        </div>

                        <div className="student">
                            <p>Thabata Amanda Gomide</p>
                            <p>RGM:22539409</p>
                        </div>

                    </section>
                </section>
            </>
        )

    }
}

export default (Home)