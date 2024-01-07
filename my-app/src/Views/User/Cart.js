import React, { useCallback,useRef,useState, useEffect } from 'react';
import {  faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {  Table } from "react-bootstrap";
import CustomNavbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";


const Cart = () => {
    // sử lý truy vấn giỏ hàng
    const [products, setProducts] = useState([]);
    var i = 1;
    useEffect(() => {
        axios.get(`https://localhost:7104/api/Products`)
            .then(res => setProducts(res.data));
    }, []);
    // sử lý tăng giảm số lượng
    const [quantity, setQuantity] = useState(1);

    const handleIncreaseButton = () => {
      setQuantity(quantity + 1);
    };
    
    const handleDecreaseButton = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
          }
    };
    // sự liện iuput tất cả sản phẩm 
    
    const theadInput = useRef();
    const tbodyInput = useRef();

    useEffect(() => {
    // Lắng nghe sự kiện click của input ở thead
    theadInput.current.addEventListener("input", () => {
        // Giả lập sự kiện click của input ở tbody
        tbodyInput.current.click();
    });
    }, []);

    return (
        <>
            <CustomNavbar />
            <Table>
                <thead style={{marginTop:"10px",backgroundColor: "aliceblue"}}>
                    <tr >
                        <th style={{width:"10%",textAlign:"center",verticalAlign: "middle"}}><input type="checkbox"  ref={theadInput} style={{margin:"auto"}}></input></th>
                        <th style={{width:"20%", textAlign:"center",verticalAlign: "middle"}}>Hình ảnh</th>
                        <th style={{width:"15%",textAlign:"center",verticalAlign: "middle"}}>Sản Phẩm</th>
                        <th style={{width:"15%",textAlign:"center",verticalAlign: "middle"}}>Đơn giá</th>
                        <th style={{width:"15%",textAlign:"center",verticalAlign: "middle"}}>Số Lượng</th>
                        <th style={{width:"15%",textAlign:"center",verticalAlign: "middle"}}>Số tiền</th>
                        <th style={{width:"10%",textAlign:"center",verticalAlign: "middle"}}>Chức năng</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                        products.map(item =>
                            <tr className="align-middle">
                                 <td style={{textAlign:"center",verticalAlign: "middle"}}><input type="checkbox"  ref={tbodyInput}  style={{margin:"auto"}}></input></td>
                                {
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.productTypeId ==2 ?(<img src={`/assets/img/food/${item.image}`} style={{ width: "100%" }}/>):(item.productTypeId ==3 ?(<img src={`/assets/img/accompanying/${item.image}`} style={{ width: "100%" }}/>):(<img src={`/assets/img/water/${item.image}`} style={{ width: "100%" }}/>))}
                                    
                                        
                                       
                                      
                                </td>
                                 }
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.name}</td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.price}.000 VND</td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}}> 
                                    <div>
                                        <button onClick={handleDecreaseButton} style={{border:"none",backgroundColor:"transparent"}}><FontAwesomeIcon icon={faMinus} /></button>
                                        <span style={{margin:"0 10px"}}>{quantity}</span>
                                        <button onClick={handleIncreaseButton} style={{border:"none",backgroundColor:"transparent"}}><FontAwesomeIcon icon={faPlus} /></button>
                                    </div>
                                </td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}}>{item.price * quantity}.000 VND</td>
                                <td style={{textAlign:"center",verticalAlign: "middle"}}><button ><FontAwesomeIcon icon={faTrash} /></button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            
            <Footer />
        </>
    );
}

export default Cart;