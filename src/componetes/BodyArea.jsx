import '../style/BodyArea.css'
import LeftmenuZone from './bodyArea/LeftmenuZone'
import ContentsZone from './bodyArea/ContentsZone'
 

export default function BodyArea(params) {
  return(
    <>
      <div id="bodyArea">
        <LeftmenuZone/>
        <ContentsZone/>
      </div>
    </> 
  )
}