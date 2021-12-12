import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const[cartIsShown, setCartIsShown] = useState(false);

  function showCratHandler() {
    setCartIsShown(true);
  }

  function hideCartHandler() {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <div>Cart...</div>}
      <Header onShowCart={showCratHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
