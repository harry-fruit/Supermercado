import React, { Component, Fragment } from "react"

export class Contato extends Component{
    render(){

        return (
            <>  
               <h1>Contato</h1>
               <section className="container">
                  <section className="contato">  
                    <h2>Esta com alguma Dúvida? Preencha o formulário para entrar em contato. </h2>
                        <label>
        
                            <input type="text" placeholder="Nome"/>

                            <input type="text" placeholder="Email" />
                    
                    
                        </label>
                        <label>
        
                            <textarea rows="4" cols="50"  placeholder="Digite sua Dúvida"></textarea>

                    
                        </label>
                <button>Enviar</button>
                  </section>
                </section>
            </>
         
        )

    }
}

export default (Contato)