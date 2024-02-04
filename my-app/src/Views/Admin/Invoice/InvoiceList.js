import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosClient from "../../../Components/axiosClient";
import  "./invoice.scss";
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const InvoiceList = () => {
    
    const [invoices, setInvoices] = useState([]);
     const [page, setPage] = useState(1);
    let totalProducts = 90; // Total number of products
    let pageSize = 5; // Number of products per page

    let totalPages = Math.ceil(totalProducts / pageSize); // Calculate total number

    useEffect(() => {
        axiosClient.get(`/Invoices/page?page=${page}`)
            .then(res => setInvoices(res.data));
    }, [page]); 
    
   
     

    return (        
        <div className="invoice">
            <Sidebar />
      <div className="invoiceContainer">
        <Navbar />
            <h2>Tất cả đơn hàng</h2>
                
            <Table>
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Tên khách hàng</th>
                        <th>Ngày</th>                    
                        <th>Địa chỉ </th>
                        <th>Số điện thoại </th>
                        <th>Tổng tiền</th>
                        <th>Loại thanh toán</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        invoices.map(item => 
                            <tr className="align-middle" >
                                <td>{item.id}</td>
                                <td>{item.user.userName}</td>
                                <td>{item.invoiceDate}</td>
                                <td>{item.shippingAddress}</td>
                                <td>{item.shippingPhone} </td>
                                <td>{item.total} </td>
                                <td>{item.paymentType ? 'Online' : 'AtStore'} </td>
                                <td>{item.status === 1 ? 'Đã đặt' : item.status === 2 ? 'Đã xác nhận' : item.status === 3 ? 'Đang giao' : item.status === 4 ? 'Đã giao' : 'Đã hủy'}</td>
                                <td>
                                    <Link to={`/admin/invoices/detail/${item.id}`} className="btn btn-info" style={{ marginRight:"4px"}}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                    
                                    

                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
                <Pagination className="pagination">
                        <Pagination.First onClick={() => setPage(1)} disabled={page === 1}/>
                        <Pagination.Prev onClick={() => setPage(page - 1)} disabled={page === 1}/>                       
                        <Pagination.Item onClick={() => setPage(page - 1)} disabled={page < 2}>{page - 1}</Pagination.Item>
                        
                        <Pagination.Item onClick={() => setPage(page)}   > { page }</Pagination.Item>
                                       
                        <Pagination.Item onClick={() => setPage(page + 1)} disabled={page >= totalPages} > {page + 1} </Pagination.Item>
                        <Pagination.Next onClick={() => setPage(page + 1)} disabled={page >= totalPages}/>
                        <Pagination.Last onClick={() => setPage(totalPages)} disabled={page === totalPages}/>
                </Pagination>
            


            </div>
        </div>
     );
}
 
export default InvoiceList;