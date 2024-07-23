import '../../style/topArea/sliderZonePage.css'
import img_1 from '../../img/1.jpg'
import img_2 from '../../img/2.jpg'
import img_3 from '../../img/3.jpg'
import left_btn from '../../img/left_btn.png'
import right_btn from '../../img/right_btn.png'
import { useEffect, useState } from 'react'


export default function SliderZone(){
  const [currentIndex, setCurrentIndex] = useState(0)
  const slider = [img_1,img_2,img_3]
  const ArrowClick = (e)=>{
    let index = currentIndex + e
    if(index < 0){
      index=0;
    }
    else if(index > slider.length-1){
      index = slider.length-1;
    }
    setCurrentIndex(index)
    console.log(index)
  }
  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentIndex((idx)=>(idx+1) % slider.length)
    }, 3000);
    return ()=>{clearInterval(interval)}
  },[slider.length])

  // const $controlBtns = document.querySelectorAll('.control_btn');


  // function initSlider() {
  //   const $sliderPanel = document.querySelector('.slider_panel');
  //   const $controlBtns = document.querySelectorAll('.control_btn');
  //   const $leftBtn = document.querySelector('.left_btn img');
  //   const $rightBtn = document.querySelector('.right_btn img');

  //   function updateSlider(index){
  //     //$sliderPanel.style.left = `-${1 * 100}%`
  //     console.log($sliderPanel)

  //     $controlBtns.forEach(element => {
  //       element.classList.remove('active');
  //     });
  //     $controlBtns[index].classList.add('active');
  //   }
  //   updateSlider(1)
  // }

  // useEffect(()=>{
  //   // initSlider()
  // },[])
  
  // function initSlider() {
  //   const $sliderPanel = $('.slider_panel');
  //   const $controlBtns = $('.control_btn');
  //   const $leftBtn     = $('.left_btn img');
  //   const $rightBtn    = $('.right_btn img');

  //   let currentIndex = 0;
  //   function updateSlider(index){
  //       $sliderPanel.css('left', `-${index * 100}%`);
  //       $controlBtns.removeClass('active');
  //       $controlBtns.eq(index).addClass('active');
            
  //   }

  //   $leftBtn.on('click',function(){
  //       currentIndex--;
  //       if(currentIndex<0){
  //           currentIndex=0;
  //       }
  //       updateSlider(currentIndex);
  //   });
  //   $rightBtn.on('click', function(){
  //       currentIndex++;
  //       if(currentIndex>2){
  //           currentIndex=2;
  //       }
  //       updateSlider(currentIndex);
  //   });

  //   $controlBtns.on('click',function(){
  //       currentIndex = parseInt($(this).data('index'));
  //       updateSlider(currentIndex);

  //   });
  //   setInterval(function(){
  //       currentIndex=(currentIndex+1) % $controlBtns.length;
  //       updateSlider(currentIndex);
  //   }, 3000);
  // }


 return(
  <>
    <div id="sliderZone">
      <div id="sub_photo_bg">
      <ul className="slider_panel"
        style={{left:`-${currentIndex * 100}%`}}
      >
        {slider.map((s, i)=>{
          return(
            <li key={i} className="slider_image"><img src={s} alt="" /></li>
          )
        })}
        {/* <li className="slider_image"><img src={img_1} alt="" /></li>
        <li className="slider_image"><img src={img_2} alt="" /></li>
        <li className="slider_image"><img src={img_3} alt="" /></li> */}
      </ul>
      <div className="control_panel">
        <div className="control_btn active" data-index="0"></div>
        <div className="control_btn" data-index="1"></div>
        <div className="control_btn" data-index="2"></div>
      </div>
      <div className="direct_btn">
        <div onClick={()=>{ArrowClick(-1)}} className="left_btn"><img src={left_btn} alt=""/></div>
        <div onClick={()=>{ArrowClick(1)}} className="right_btn"><img  src={right_btn} alt=""/></div>
      </div>
      </div>
    </div>
  </>
  )
}