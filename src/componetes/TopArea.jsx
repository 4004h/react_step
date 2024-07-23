import TitleZone from './topArea/MenuZone'
import MenuZone from './topArea/MenuZone'
import SliderZone from './topArea/SliderZone'

export default function TopArea(params) {
  return(
      <>

        <div id="topArea">
          <TitleZone/>
          <MenuZone/>
          <SliderZone/>
        </div>

        {/* <!-- 상단Area시작 -->
        <div id="topArea">

            <!-- 타이틀Zone시작 -->
            <div id="titleZonePage"></div>
            <script>
                $(function(){
                    includeHTML('titleZonePage','titleZonePage.html', null);
                });
            </script>            
            <!-- 타이틀Zone끝 -->

            <!-- 메뉴Zone시작 -->
            <div id="menuZonePage"></div>
            <script>
                $(function(){
                    includeHTML('menuZonePage','menuZonePage.html', null);
                });
            </script>     
            <!-- 메뉴Zone끝 -->


            <!-- 슬라이더Zone시작 -->
            <div id="sliderZonePage"></div>
            <script>
                $(function(){
                    includeHTML('sliderZonePage', 'sliderZonePage.html', initSlider);
                });
            </script>
            <!-- 슬라이더Zone끝 -->
        </div>
        <!-- 상단Area끝 --> */}
      </> 
  )
}