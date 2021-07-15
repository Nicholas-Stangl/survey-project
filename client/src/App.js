// import logo from './logo.svg';
import './App.css';
import './App.css';
import { Router, Link } from '@reach/router';
import NewSurvey from './components/NewSurvey';
import Thanks from './components/Thanks';
import Charts from './components/Charts';


function App() {
  return (
    <div className="App">
      <br/>
      <br/>
      <h1>Recent Patient Survey</h1>
      <Router> 
        <NewSurvey path="/"></NewSurvey>
        <Thanks path="/thanks"></Thanks>
        <Charts path="/charts"></Charts>
      </Router>
      
    </div>
  );
}

export default App;
