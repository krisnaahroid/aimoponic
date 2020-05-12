import React, { useState, useRef, useEffect } from 'react'
import Lottie from 'react-lottie';
import { NextSeo } from 'next-seo';
import useOnScreen from '../hooks/useOnScreen'

import "./main.scss"

import * as Hero from '../assets/lottiefiles/hero.json'
import * as Green from '../assets/lottiefiles/green.json'
import * as Red from '../assets/lottiefiles/red.json'

const Home = () => {

  const [green, setGreen] = useState(false)
  const [red, setRed] = useState(false)
  const [hero, setHero] = useState(false)

  const refGreen = useRef()
  const refRed = useRef()
  const refHero = useRef()

  const isGreen = useOnScreen(refGreen)
  const isRed = useOnScreen(refRed)
  const isHero = useOnScreen(refHero)

  useEffect(() => {
    console.log(`${isGreen ? 'VISIBLE':'NOT VISIBLE'}`)

    isGreen ? setGreen(true) : setGreen(false)
    isRed ? setRed(true) : setRed(false)
    isHero ? setHero(true) : setHero(false)

  },[isGreen, isRed, isHero])

  const defaultHero = {
    loop: false,
    autoplay: false, 
    animationData: Hero.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultGreen = {
    loop: false,
    autoplay: false, 
    animationData: Green.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultRed = {
    loop: false,
    autoplay: false, 
    animationData: Red.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return(
    <>
        <NextSeo
        title="Aimoponic Farm"
        description="Aimoponic is the leading farmer in Indonesia"
      />
        <div className="container">
          <section className="header">
              <div className="navigation">
                <div className="nav-item">
                  <h1>Aimoponic Farm</h1>
                  <p>Feel the freshness</p>
                </div>
                <div className="nav-item">
                  <div className="nav-wrap">
                    <nav>
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Vegetables</a></li>
                        <li><a href="#">Fishes</a></li>
                        <li><a href="#">About Us</a></li>
                      </ul>
                    </nav>
                    <button>Contact Us</button>
                  </div>
                  <div className="menu-mobile">
                    <img src="/static/menu.svg"/>
                  </div>
                </div>
              </div>

              <div className="hero-wrapper">
                <img src="/static/rect1.svg" draggable="false" className="rect1"/>
                <div className="hero-item">
                  <div className="title">
                    <h2 className="active">Fresh.</h2>
                    <h2>Sustainability.</h2>
                    <h2>Healthy way.</h2>
                  </div>
                  <div className="subtitle">
                    <p>
                      Fruits and vegetables contain essential nutrients for a healthy body. We must incorporte both of them in our daily diet.
                    </p>
                  </div>
                  <div className="buttons">
                    <button>Get in Touch</button>
                    <button className="outline">Request</button>
                  </div>
                </div>
                <div className="hero-item hero" ref={refHero}>
                <Lottie options={defaultHero}
                height={`100%`}
                width={`100%`}
                className="hero-lottie"
                isPaused={!hero} 
                isStopped={!hero}
                />
                </div>
              </div>
          </section>
          <section className="vegetables products">
              <div className="header">
                <h1>Our Vegetables</h1>
                <p>Vegetables are important part of healthy eating and provide a source of many nutrients, including potassium, fiber and vitamins A, E and C. Options like broccoli, Lettuce, tomatoes and so on additional benefits, making them a superfood!</p>
              </div>
              <div className="product">
                <div className="column lottie" ref={refGreen}>
                  <Lottie options={defaultGreen}
                  height={`unset`}
                  width={`100%`}
                  className="hero-lottie"
                  isPaused={!green} 
                  isStopped={!green}
                  />
                </div>
                <div className="column">
                  <h1>Green Oakleaf <br/> <span>Lettuce</span></h1>
                  <p>
                  Oak leaf lettuce (Lactuca sativa), is primarily grown in Yuma County as an addition to the baby leaf packaged salad industry and averages about 50 planted acres.
                  </p>
                  <div className="badge">
                    Western
                  </div>
                </div>
              </div>
              <div className="product reverse">
                <div className="column lottie" ref={refRed}>
                  <Lottie options={defaultRed}
                  height={`unset`}
                  width={`100%`}
                  className="hero-lottie"
                  isPaused={!red} 
                  isStopped={!red}
                  />
                </div>
                <div className="column">
                  <h1>Red Oakleaf <br/> <span>Lettuce</span></h1>
                  <p>
                  “Red Oak lettuce (Lactuca sativa “Red Oak”) is a type of leafy lettuce named for its burgundy-red, oak-shaped leaves that add flavor, nutrition and color to a sandwich or tossed green salad.
                  </p>
                  <div className="badge">
                    Western
                  </div>
                </div>
              </div>
          </section>
          <section className="fishes products">
              <div className="header">
                <h1>Our Fishes</h1>
                <p>Fish farming or pisciculture involves raising fish commercially in tanks or enclosures such as fish ponds, usually for food. It is the principal form of aquaculture, while other methods may fall under mariculture.</p>
              </div>
              <div className="product">
                <div className="column lottie">
                  <img src="/static/fishes.svg" className="fishes-hero"/>
                </div>
                <div className="column">
                  <h1>The Nile tilapia</h1>
                  <p>
                  The Nile tilapia (Oreochromis niloticus) is a species of tilapia, a cichlid fish native to the northern half of Africa and Israel.
                  </p>
                  <div className="badge">
                    Fish
                  </div>
                </div>
              </div>
          </section>
          <section className="banner-wrap">
            <div className="banner">
              <img src="/static/banner-img.png" className="banner-hero" draggable="false"/>
              <h1>Always a good time for <br/>harvest</h1>
              <button>Contact Us</button>
            </div>
          </section>
        </div>
    </>
  )
}

export default Home