import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from '../Nav/Nav';
// import { Provider } from 'react-redux'
// import {store} from '../../redux/store'
// import PostParams from '../PostParams/PostParams';
import React from "react";
import Home from "../Home/Home";

function App() {

  return (
    <div className="App">
     {/* <Provider value={store}> */}
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
