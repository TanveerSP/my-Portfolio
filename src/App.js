import './App.css';
import Homepage from './page/Homepage';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';


function App() {
  return (
    <div className=' w-screen min-h-screen max-w-[100vw] bg-black flex flex-col font-inter'>
      <Navbar />
      {/* <HomePage /> */}
      <Homepage />
      <Footer />


    </div>
  );
}

export default App;
