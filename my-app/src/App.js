import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Login from './Views/User/Login';
import LoginAdmin from './Views/Admin/LoginAdmin';
import ProductList from './Views/Admin/Product/ProductList';
import AccountList from './Views/Admin/Account/AccountList';
import AccountAdd from './Views/Admin/Account/AccountAdd';
import AccountEdit from './Views/Admin/Account/AccountEdit';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} >

          </Route>

          <Route path="/user" >
            <Route path="login" element={<Login />} />

          </Route>

          <Route path="/admin" >
            <Route path="login" element={<LoginAdmin />} />
            <Route path="products" element={<ProductList />} />

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
