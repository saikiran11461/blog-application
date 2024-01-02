
import './App.css';
import AllRoutes from "../src/routes/AllRoutes";
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
