import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Login from './Views/User/Login';
import LoginAdmin from './Views/Admin/LoginAdmin';


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
            {/*  
            <Route path="accounts">
              <Route index element={<AccountList />} />
              <Route path="details/:id" element={<AccountDetail />} />
              <Route path="add" element={<AccountAdd />} />
              <Route path="edit/:id" element={<AccountEdit />} />
            </Route>  */}
            {/*  <Route path="products">
              <Route index element={<ProductList />} />
              <Route path="details/:id" element={<AccountDetail />} />
              <Route path="add" element={<AccountAdd />} />
              <Route path="edit/:id" element={<AccountEdit />} />
            </Route>  */}
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
