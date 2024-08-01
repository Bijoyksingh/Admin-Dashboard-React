import axios from 'axios';
const apiUrl = '/api/user';
import { useEffect, useState } from "react";


export function UsersData() {
const [data, setData]= useState([]);
 useEffect(()=>{
        axios.get(apiUrl)
        .then( (response)=> {
          // handle success
          setData(response.data.users);
          
        })
        .catch((error)=> {
          // handle error
          console.log(error);
        })
      })

  return ({data})
}

export const AddUser=(addData)=> {
    return axios.post("/api/user/add", addData );
}


// export function getUser(id) {
//   return axios.get(`${apiUrl}/users/${id}`);
// }

// export function updateUser(id, userData) {
//   return axios.put(`${apiUrl}/users/${id}`, userData);
// }