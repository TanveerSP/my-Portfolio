import './App.css';
import Homepage from './page/Homepage';
import Navbar from './components/common/Navbar';
import StickFooter from './Home/StickFooter';
import { Route, Routes } from 'react-router-dom';
import MoreWorks from './page/MoreWorks';


function App() {
  return (
    <div className=' relative w-screen min-h-screen max-w-[100vw] bg-webcolor-5 flex flex-col font-inter'>


      <Navbar />
      <Routes>
        {/* Home Page Route */}
        <Route path='/' element={<Homepage />} />
        <Route path='/projects' element={<MoreWorks />} />
      </Routes>

    </div>
  );
}

export default App;
