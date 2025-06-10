import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 400, textAlign: "center" }}>
        <Typography variant="h4"
         sx={{ 
          color: "#6b1e1e", 
          fontWeight: "bold",
           mb: 2
           }}>
          Welcome to Add Patients Page!
        </Typography>

        <Typography variant="h6" sx={{ color: "#7e3a3a", mb: 4 }}>
          Choose a form type
        </Typography>

        <Button
          variant="contained"
          fullWidth
          onClick={() => navigate("/hook")}
          sx={{
            backgroundColor: "#6b1e1e",
            "&:hover": { backgroundColor: "#541616" },
            mb: 2,
          }}
        >
          React Hook Form
        </Button>

        <Button
          variant="outlined"
          fullWidth
          onClick={() => navigate("/formik")}
          sx={{
            color: "#6b1e1e",
            borderColor: "#6b1e1e",
            "&:hover": {
              backgroundColor: "#fceeee",
              borderColor: "#541616",
            },
          }}
        >
          Formik
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomePage;
