import axios from "axios";
const apiUrl = "/api/user";
// const apiUrl = "http://Www.meaiot.in/signup";
const deviceUrl = "/api/devices"
import { useEffect, useState } from "react";

//get all the users data
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

//add new user by admin
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

//get user by id
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

//update user
export function UpdateUser(id, newData) {
  return axios.put(`${apiUrl}/${id}`, newData);
}
//delete User
export function DeleteUser(id) {
  return axios.delete(`${apiUrl}/${id}`);
}


// Devices
//Get all devices
export function DevicesData() {
  const [device, setDevice] = useState([]);
  useEffect(() => {
    axios
      .get(deviceUrl)
      .then((response) => {
        // handle success
        setDevice(response.data.devices);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return { device };
}
//add Device
export const AddDevice = (addDeviceData) => {
  return axios.post(deviceUrl, addDeviceData);
};
// get device by id
export const GetDevice = (id) => {
  const [gotDevice, setGotDevice] = useState([]);
  useEffect(() => {
    const fetchDevice = async () => {
      try {
       const response = await axios.get(`${deviceUrl}/${id}`);
       setGotDevice(response.data.device);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDevice();
  },[id]);
  return { gotDevice };
};
//update device
export function UpdateDevice(id, newDeviceData) {
  return axios.put(`${deviceUrl}/${id}`, newDeviceData);
}
//delete device
export function DeleteDevice(id) {
  return axios.delete(`${deviceUrl}/${id}`);
}

//Sign Up Form Data
//for Admin
// export const  AdminSignUp = async(adminData) => {
//   return await axios.post('/api/admin/signup', adminData)
//   .then((response) => {
//     console.log(response.message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// };

//for User/Admin SignUp
// client url
// export const UserSignUp = (userData) => {
//   return axios.post(`${apiUrl}`, userData)
// };

export const UserSignUp = (userData) => {
  return axios.post(`${apiUrl}/signup`, userData)
};

//SignIn User/Admin
export const UserSignin = (user) => {
  return axios.post(`${apiUrl}/signin`, user)
};