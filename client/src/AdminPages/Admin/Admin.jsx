import "./Admin.scss"
import Sidebar from "../../AdminComponents/chart/sidebar/Sidebar"
import Navbar from "../../AdminComponents/chart/navbar/Navbar"
import DataAdmin from "../../AdminComponents/chart/datatable/DataAdmin"

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataAdmin />
      </div>
    </div>
  )
}

export default List