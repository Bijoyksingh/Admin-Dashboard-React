import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

TopBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.string,
};

export default function TopBox(props) {
  return (
    // <div
    //   className="d-flex border border-5 border-primary rounded-pill col-4 p-4 justify-content-between overflow-hidden"
    //   onClick={props.onClick}
    //   style={{ cursor: 'pointer' }}
    // >
    //   <h3>{props.title}</h3>
    //   <h5>{props.value}</h5>
    // </div>
    <Box
    onClick={props.onClick}
    sx={{
      width: 400,
      height: 100,
      cursor:"pointer",
      border: 5,
      borderColor: 'blue',
      alignContent:"center",
      borderRadius: 3,
      bgcolor: '#8dade0',
      color: 'black',
      '&:hover': {
        boxShadow: "10px 10px 5px #999"
      },
    }}>
      <Typography sx={{display:"flex", justifyContent:"space-between",
      alignItems:"center",  p: 3}}>
          <h3>{props.title}</h3>
       <h5>{props.value}</h5>
      </Typography>
    </Box>
  );
}
