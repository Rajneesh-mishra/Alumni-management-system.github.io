import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import Navbar from 'views/Landing/components/Navbar';
import Footer from 'views/Landing/components/Footer';
import { Button } from '@material-ui/core';

export default function Search(props) {
     const viewUser = (e) =>{
        let user = JSON.parse(e.currentTarget.value);
        props.history.push({
            pathname: process.env.REACT_APP_Profile,
            state: { user}
          })
     }
    const [state, setState] = React.useState({
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Email', field: 'email' },
          { title: 'Adress', field: 'address'},
          { title: 'Course', field: 'course'},
          { title: 'Year Of Passing', field: 'yrofpassing',align:'center'},
          {
            field: 'url',
            title: 'View',
            render: rowData => <Button value={JSON.stringify(rowData)} onClick={viewUser}>View</Button>
          }
        ],
        data: [],
      });
    const loadUsers = async () =>{
        let req = await fetch(process.env.React_APP_Api+"getUsers");
        let data = await req.json();
        if(data)
        {
            data = data.map(data =>{
                 data.name = data.fname+' '+data.lname;
                 return data;
            });
        setState({data,columns:state.columns});
        }
      }
      useEffect(() => {
        if(state.data.length == 0)
        loadUsers();
      });

  return (
      <>
      <Navbar/>
    <MaterialTable
      title="Search User"
      columns={state.columns}
      options={{
        paging:true,
        pageSize:10,       // make initial page size
        emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
        pageSizeOptions:[6,12,20,50],    // rows selection options
        
      }}
      data={state.data}
      editable={{
        // onRowAdd: (newData) =>
        //   new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve();
        //       setState((prevState) => {
        //         const data = [...prevState.data];
        //         data.push(newData);
        //         return { ...prevState, data };
        //       });
        //     }, 600);
        //   }),
        // onRowUpdate: (newData, oldData) =>
        //   new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve();
        //       if (oldData) {
        //         setState((prevState) => {
        //           const data = [...prevState.data];
        //           data[data.indexOf(oldData)] = newData;
        //           return { ...prevState, data };
        //         });
        //       }
        //     }, 600);
        //   }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
      <div style={{marginTop:50}}>
      <Footer />
      </div>
    </>
  );
}
