import '../../style/topArea/menuZonePage.css'



export default function MenuZone(){
 return(
    <>
        <div id="menuZone">
          <ul className="mainmenu">
            <li>
              <a href="#">캠핑장소개</a>
              <ul className="submenu">
                <li><a href="#">인사말</a></li>
                <li><a href="#">시설보기</a></li>
                <li><a href="#">오시는길</a></li>
              </ul>
            </li>
            <li>
              <a href="#">사이트보기</a>
              <ul className="submenu">
                <li><a href="#">시설물보기</a></li>
              </ul>
            </li>
            <li>
              <a href="#">예약안내</a>
              <ul className="submenu">
                <li><a href="#">예약안내</a></li>
                <li><a href="#">실시간예약</a></li>
              </ul>
            </li>
            <li>
              <a href="#">특별함</a>
              <ul className="submenu">
                <li><a href="page_4_1.html">특별함</a></li>
              </ul>
            </li>
            <li>
              <a href="#">인기여행지</a>
              <ul className="submenu">
                <li><a href="#">인근여행지</a></li>
              </ul>
            </li>
            <li>
              <a href="#">커뮤니티</a>
              <ul className="submenu">
                <li><a href="page_6_1.html">공지사항</a></li>
                <li><a href="#">고객문의</a></li>
                <li><a href="#">이용후기</a></li>
                <li><a href="#">포토갤러리</a></li>
              </ul>
            </li>
          </ul>
        </div>
    </>
  )
}