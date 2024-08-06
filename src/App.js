import Sidebar from './Components/Sidebar';
import HomePage from './Pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='sidebarApp'>
        <Sidebar />
      </div>
      <div className='homePageApp'>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
