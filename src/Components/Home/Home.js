import React, { Component } from 'react'
import './Home.css'
import ImageSlider from './Slider/ImageSlider'
import { SliderData } from './Slider/SliderData'
import { Link } from 'react-router-dom';


class Home extends Component {
    render(){
        return (
            <div>
                <main>
                    <br />
                        <ImageSlider className="slider-image"slides={SliderData}/>
                    <h2>Who we are</h2>
                    <p>We're a new sneaker reselling business that is ready to grow and provide people with instant access to purchase our products through this website.</p>
                </main>
            </div>
        )
    }
}

export default Home