import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>

    <div className="home" id='home'>
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

    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dicta voluptate, consequuntur odio quam accusamus quae explicabo quos soluta magnam, molestias aut excepturi cupiditate eveniet enim alias sint dolor numquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate voluptate voluptatibus dolore accusantium culpa nobis. Vel blanditiis, laborum illum quia maxime aliquid, doloremque, cupiditate quod iste earum eligendi necessitatibus!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate commodi incidunt delectus saepe! Nisi veritatis doloremque modi officia mollitia ex aperiam? Neque sint iure error consequatur inventore quibusdam vitae.
        </p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.3s"
          }} 
          >
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s"
          }} 
          >
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay:"0.7s"
          }} 
          >
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{
            animationDelay:"1s"
          }} 
          >
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>

    </>
  )
}

export default Home