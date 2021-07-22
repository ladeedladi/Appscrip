
import './App.css';
import Header from './Page/Header';
import Name from './Page/Name';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Cricketer from './Page/Cricketer';
import Flag from './Page/Flag';
import Summary from './Page/Summary';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
 
  return (
    <ErrorBoundary FallbackComponent={()=>(<h1>Something went wrong! refresh the page to start again</h1>)}>
    <div className="App">
      <Router>
      <Header/>
      
      <div className="container">

      <Route path='/' exact>
      <Name/>
      </Route>

      <Route path='/1'>
      <Cricketer/>
      </Route>

      <Route path='/2'>
      <Flag/>
      </Route>

      <Route path='/3'>
        <Summary/>
      </Route>
      
      
      
       
      
      </div>
      </Router>
      </div>
      </ErrorBoundary>
  );
}

export default App;
