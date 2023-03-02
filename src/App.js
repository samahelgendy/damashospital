import logo from './logo.svg';
import { Route , Routes ,BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/index';
import Contact  from './Components/Contact/index';
import Index  from './Components/index';
import Index2 from './Components/index2'
import Phramcy from './Components/Pharmacy';
import Analyze from './Components/Analyze';
import Rays from './Components/Rays'
import Heart from './Components/Heart';
import Proces from './Components/Proces'
function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/Clinic' element={<Index2 />} />
        <Route path='/Phramcy' element={<Phramcy />} />
        <Route path='/Analyze' element={<Analyze />} />
        <Route path='/Rays' element={<Rays />} />
        <Route path='/Heart' element={<Heart />} />   
        <Route path='/Proces' element={<Proces />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      

    </BrowserRouter>
  );
}

export default App;
