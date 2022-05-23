import Sidebar from "../..//AdminComponents/chart/sidebar/Sidebar";
import Navbar from "../..//AdminComponents/chart/navbar/Navbar";
import "./home.scss";
import Widget from "../..//AdminComponents/chart/widget/Widget";
import Featured from "../..//AdminComponents/chart/featured/Featured";
import Chart from "../..//AdminComponents/chart/chart/Chart";
import Table from "../..//AdminComponents/chart/table/Table";

const Home = () => {
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

export default Home;
