import React, {useState} from 'react';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';

function Slider({currentGamePage}) {
  const [current, setCurrent] = useState(0);
  let length = currentGamePage.short_screenshots.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <section className={'slider'}>
      <MdKeyboardArrowLeft className={'left-arrow'} onClick={prevSlide}/>
      <MdKeyboardArrowRight className={'right-arrow'} onClick={nextSlide}/>
      {
        currentGamePage.short_screenshots.map((item, idx) => {
          return (
            <div className={idx === current ? 'slide active' : 'slide'} key={item.id}>
              {idx === current && (
                <img src={item.image} className={'slider-image'} alt={item.name}/>
              )}
            </div>
          )
        })
      }
    </section>
  );
}

export default Slider;