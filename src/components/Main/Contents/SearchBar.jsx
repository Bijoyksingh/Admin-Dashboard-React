import PropTypes from "prop-types";
import { TextField, Grid } from "@mui/material";

const SearchBar = ({ value, onChange }) => {
  return (
    <Grid item xs={12} sm={12} md={4} lg={3} p={2}>
      <TextField
        label="Search By Name"
        variant="outlined"
        value={value}
        onChange={onChange}
        fullWidth
      />
    </Grid>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
