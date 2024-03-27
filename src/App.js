//import logo from './Assets/img/logo.svg';
import './Styles/App.css';
import CarburantType from './Components/Carburant';
import OrigindataType from './Components/Origindouane';
import GearBoxType from './Components/Gearbox';
import StatesdataType from './Components/States';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        <CarburantType/>
        <OrigindataType/>
        <GearBoxType/>
        <StatesdataType/>
        </>  
      </header>
    </div>
  );
}

export default App;
