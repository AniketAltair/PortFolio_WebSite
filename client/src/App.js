import './App.css';
import PortFolioContainer from './PortFolioContainer/PortFolioContainer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <PortFolioContainer/>
    </div>
  );
}

export default App;
