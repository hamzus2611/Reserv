import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../../Admins/datatablesource";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getorganisateur } from "../../../redux/Action/UserAction";

const Datatable = () => {

  const { Loading, users, error } = useSelector((state) => state.User_Select);
  const dispatch = useDispatch()
 const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getorganisateur(token))
  }, [])

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/Organisateur/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
            //  onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div>{Loading ? (
      <h1 className="text" > Loading ... </h1>
    ) :
      <div className="datatable">
        <div className="datatableTitle">
          Tout Organisateur
          <Link to="new" className="link">
            New
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={users}
          getRowId={(row) => row._id}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection />
      </div>
    }
    </div>
  );
};

export default Datatable;
