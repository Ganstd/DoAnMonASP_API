import React, { useEffect, useState } from 'react';
import axiosClient from '../../../Components/axiosClient';
import {  useParams } from "react-router-dom";
import { Row, Table } from 'react-bootstrap';
import InvoiceEdit from './InvoiceEdit';
import { Col } from 'react-bootstrap';
import  "./invoice.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';


const InvoiceDetails = () => {
 
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
     <div className="invoice">
            <Sidebar />
      <div className="invoiceContainer">
        <Navbar />
     <div>
         <Row >
             <Col md={6}>
            <div>
                <h2>Mã hóa đơn {invoices.id}</h2>
                <p>Mã khách hàng: {invoices.userId}</p>
                <p>Ngày: {invoices.invoiceDate}</p>
                <p>Địa chỉ: {invoices.shippingAddress}</p>
                <p>Số điện thoại: {invoices.shippingPhone} </p>
                <p>Tổng tiền:  {invoices.total} VNĐ</p>
                <p>Loại thanh toán: {invoices.paymentType === 0 ? `Online` : 'AtStore'}</p>
        </div>
         </Col>
             <Col md={6}>
                <InvoiceEdit />
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
                        <th>Giá (VNĐ)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map(item => 
                            <tr className="align-middle">
                                <td>{item.id}</td>
                                <td>{item.invoiceId}</td>
                                <td>{item.productId}</td>
                                <td>{item.comboId}</td>
                                <td>{item.quantity} </td>
                                <td>{item.price} </td>                            
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

export default InvoiceDetails;
