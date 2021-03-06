import "./single.scss";
import Navbar from "../../components/Navbar/NavbarH";
// import Chart from "../../AdminComponents/chart/chart/Chart";
// import List from "../../AdminComponents/chart/table/Table";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getuserinfo } from "../../redux/Action/UserAction";

const Profile = () => {
  const { Loading, users, error } = useSelector((state) => state.User_Select);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(getuserinfo(token));
    }
  }, []);

  return (
    <div className="singleP">
      <div className="singlP">{/* <Sidebar /> */}</div>
      <div className="singleContainerP">
        <Navbar />
        <div className="topP">
          <div className="leftP">
            <div className="editButtonP">Edit</div>
            <h1 className="titleP">Information</h1>
            <div className="itemP">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImgP"
              />
              <div className="detailsP">
                <h1 className="itemTitleP">
                  {users.Username} {users.Lastname}
                </h1>
                <div className="detailItemP">
                  <span className="itemKeyP">Email:</span>
                  <span className="itemValueP">{users.Email}</span>
                </div>
                <div className="detailItemP">
                  <span className="itemKeyP">Phone:</span>
                  <span className="itemValueP">{users.Phone}</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
      <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
     </div> */}
        </div>
        <div className="bottomP">
          <h1 className="titleP">Last Transactions</h1>
          {/* <List /> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
