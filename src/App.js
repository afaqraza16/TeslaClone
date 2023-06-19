import "./App.css";
import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className='App'>
   
        <ErrorBoundary>
          <Header />
          <Home />
        </ErrorBoundary>
     
    </div>
  );
}

export default App;
