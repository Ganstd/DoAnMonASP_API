import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import "./home.scss";
import Widget from './../../../Components/widget/Widget';
import Featured from './../../../Components/featured/Featured';
import Table from "./../../../Components/table/Table";
import Chart from "./../../../Components/chart/Chart";
const HomeAdmin = () => {
  return (
   <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
