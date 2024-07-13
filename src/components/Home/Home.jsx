import React from "react";
import "./home.css"
import social from './social'

const Home = () => {
    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home_content grid">
                    <social/>
                    
                </div> 
            </div>
        </section>
    )
}

export default Home