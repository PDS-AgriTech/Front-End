import './App.css';
import {BrowserRouter as Router ,Route , Switch  } from 'react-router-dom';
import HeaderComponent from './all_components/HeaderComponent';
import FooterComponent from './all_components/FooterComponent';
import TableEmployeeComponent from './all_components/TableEmployeeComponent';
import AddEmployeeComponent from './all_components/AddEmployeeComponent';


function App() {




  return (
    <div >
      <Router>
      <HeaderComponent/>
      <div className="container">
        <Switch>
          <Route exact path ="/" component={TableEmployeeComponent}></Route>
          <Route path ="/employes" component={TableEmployeeComponent}></Route>
          <Route path ="/ajouter-employe" component={AddEmployeeComponent}></Route> 
          <Route path ="/modifier-employe/:numero" component={AddEmployeeComponent}></Route> 
          
        </Switch>
     
      </div>
      <FooterComponent/>
      </Router>
      
    
    </div>
  );
}

export default App;
