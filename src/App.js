import './App.css';
import Homepage from './page/Homepage';
import Navbar from './components/common/Navbar';
import StickFooter from './Home/StickFooter';
import { Route, Routes } from 'react-router-dom';
import MoreWorks from './page/MoreWorks';


function App() {
  return (
    <div className=' relative w-screen min-h-screen max-w-[100vw] bg-black flex flex-col font-inter'>
      <Navbar />
      <div className=' fixed lg:top-36 lg:left-3 lg:translate-x-0  bottom-0 left-1/2 transform -translate-x-1/2 z-50'>
        <StickFooter />
      </div>

      <Routes>
        {/* Home Page Route */}
        <Route path='/' element={<Homepage />} />
        <Route path='/projects' element={<MoreWorks />} />
      </Routes>

    </div>
  );
}

export default App;
