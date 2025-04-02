import LoginForm from "./components/auth.form";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";

export default function AuthPage() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: isMobile ? "none" : "block",
          width: isMobile ? "0%" : "40%",
          height: "100%",
        }}
      >
        <img src="login_form.svg" width="100%" height="100%" alt="" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: isMobile ? "100%" : "60%",
          height: "100%",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <LoginForm />
      </Box>
    </Box>
  );
}
