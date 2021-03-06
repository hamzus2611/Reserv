import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../../Admins/datatablesource";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { AcceptOrganisateur, getDemandeOrganizateur } from "../../../redux/Action/UserAction";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Datatable = () => {
  const { Loading, users, error } = useSelector((state) => state.User_Select);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getDemandeOrganizateur(token));
  }, []);
  
  const handleSubmit = (id) => {
    dispatch(AcceptOrganisateur(id));
    console.log(id)
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          //   <div className="cellAction">
          //     <Button to="/Organisateur/test" style={{ textDecoration: "none" }}>
          //       Confirme
          //     </Button>
          //     <div
          //       className="deleteButton"
          //     //  onClick={() => handleDelete(params.row.id)}
          //     >
          //       Delete
          //     </div>
          //   </div>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => handleSubmit(params.row._id)}
              variant="contained"
              color="success"
            >
              Confirmer
            </Button>
            <Button variant="outlined" color="error">
              Supprimer
            </Button>
          </Stack>
        );
      },
    },
  ];
  return (
    <div>
      {Loading ? (
        <h1 className="text"> Loading ... </h1>
      ) : (
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
            checkboxSelection
          />
        </div>
      )}
    </div>
  );
};

export default Datatable;
