import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./components/navbar";
import { HomePage, Detail } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Foooter from "./components/footer/footer";
import CartPage from "./pages/cart";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container " style={{marginBottom:'150px'}}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/cart" children={<CartPage />}></Route>
          </Switch>
        </div>
        <Foooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
