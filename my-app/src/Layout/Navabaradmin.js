import React from 'react';

const AdminNavbar = () => {
  return (
    <>
        <div  style={{display: "flex",height: "100px" }}>
            <div style={{display: "flex", width: "10%" }} class="logo">
            <img src='/assets/img/logo/logo.png' alt="logo" style={{height: "50px",margin: "auto"}}></img>
            </div>
            <div style={{ width: "80%" }}>
                <h3 style={{textAlign:"center",margin:"10px"}}>Quản lý</h3>
                <div style={{display: "flex",width: "100%"}} class="menu">
                    <a href="/admin/products/productList" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}> sản phẩm</p></a> <hr style={{width:"1px",height:"25px",backgroundColor:"#000000",margin:"0"}}/>
                    <a href="/" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}> phân loại sản phẩm</p></a><hr style={{width:"1px",height:"25px",backgroundColor:"#000000",margin:"0"}}/>
                    <a href="/" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}> đơn hàng</p></a><hr style={{width:"1px",height:"25px",backgroundColor:"#000000",margin:"0"}}/>
                    <a href="/Admin/Account/AccountList" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}> tài khoản</p></a><hr style={{width:"1px",height:"25px",backgroundColor:"#000000",margin:"0"}}/>
                    <a href="/" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}> bình luận</p></a><hr style={{width:"1px",height:"25px",backgroundColor:"#000000",margin:"0"}}/>
                    <a href="/" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}> slideshow</p></a><hr style={{width:"1px",height:"25px",backgroundColor:"#000000",margin:"0"}}/>
                    <a href="/" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{margin:"0"}}> khuyến mãi</p></a>
                </div>
            </div>
            <hr style={{width:"1px",height:"100px",backgroundColor:"#000000",margin:"0"}}/>
            <div style={{ width: "10%" }}>
                 <a href="/" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{textAlign:"center",margin:"15px"}}>Thống kê</p></a> 
                 <hr style={{width:"50%",height:"1px",backgroundColor:"#000000",margin:"auto"}}/>
                 <a href="/" style={{ textDecoration: "none",margin: "auto",color: "#000000"}}><p style={{textAlign:"center",margin:"15px"}}>Import/export</p></a>
            </div>
        </div>
    </>
  );
};

export default AdminNavbar;
