import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,Route , Switch} from 'react-router-dom';

import App from './components/App';
import Cart from './components/Cart';
import BaseLayout from './components/BaseLayout';
import Vegetables from './components/Vegetables';
import Fruits from './components/Fruits';
import Cereals from './components/Cereals';
// import Accessories from './components/Accessories';
// import ShowProduct from './components/ShowProduct';

import './index.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path = "/" component={App}/>
                <Route  path = "/cart" component={Cart}/>
                <Route  path = "/fruits" component={Fruits}/>
                <Route  path = "/cereals" component={Cereals}/>
                <Route  path = "/vegetables" component={Vegetables}/>
                {/* <Route path = "/accessories" component={Accessories}/> */}
                {/* <Route exact path = "//products/:id" component={ShowProduct}/> */}
                
            </Switch>
        
        </BaseLayout>
    
    </BrowserRouter>


, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
