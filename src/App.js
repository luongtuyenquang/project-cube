import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Routes from './Routes';

function App() {
   
    return (
        <Router>
            <div className="App">
                <Header />
               
            </div>
            <Routes />
        </Router>
    );
}

export default App;
