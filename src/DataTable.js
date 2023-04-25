import { useEffect, useState } from 'react';
import { Avatar, Box, Grid, Paper } from '@mui/material';
import MaterialTable from "material-table"
import { BASE_URL } from './constants/mockapiURL';

const DataTable= (props)=> {
  const [shouldFetchData, setShouldFetchData] = useState(false);

  const DeleteUser =( id)=>{
    return new Promise((resolve, reject) => {
        fetch(BASE_URL+`/users/${id}`, {
        method: 'DELETE',
        headers: {'content-type':'application/json'},
        }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
        }).then(users =>{
          setShouldFetchData(true);
          resolve()
        }).catch(error => {
          reject()
            console.log(error)
        }) 
      })
      }

      const UpdateUser =(UpdatedUsername,id)=>{
        return new Promise((resolve, reject) => {
          
          fetch(BASE_URL+`/users/${id}`, {
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({name:UpdatedUsername})
        }).then(res => {
        if (res.ok) {            
            return res.json();          
        }
        // handle error
        }).then(users=>{
          setShouldFetchData(true);
          resolve()
        }).catch(error => {
            reject()
            console.log(error)
        })
          // Call resolve() if the update is successful
          // Call reject() if the update fails
        });
        
      }
      useEffect(() => {
        if (shouldFetchData) {
          props.getUserList();
          setShouldFetchData(false);
        }
      }, [shouldFetchData, props]);
  return (    
        <Grid item md={10} sm={10} xs={10}>
          <Paper>
            <Box sx={{
              height:400,
              width:1,
            }}
            >
       <MaterialTable 
       title="Liste des utilisateurs"
       
       columns={[
         { field: 'id',
           title: 'ID',
           editable: 'never',
           customSort:(a,b)=>a.id - b.id
          },

         { field: 'avatar',
           title: 'Profile Picture',
           editable:'never',
           sorting: false,
           filtering:false,
           render: (rowData) =><Avatar src={rowData.avatar} alt={rowData.name} sx={{ width: 60, height: 60 }}/> 
          },

         { field: 'name',
           title: 'Username',          
        },

        //  { field: 'Actions',
        //    title: 'Actions', 
        //    editable:'never',
        //    sorting: false,
        //    filtering:false,
        //    render: (rowData) => {
        //     return (
        //         <div>
        //             <Button variant="outlined" onClick={()=>{
        //               handleDeleteOpen()
        //               setDeleteID(rowData.id)}}
        //               >
        //                 DELETE
        //               </Button> 
        //               <Button variant="outlined" sx={ {marginLeft:3} } onClick={()=>{}}>
        //                 UPDATE
        //               </Button> 
        //         </div>
        //       ) 
        //   }
        // }     
       ]}
       data={props.userData}
       options={{
         actionsColumnIndex:-1,
         search:false,
         filtering:true,
         sorting:true,
         pageSize: 5,
         pageSizeOptions: [5,10,20],
       }}

       editable={{
        onRowUpdate: (newData,oldData) => UpdateUser(newData.name,oldData.id),
        onRowDelete: oldData => DeleteUser(oldData.id)
       } 
      }
       />
        </Box>
        </Paper>
        </Grid>
        
  );
}

export default DataTable 
