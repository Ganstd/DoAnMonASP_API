import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import  "./invoice.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import axiosClient from "../../../Components/axiosClient";

const InvoiceAdd = () => {
    const navigate = useNavigate();

    const [invoices, setInvoices]  = useState();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInvoices(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setInvoices(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/Invoices`, invoices)
            .then(() => navigate('/admin/invoices'));
    }

    return (
        <>
            <div className="invoice">
            <Sidebar />
      <div className="invoiceContainer">
        <Navbar />
            <Form className="col-md-3">
                <Form.Group className="mb-3">
                    <Form.Label>Tên khách hàng:</Form.Label>
                    <Form.Control type="text" name="userId" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ngày:</Form.Label>
                    <Form.Control type="date" name="invoiceDate" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Địa chỉ giao hàng:</Form.Label>
                    <Form.Control type="text" name="shippingAddress" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Số điện thoại giao hàng:</Form.Label>
                    <Form.Control type="text" name="shippingPhone" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Tổng tiền:</Form.Label>
                    <Form.Control type="number" name="total" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Loại thanh toán : </Form.Label>
                    <Form.Select name="paymentType" onChange={handleCheck} >
                        <option value="0" >Online</option>
                        <option value="1">AtStore</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Trạng thái : </Form.Label>
                    <Form.Select name="status" onChange={handleCheck} disabled>
                    <option value="1"  selected >Đã đặt hàng</option>
                    <option value="2">Đang vận chuyển</option>
                    <option value="3">Đã giao hàng</option>
                    <option value="4">Hủy đơn</option>            
                    </Form.Select>
                </Form.Group>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPlus} /> Thêm
                </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default InvoiceAdd;