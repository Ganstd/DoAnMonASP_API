import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Login from './Views/User/Login';
import AccountList from './Views/Admin/Account/AccountList';
import AccountAdd from './Views/Admin/Account/AccountAdd';
import AccountEdit from './Views/Admin/Account/AccountEdit';
import Cart from './Views/User/Cart';
import Signup from './Views/User/signup';
import Menu from './Views/User/menu';
import Restaurant from './Views/User/Restaurant';
import IntroducingNewDishes from './Views/User/IntroducingNewDishes';
import ProductList from './Views/Admin/Product/ProductList';
import ProductAdd from './Views/Admin/Product/ProductAdd';
import ProductDetail from './Views/Admin/Product/ProductDetail';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} >

          </Route>

          <Route path="/user" >
            <Route path="menu" element={<Menu />} /> 
            <Route path="login" element={<Login />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="signup" element={<Signup />} />
            <Route path="IntroducingNewDishes" element={<IntroducingNewDishes />} />
            <Route path="Restaurant" element={<Restaurant />} />
            
          
          
          </Route>

          <Route path="/admin" >
            <Route path="products/productList" element={<ProductList />} />
            <Route path="product/Detail" element={<ProductDetail />} />
            <Route path="product/add" element={<ProductAdd />} />
            <Route path="accounts" element={<AccountList />} />
            {/* <Route path="details/:id" element={<AccountDetail />} /> */}
            <Route path="accounts/add" element={<AccountAdd />} />
            <Route path="accounts/edit/:id" element={<AccountEdit />} />
           

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
