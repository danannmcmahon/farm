import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header';
import Overview from './views/overview';
import Update from './views/update';
import Add from './views/add';
import Pair from './views/pair';

function App() {


  return (
    <div className="App">
      
        <Header/>
        <Navbar/>
      <Switch>
        <Route path='/' exact component={Overview}/>
        <Route path='/update/:id' component={Update}/>
        <Route path='/add' component={Add}/>
        <Route path='/pair' component={Pair}/>
      </Switch>
    </div>
  );
}

export default App;
