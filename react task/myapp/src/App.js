import logo from './logo.svg';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Chagan from './Usestate';
import { Useeffecthook } from './Useeffecthook';


function App() {
  return (
    <div className="App">
       <h1>usestate</h1>
      <Chagan/>
      <h1>useeffect</h1>
      <Useeffecthook/>
    </div>
  );
}

export default App;
