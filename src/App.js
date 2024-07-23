import './style/App.css';
import TopArea from './componetes/TopArea'
import BodyArea from './componetes/BodyArea'
import BottomArea from './componetes/BottomArea'


function App() {
  return (
    <div className="App">
      <TopArea/>
      <BodyArea/>
      <BottomArea/>
    </div>
  );
}

export default App;

// topArea
//   titleZonePage menuZonePage sliderZonePage
// bodyArea
//   leftmenuZonePage contentsZone
// bottomAreaPage
//   hotmenuZone addrZone
