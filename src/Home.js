import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image'
                    src='https://img.paisawapas.com/ovz3vew9pw/2022/05/25140703/blog-2.jpg' alt='' />
                <div className='home_row'>
                    <Product id="24838839" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses [Paperback]" price={29.99} image='https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg' rating={5} />
                    <Product id="24888321" title="Kenwood Kitchen Machine kMix KMX750WH - 1000W|5L mixing bowl | K-beater, Whipping Tool & Dough Kneading Tool" price={249} image='https://m.media-amazon.com/images/I/71Q5iEc0PXL._SX425_.jpg' rating={4} />
                </div>
                <div className='home_row'>
                    <Product id="24838830" title="Samsung Galaxy Watch5 LTE (44 mm, Sapphire, Compatible with Android only)" price={99} image="https://m.media-amazon.com/images/I/61aVQDazNHL._SX450_.jpg" rating={3} />
                    <Product id="24838321" title="Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Black)" price={79} image='https://m.media-amazon.com/images/I/61dgl2srHDL.jpg' rating={5} />
                    <Product id="24831232" title="Apple 2021 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Silver (9th Generation)" price={599.90} image='https://m.media-amazon.com/images/I/61PnHlc0HCL._SX679_.jpg' rating={5} />

                </div>
                <div className='home_row'>
                    <Product id="24838811" title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)" price={899} image='https://m.media-amazon.com/images/I/51uVckL1jRL._SY300_SX300_QL70_FMwebp_.jpg' rating={5} />
                </div>

            </div>
        </div>
    )
}

export default Home
