import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Login from './Views/User/Login';
import Cart from './Views/User/Cart';
import Signup from './Views/User/signup';
import Menu from './Views/User/menu';
import Restaurant from './Views/User/Restaurant';
import IntroducingNewDishes from './Views/User/IntroducingNewDishes';
import HomeAdmin from './Views/Admin/Home/HomeAdmin';
import Profile from './Views/Admin/Profile/Profile';
import Logout from './Views/Admin/Profile/Logout';
import ProductSearch from './Views/Admin/Product/ProductSearch';
import ProductDetail from './Views/Admin/Product/ProductDetail';
import ProductAdd from './Views/Admin/Product/ProductAdd';
import ProductEdit from './Views/Admin/Product/ProductEdit';
import ComboList from './Views/Admin/Combo/ComboList';
import ComboDetails from './Views/Admin/Combo/ComboDetail';
import ComboAdd from './Views/Admin/Combo/ComboAdd';
import ComboEdit from './Views/Admin/Combo/ComboEdit';
import AccountList from './Views/Admin/Account/AccountList';
import RegisterUser from './Views/Admin/Account/RegisterUser';
import RegisterAdmin from './Views/Admin/Account/RegisterAdmin';
import AccountEdit from './Views/Admin/Account/AccountEdit';
import ChangePassword from './Views/Admin/Profile/ChangePassword';
import InvoiceList from './Views/Admin/Invoice/InvoiceList';
import InvoiceAdd from './Views/Admin/Invoice/InvoiceAdd';
import InvoiceEdit from './Views/Admin/Invoice/InvoiceEdit';
import InvoiceDetails from './Views/Admin/Invoice/InvoiceDetail';
import ProductTypeList from './Views/Admin/ProductType/ProductTypeList';
import ProductTypeAdd from './Views/Admin/ProductType/ProductTypeAdd';
import ProductTypeEdit from './Views/Admin/ProductType/ProductTypeEdit';
import SlideshowHome from './Views/Admin/Slideshow/Slideshow';
import SlideshowList from './Views/Admin/Slideshow/SlideshowList';
import SlideshowAdd from './Views/Admin/Slideshow/SlideshowAdd';
import SlideshowEdit from './Views/Admin/Slideshow/SlideshowEdit';
import RatingList from './Views/Admin/Rating/RatingList';
import RatingAdd from './Views/Admin/Rating/RatingAdd';
import RatingEdit from './Views/Admin/Rating/RatingEdit';
import PromotionList from './Views/Admin/Promotion/PromotionList';
import PromotionAdd from './Views/Admin/Promotion/PromotionAdd';
import PromotionEdit from './Views/Admin/Promotion/PromotionEdit';
import CommentList from './Views/Admin/Comment/CommentList';
import CommentAdd from './Views/Admin/Comment/CommentAdd';
import CommentEdit from './Views/Admin/Comment/CommentEdit';
import LoginAdmin from './Views/Admin/Login/LoginAdmin';






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

          
          <Route path="/admin"  >
          <Route index element={<HomeAdmin />} ></Route>
            <Route path="login" element={<LoginAdmin />} />
            <Route path="profile" element={<Profile />} />
            <Route path="logout" element={<Logout/>} />

            
            <Route path="products" element={<ProductSearch/>} />
            <Route path="products/detail/:id" element={<ProductDetail />} />
            <Route path="products/add" element={<ProductAdd />} />
            <Route path="products/edit/:id" element={<ProductEdit />} />
            {/* <Route path="details/:id" element={<AccountDetail />} /> */}      

            <Route path="combos" element={<ComboList />} />
            <Route path="combos/detail/:id" element={<ComboDetails />} />
            <Route path="combos/add" element={<ComboAdd />} />
            <Route path="combos/edit/:id" element={<ComboEdit />} />

            <Route path="accounts" element={<AccountList />} />
            <Route path="accounts/adduser" element={<RegisterUser />} />
            <Route path="accounts/addadmin" element={<RegisterAdmin />} />
            <Route path="accounts/edit/:id" element={<AccountEdit />} />
            <Route path="accounts/changepassword" element={<ChangePassword />} />

            <Route path="invoices" element={<InvoiceList />} />
            <Route path="invoices/add" element={<InvoiceAdd />} />
            <Route path="invoices/edit/:id" element={<InvoiceEdit />} />
            <Route path="invoices/detail/:id" element={<InvoiceDetails/>} />
      
            <Route path="producttypes" element={<ProductTypeList />} />
            <Route path="producttypes/add" element={<ProductTypeAdd />} />
            <Route path="producttypes/edit/:id" element={<ProductTypeEdit />} /> 
          
            <Route path="slideshow" element={<SlideshowHome />} />
            <Route path="slideshows" element={<SlideshowList />} />
            <Route path="slideshows/add" element={<SlideshowAdd />} />
            <Route path="slideshows/edit/:id" element={<SlideshowEdit />} />
            
            <Route path="ratings" element={<RatingList />} />
            <Route path="ratings/add" element={<RatingAdd/>} />
            <Route path="ratings/edit/:id" element={<RatingEdit />} />

            <Route path="promotions" element={<PromotionList/>} />
            <Route path="promotions/add" element={<PromotionAdd />} />
            <Route path="promotions/edit/:id" element={<PromotionEdit />} />

            <Route path="comments" element={<CommentList/>} />
            <Route path="comments/add" element={<CommentAdd />} />
            <Route path="comments/edit/:id" element={<CommentEdit />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
