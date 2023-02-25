import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Landingpage from './pages/landingpage/Landingpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Sidebar/> */}
      <Landingpage/>
    </div>
  );
}

export default App;
