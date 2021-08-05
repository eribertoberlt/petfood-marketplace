import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';
import SignUp from './pages/signUp';
import Home from './pages/home';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import './styles/GlobalStyles.css';

const Routes = () => {
    return (
        <>
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/petshop/:id" exact component={Petshop}/>
                <Route path="/checkout" exact component={Checkout}/>
                <Route path="/signup" exact component={SignUp}/>
                <Sidebar />
            </Router>
        </>
    );
}

export default Routes;