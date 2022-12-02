import React from 'react'
import CardItem from './CardItem';
import './Card.css'
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import img6 from '../images/img-6.jpg';
import img7 from '../images/img-7.jpg';
import img8 from '../images/img-8.jpg';
import img9 from '../images/img-9.jpg';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these wonderful destinations!</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                 <CardItem 
                 src ={img9}
                 text ="Explore the waterfall hidden deep inside the Amazon jungle"
                 label = 'Adventure'
                 path = '/CryptoTracker'
                 />
                  <CardItem 
                 src ={img2}
                 text ="Cruise around the beautiful islands of hawai"
                 label = 'Luxury'
                 path = '/CryptoTracker'
                 />
                 </ul>
                 <ul className='cards_items'>
                  <CardItem 
                 src ={img1}
                 text ="Trek on the high mountains of himalayas"
                 label = 'Trekking'
                 path = '/CryptoTracker'
                 />
                  <CardItem 
                 src ={img3}
                 text ="Surf through the deep Indian Ocean"
                 label = 'Surfing'
                 path = '/CryptoTracker'
                 />
                </ul>

                <ul className='cards_items'>
                   <CardItem 
                 src ={img4}
                 text ="Experience the football in the middle of the sea"
                 label = 'Adventure'
                 path = '/CryptoTracker'
                 />
                   <CardItem 
                 src ={img8}
                 text ="Enjoy the desert safari in the sahara desert"
                 label = 'Safari'
                 path = '/CryptoTracker'
                 />
                 </ul>
                 <ul className='cards_items'>
                   <CardItem 
                 src ={img6}
                 text ="Explore the busy roads of New York City"
                 label = 'Lifestyle'
                 path = '/CryptoTracker'
                 />
                   <CardItem 
                 src ={img7}
                 text ="Party in the wonderful ambience of a club in Bali islands"
                 label = 'Chill & Fun'
                 path = '/CryptoTracker'
                 />
                 </ul>
                 </div>
              </div>
          </div>
  )
}

export default Cards;