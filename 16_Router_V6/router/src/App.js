
import './App.css';
import Cart from './component/Cart';
import ListProduct from './component/ListProduct';
import UserId from './component/UserId';
import UserDetail from './component/UserDetail';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      
      {/* <p><Link to="/">Home</Link></p>
      <p><Link to="/listproduct">Product</Link></p>
      <p><Link to="/cart">Cart</Link></p> */}

      {/* Xai NavLink cho Menu */}
      <p><NavLink to="/" >Home</NavLink></p>
      <p><NavLink to="/listproduct">Product</NavLink></p>
      <p><NavLink to="/cart">Cart</NavLink></p>
      <p><NavLink to="/userid">User</NavLink></p>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listproduct' element={<ListProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/userid" element={<UserId />}>
          <Route path=":userId" element={<UserDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
