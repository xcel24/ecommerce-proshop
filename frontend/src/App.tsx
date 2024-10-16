import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Shipping from './screens/Shipping';
import Payment from './screens/Payment';
import PlaceOrder from './screens/PlaceOrder';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='product/:id' element={<ProductDetails />} />
          <Route path='cart' element={<Cart />} />
          <Route path='shipping' element={<Shipping />} />
          <Route path='payment' element={<Payment />} />
          <Route path='placeorder' element={<PlaceOrder />} />
        </Route>
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
