import React, { useEffect, useState } from 'react';
import axiosClient from '../../../Components/axiosClient';
import {  useParams } from "react-router-dom";
import { Row, Table } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import  "./combo.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import ComboEdit from './ComboEdit';


const ComboDetails = () => {
 
    const [details, setDetails] = useState([]);
    const [invoices, setInvoices] = useState({});

    var { id } = useParams();

    useEffect(() => {
        axiosClient.get(`/InvoiceDetails/${id}`)
            .then(res => setDetails(res.data))
    }, [id]);

   
    useEffect(() => {
        axiosClient.get(`/Invoices/${id}`)
            .then(res => setInvoices(res.data))
    }, [id]);



    return (
     <div className="combo">
            <Sidebar />
      <div className="comboContainer">
        <Navbar />
     <div>
         <Row >
             <Col md={6}>
            <div>
                <h2>Mã hóa đơn {invoices.id}</h2>
                <p>Tên khách hàng: {invoices.userId}</p>
                <p>Ngày: {invoices.invoiceDate}</p>
                <p>Địa chỉ: {invoices.shippingAddress}</p>
                <p>Số điện thoại: {invoices.shippingPhone} </p>
                <p>Tổng tiền:  {invoices.total} VND</p>
                <p>Loại thanh toán: {invoices.paymentType === 0 ? `Online` : 'AtStore'}</p>
        </div>
         </Col>
             <Col md={6}>
                <ComboEdit />
             </Col>

         </Row>
         

         <h2>Chi tiết hóa đơn</h2>
            <Table>
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Mã hóa đơn</th>
                        <th>Mã sản phẩm</th>                    
                        <th>Mã Combo </th>
                        <th>Số lượng </th>
                        <th>Giá</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map(item => 
                            <tr className="align-middle">
                                <td>{item.id}</td>
                                <td>{item.invoiceId}</td>
                                <td>{item.productId}</td>
                                <th>{item.comboId}</th>
                                <th>{item.quantity} </th>
                                <th>{item.price} </th>                            
                            </tr>
                        )
                    }
                </tbody>
            </Table>
                </div>
            </div>
            </div>
 );
};

export default ComboDetails;
