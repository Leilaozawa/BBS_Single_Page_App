import React, { useEffect, useState } from 'react'
import DataTable from './DataTable'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { BASE_URL } from './constants/mockapiURL';

const Spa = ()=> {
    const [userData, setUserData] = useState([])

    const getUserList =()=>{
      fetch(BASE_URL+'/users', {
        method: 'GET',
        headers: {'content-type':'application/json'},
        }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
        }).then(users => {
            console.log(users)
            setUserData(users)
        }).catch(error => {
            console.log(error)
        })
    }
    useEffect(() => {
      getUserList()
  }, [])
  return (
    <div>
      {userData.length === 0 ?  
      <Box sx={{ marginLeft:10, marginTop:10}}>
      <Skeleton variant="rectangular" width={1400} height={100} />
      <Skeleton width={1400}/>
      <Skeleton variant="rectangular" width={1400} height={100} />
      <Skeleton width={1400}/>
      <Skeleton variant="rectangular" width={1400} height={100} />
      <Skeleton width={1400}/>
      <Skeleton variant="rectangular" width={1400} height={100} />
      <Skeleton width={1400}/>
      <Skeleton variant="rectangular" width={1400} height={100} />
      <Skeleton width={1400}/>
      <Skeleton variant="rectangular" width={1400} height={100} />
      <Skeleton width={1400}/>
      </Box>
      :
    <div>
        <DataTable userData={userData} getUserList={getUserList}/>
    </div>}
    </div>
  )
}

export default Spa