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
  },[slider])

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
        {slider.map((s, i)=>{
          return(<div key={i} className={`control_btn ${currentIndex === i ? 'active' : ''}`} data-index="0" onClick={()=>{setCurrentIndex(i)}}></div>)
        })}
        {/* <div className={`control_btn ${currentIndex === 0 ? 'active' : ''}`} data-index="0" onClick={()=>{setCurrentIndex(0)}}></div>
        <div className={`control_btn ${currentIndex === 1 ? 'active' : ''}`} data-index="1" onClick={()=>{setCurrentIndex(1)}}></div>
        <div className={`control_btn ${currentIndex === 2 ? 'active' : ''}`} data-index="2" onClick={()=>{setCurrentIndex(2)}}></div> */}
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