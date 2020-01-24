import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./redux/store"
import {Provider} from "react-redux"
import routes from "./routes"
import {HashRouter} from "react-router-dom"
function App() {
  return (
<Provider store={store}>
  <HashRouter>
  {routes}
  </HashRouter>
</Provider>
  );
}

export default App;
