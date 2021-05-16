import React, { Component } from "react"

export class Footer extends Component{

    render(){

        return(

            <>
            
                <footer>
                    <p>&copy;copyright, 2021</p>

                    <section className="social">
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-linkedin"></i>
                    </section>
                </footer>

            </>

        )

    }

}

export default (Footer)