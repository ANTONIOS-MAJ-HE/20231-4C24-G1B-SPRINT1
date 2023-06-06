import React from "react";
import 'boxicons';
import {Header} from "./componentes/Header";
import {BrowserRouter as Router } from 'react-router-dom';
import {Paginas} from "./componentes/Paginas";
import { ProductosLista } from './componentes/Productos';
import {DataProvider} from "./context/Dataprovider"

function App() {
  return (
    <DataProvider>
      <div className="App">
      <Router>
        <Header/>
        <ProductosLista></ProductosLista>
        <Paginas></Paginas>
      </Router> 
    </div>
    </DataProvider>
  );
}

export default App
