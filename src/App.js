import { Routes, Route } from 'react-router-dom';
import Dashboard from './Personnel/Dashboard.js';
import CreateAccount from './Personnel/CreateAccount.js';
import RegisterIncubatee from './Personnel/RegisterIncubatee.js';
import RegisterMentor from './Personnel/RegisterMentor.js';
import Auth from './Auth.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create" element={<CreateAccount />} />
      <Route path="/register-incubatee" element={<RegisterIncubatee />} />
      <Route path="/register-mentor" element={<RegisterMentor />} />
    </Routes>
  );
}

export default App;
