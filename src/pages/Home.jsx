import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center w-100 gradient-background">
      <h1 >Welcome to The Multicontrol Engineering and Automation LLP</h1>
      <Box>
        <Typography variant="h6" color="textSecondary" component="div">
          <p>Our company is a leading provider of engineering and automation solutions. We specialize in designing
            and implementing custom automation systems, control systems, and software solutions for various
            industries.</p>
            <p>Our team of experienced engineers and technicians work closely with our clients to understand their
              specific needs and develop tailored solutions that meet their requirements.</p>
              <p>Our services include:</p>
              <ul>
                <li>Automation system design and implementation</li>
                <li>Control system design and implementation</li>
                <li>Software development and integration</li>
                <li>System integration and testing</li>
              </ul>
        </Typography>
      </Box>
      <h6><NavLink className={"text-decoration-none"} to={"/login"}>Log In or Sign Up for access more</NavLink></h6>
    </div>
  )
}