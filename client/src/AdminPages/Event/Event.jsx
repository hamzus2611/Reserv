import "./Event.scss"
import Sidebar from "../../AdminComponents/chart/sidebar/Sidebar"
import Navbar from "../../AdminComponents/chart/navbar/Navbar"
import DataEvent from "../../AdminComponents/chart/datatable/DataEvent"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataEvent/>
      </div>
    </div>
  )
}

export default List