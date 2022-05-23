import "./Organisateur.scss";
import Sidebar from "../../AdminComponents/chart/sidebar/Sidebar";
import Navbar from "../../AdminComponents/chart/navbar/Navbar";
import DataOrganisater from "../../AdminComponents/chart/datatable/DataOrganisater";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataOrganisater />
      </div>
    </div>
  );
};

export default List;
