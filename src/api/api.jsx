import axios from "axios";
const apiUrl = "/api/user";
import { useEffect, useState } from "react";

export function UsersData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        // handle success
        setData(response.data.users);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return { data };
}

export const AddUser = (addData) => {
  return axios.post(apiUrl, addData);
};

// export const GetUserById = async (id) => {
//   try {
//     const response = await axios.get(`${apiUrl}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     return null;
//   }
// };
// export const GetUser = (id) => {
//   const [gotUser, setGotUser] = useState([]);
//   useEffect(() => {
//     axios
//     .get(`${apiUrl}/${id}`)
//     .then((response) => {
//         // handle success
//         setGotUser(response.data.user);
//       })
//       .catch((error) => {
//         // handle error
//         console.log(error);
//       })
//     },[id]);
//   return {gotUser};
// };

export const GetUser = (id) => {
  const [gotUser, setGotUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
       const response = await axios.get(`${apiUrl}/${id}`);
        setGotUser(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  },[id]);
  return { gotUser };
};

export function UpdateUser(id, newData) {
  return axios.put(`${apiUrl}/${id}`, newData);
}

export function DeleteUser(id) {
  return axios.delete(`${apiUrl}/${id}`);
}