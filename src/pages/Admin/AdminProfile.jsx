import Extra2 from "../Extra2"

const name = import.meta.env.VITE_ADMIN_NAME

export default function AdminProfile() {
  return (
    <div>
      <h1>Admin Profile Page of {name}</h1>
      <Extra2/>
   
    </div>
  )
}
