
// import Register from './components/Register/Register.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Patients } from './components/Patients/Patients.tsx';
import { Home } from './components/Home/Home.tsx';
import Register from './components/Register/Register.tsx';

const App: React.FC = () => {
 
 
  

  return (
    <>
      
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Patients" element={<Patients />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
      </Router>
    </>
 
  );
};

export default App;
