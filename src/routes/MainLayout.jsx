import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx"
import { useState } from "react";

export default function MainLayout() {
  const [open, setOpen] = useState(false);
  
  const handleOpen = ()=>{
    setOpen(!open);
  }
  const handleClose = (newOpen) => () => {
    setOpen(newOpen);
  };
  

  return (
    <>
    <Header onClick={handleOpen}/>
      <div id="detail"><Outlet context={{ open, handleClose }}/></div>
    </>
  );
}
