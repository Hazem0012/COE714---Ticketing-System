import './App.css';
import CreateTicket from './components/CreateTicket';
import Customer from './components/Customer';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SubmittedTickets from './components/SubmittedTickets';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
            <Routes>
                <Route exact path="/" element={<Customer />} />
                <Route path="/CreateTicket" element={<CreateTicket />} />
                <Route path="/SubmittedTickets" element={<SubmittedTickets />} />
                
            </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
