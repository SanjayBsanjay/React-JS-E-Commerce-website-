import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import {Home, ProductSingle, Cart } from "./pages/index";
// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import {Provider} from "react-redux";
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            <Route path = "/" element = {<Home />} />
            <Route path = "/product/:id" element = {<ProductSingle />} />
           
            <Route path = "/cart" element = {<Cart />} />

            <Route path = "/register" element={<Register />}/>
            
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
