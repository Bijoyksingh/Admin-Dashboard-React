import "./SideBar.css";
// import PropTypes from 'prop-types';


export default function SideBar({children}) {
  return (
    <div id="sidebar" className="sidebar ">
      <ul>
      {children}
      </ul>
    </div>
  );
}

