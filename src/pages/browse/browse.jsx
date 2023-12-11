import React from 'react'
import './browse.css';
import tv from '../browse/browse-img/tv-27.png';
import film from '..//browse/browse-img/film.png';
import book from '..//browse/browse-img/publish.png';
import watt from '../browse/browse-img/compiled.png';
import img1 from '../browse/famous-lines/img1.png';
import img2 from '../browse/famous-lines/img2.jpg';
import img3 from '../browse/famous-lines/img3.png';
import img4 from '../browse/famous-lines/img4.jpg';
import img5 from '../browse/famous-lines/img5.jpg';
import img6 from '../browse/famous-lines/img6.jpg';
import img7 from '../browse/famous-lines/img7.jpg';


export const Browse = () => {
  return (
    <div>
      <section className='hero'>
        <div className='content1'>
            <div className="text">
                <h4>Hi! We're Story Sellers.</h4>
                <h1>Unleashing World, One Story at a Time.</h1>
                <h4>
                    <button className="button1">Shop Now</button> <span>where your next adventure awaits.</span>
                </h4> 
                <p>Discover the magic of storytelling with Story Sellers. Each book is a key to a new adventure, a fresh perspective, and boundless imagination. Your journey begins with us—come, explore the world, one book at a time. Dive into a story, find your escape, and create memories that last a lifetime. Let's make your reading dreams come true.</p>
            </div>
        </div>
      </section>

    <section className='hero2'>
         <h1 className='text2'>Free your Story..</h1>
         <div className="container">
            <div className="row">
                <div className="offer">
                    <img className="icons" src={tv} alt="icon1" />
                    <h2>Cinematic Adaption</h2>
                </div>
                <div className="offer">
                    <img className="icons" src={film} alt="icon2" />
                    <h2>Brought to a small television</h2>
                </div>
                <div className="offer">
                    <img className="icons" src={book} alt="icon3" />
                    <h2>New Published Stories</h2>
                </div>
            </div>
         </div>

         <div className="container2">
            <img className='wat' src={watt}/>
         </div>

         <div className="container3">
            <h1>Your favorite story could be here.</h1>
            <p>Embark on a literary journey where your favorite story awaits, nestled within the enchanting pages of bound imagination. Let the magic of storytelling unfold as you explore the depths of characters, landscapes, and emotions, making every page a cherished escape into a world uniquely yours.</p>
         </div>
    </section>

    
    <section className='hero3'> 
        <h1 class="famous">Famous Lines from the Books.</h1>
        <div className="lines">
            <div className="slide-container">
                <span className="slider-span" id="slider-span1"></span>
                <span className="slider-span" id="slider-span2"></span>
                <span className="slider-span" id="slider-span3"></span>
                <span className="slider-span" id="slider-span4"></span>
                <span className="slider-span" id="slider-span5"></span>
                <span className="slider-span" id="slider-span6"></span>
                <span className="slider-span" id="slider-span7"></span>

                <div className="image-slider">
                <div className="slide-div" id="slide-1">
                <img src={img1} alt="img1" className="img" id="img1" />
                <a href="#slider-span1" className="button" id="button-1"></a>
                </div>
                <div className="slide-div" id="slide-2">
                <img src={img2} alt="img2" className="img" id="img2" />
                <a href="#slider-span2" className="button" id="button-2"></a>
                </div>
                <div className="slide-div" id="slide-3">
                <img src={img3} alt="img3" className="img" id="img3" />
                <a href="#slider-span3" className="button" id="button-3"></a>
                </div>
                <div className="slide-div" id="slide-4">
                <img src={img4} alt="img4" className="img" id="img4" />
                <a href="#slider-span4" className="button" id="button-4"></a>
                </div>
                <div className="slide-div" id="slide-5">
                <img src={img5} alt="img5" className="img" id="img5" />
                <a href="#slider-span5" className="button" id="button-5"></a>
                </div>
                <div className="slide-div" id="slide-6">
                <img src={img6} alt="img6" className="img" id="img6" />
                <a href="#slider-span6" className="button" id="button-6"></a>
                </div>
                <div className="slide-div" id="slide-7">
                <img src={img7} alt="img7" className="img" id="img7" />
                <a href="#slider-span7" className="button" id="button-7"></a>
                </div>
            </div>
            </div> 

        </div>
    </section>

    </div>
  )
}
