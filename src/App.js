import React from 'react';
import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div className="">

      <header className="p-4 flex justify-between items-center">

          {/* left section */}
          <div>
            
            <h1 className="text-5xl">E-commerce Store</h1>
            <h2>Your no.1 store for any needs </h2>

          </div>

          {/* right section */}
          <div>
            <h3> Items in your basket 0 </h3>

          </div>

      </header>

      {/* Product */}
      <Product title="Apple iPhone 13 2021" />
      <Product title="Nike Sports Shoes" />
      <Product title="Rubix Cube"/>


    </div>
  );
}

export default App;
