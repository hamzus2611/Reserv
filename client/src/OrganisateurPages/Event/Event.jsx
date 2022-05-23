import "./Event.scss"
import Sidebar from "../../OrganisteurComponents/sidebar/SidebarOrginisateur"
import Navbar from "../../OrganisteurComponents/navbar/Navbar"
import DataEvent from "../../OrganisteurComponents/datatable/DataOrganisater"

const MyEvents = () => {
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

export default MyEvents