import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "../src/css/menu.css"
import "../src/css/carousel.css"
import "../src/css/footer.css"
import "../src/css/login.css"
import "../src/css/getposts.css"
import "../src/css/admin.css"
import "../src/css/shop.css"
import "../src/css/loginAdminPage.css"
import App from './App';
import { Provider } from 'react-redux';
import { store } from './features/store';
import 'swiper/css/bundle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <Provider store={store}>
   
<App />
 </Provider>
 
 
    
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

