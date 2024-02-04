import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {  useNavigate, useParams } from "react-router-dom";
import  "./invoice.scss";
import axiosClient from "../../../Components/axiosClient";

const InvoiceEdit = () => {
    var navigate = useNavigate();
    var { id } = useParams();

    const [status, setStatus] = useState('');
  

    useEffect(() => {
        axiosClient.get(`/Invoices/${id}`)
            .then(res => {
                setStatus(res.data.status);
            })
            .catch((error) => {
                console.error(error);
        })
}, [id]);
     
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.put(`/Invoices/${id}?status=${status}`)
            .then(() => navigate(`/admin/invoices`));
             
    }

    return (
         <Form className="col-md-3">              
                <Form.Group className="mb-3">
                    <Form.Label>Trạng thái </Form.Label>
                     <Form.Select name="status" value={status} onChange={handleStatusChange}>
                        <option value={1}>Đã đặt</option>
                        <option value={2}>Đã xác nhận</option>
                        <option value={3}>Đang giao</option>
                        <option value={4}>Đã giao</option>
                        <option value={5}>Đã hủy</option>
                    </Form.Select>
                </Form.Group>
                
                <Button type="submit" variant="success" onClick={handleSubmit}>
                     Cập nhật
                </Button>
                    </Form>
    );
}
export default InvoiceEdit;

