import { Box, Button, Typography } from "@mui/material";
import { Link, } from "react-router-dom"
import { motion } from 'framer-motion';
  
  export default function NotFound() {
    // const navigate = useNavigate();

    // const goBack = () => navigate(-1);
    return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width:"100%",
        backgroundColor: '#f7f7f7',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" sx={{ fontSize: 80, fontWeight: 700, color: '#333' }}>
          404
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography variant="h6" sx={{ fontSize: 18, color: '#666' }}>
          <h1>Sorry, the page you&apos;re looking for doesn&apos;t exist.</h1>
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        
      >
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#333', color: '#fff', margin:"6px"  }}
        >
          Go home
        </Button>
        {/* <Button
          variant="contained"
          onClick={goBack}
          sx={{ mt: 2, backgroundColor: '#333', color: '#fff', margin:"6px" }}
        >
          Go back
        </Button> */}
      </motion.div>
    </Box>
    );
  }
  