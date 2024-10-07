import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { RegisterPatients } from './components/RegisterPatients/RegisterPatients';
import { Patients } from './components/Patients/Patients';


function App() {


  return (
    <>
    <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Patients" element={<Patients />} />
                <Route path="/RegisterPatients" element={<RegisterPatients />} />
               
            </Routes>
      </Router>
    
    </>
  )
}

export default App
