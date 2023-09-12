import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './common/header/Header';
import Pages from './pages/Pages';
import ProductItems from './components/flashDeals/FlashData';
import { useState } from 'react';
import Cart from './common/cart/Cart';
import SData from './components/shop/SData'
import Footer from './common/footer/Footer';
function App() {
  const [cardItem, setCardItem] = useState([]);
  const [liked, setLiked] = useState(true);

  const addToCart = (product) => {
    const productExist = cardItem.find((item) => item.id === product.id);
    if (productExist) {
      cardItem.map((item) => item.id === product.id ? item.total++ : item)
      setCardItem([...cardItem])
    } else {
      setCardItem([...cardItem, { ...product, total: 1 }])
    }
  }
  const deleteProduct = (product) => {
    let id = -1;
    cardItem.find((item, index) => {
      if (item.id === product.id) {
        id = index
      }
    });
    if (id !== -1) {
      cardItem.splice(id, 1);
      setCardItem([...cardItem])
    }
  }
  const deleteOne = (product) => {
    if (product.total === 1) {
      deleteProduct(product);
    } else {
      cardItem.map((item) => item.id === product.id ? item.total-- : item);
      setCardItem([...cardItem])
    }
  }
  const increaseLike = (product) => {
    product.like++;
    setLiked(!liked)
  }
  return (
    <>
      <Router>
        <Header cardItem={cardItem} />
        <Switch>
          <Route path='/' exact><Pages increaseLike={increaseLike} ShopData={SData} ProductItems={ProductItems} addToCart={addToCart} /></Route>
          <Route path='/cart' exact><Cart cardItem={cardItem} addToCart={addToCart} deleteOne={deleteOne} deleteProduct={deleteProduct} /></Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
