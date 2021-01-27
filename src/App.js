import Navigation from './navigation';
import HomePage from './pages/home';
import ServicesPage from './pages/services';
import CompanyPage from './pages/company';
import WorkPage from './pages/work';
//import ContactPage from './pages/contact';
import PreFooter from './pre-footer';
import Footer from './footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './normalize.css';
import './App.css';


function App() {
  return (
   <div>
   	<Router>
	    <Navigation />
	    <Switch>
	    	<Route path="/" exact component={HomePage} />
	    	<Route path="/services" exact component={ServicesPage} />
	    	<Route path="/company" exact component={CompanyPage} />
	    	<Route path="/work" exact component={WorkPage} />
	    </Switch>
	    <PreFooter />
	    <Footer />
    </Router>
  </div>
  );
}

export default App;
