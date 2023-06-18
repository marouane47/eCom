import ProductListItem from './pages/ProductListItem';
import ProductPage from './pages/ProductPage';
import AfterCommande from './components/AfterCommande';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import {  Route , BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='container'>

      
      <div className="App">
      
      <NavBar></NavBar>
      <Route path="/" exact component={ProductListItem}/> 
      <Route path="/product/:id" component={ProductPage}></Route>
      <Route path="/commande" component={AfterCommande}></Route>
      
      
       
       
      
      
      </div>
      </div>
    </Router>
     
    
  );
}

export default App;
