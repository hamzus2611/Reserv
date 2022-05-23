import "./User.scss"
import Sidebar from "../../AdminComponents/chart/sidebar/Sidebar"
import Navbar from "../../AdminComponents/chart/navbar/Navbar"
import DataUser from "../../AdminComponents/chart/datatable/DataUser"

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataUser />
      </div>
    </div>
  )
}

export default List