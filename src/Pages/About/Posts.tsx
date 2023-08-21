import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import './Post.css'
import { useState, useEffect } from "react";
import MainDept from "../SecoundPage/MainDept";

const Posts: React.FC = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  console.log(data);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "body",
      headerName: "Body",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: true,
    }
  ];

  return (
    <div className="postContainer">
      <h2>Posts</h2>
      <Box sx={{ height: 400 }}>
        <DataGrid
          rows={data}
          columns={columns}
          pagination 
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <MainDept></MainDept>
    </div>
  );
};

export default Posts;
