import React from 'react'
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>

    <div className="home">
       <main>
            <h1>Techistar</h1>
            <p>Solution to all your problem!!</p>
          </main>   
    </div>

    <div className="home2">
          <img src={vg} alt="Graphics" />
          <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat similique quo doloribus veniam eos, debitis laborum alias facilis cupiditate magnam tempora numquam, eius fugiat rem, porro accusantium maiores laudantium vel.</p>
          </div>
    </div>

    </>
  )
}

export default Home