import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { blue } from "@mui/material/colors";
import { auth } from "../../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/admin-dashboard");
      })
      .catch((e) => alert(e.message));
  };

  const signup = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/admin-dashboard");
      })
      .catch((e) => alert(e.message));
  };

  const [values, setValues] = useState({
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#FAFAFF",
      }}
    >
      <Paper
        elevation={5}
        sx={{ padding: "50px 30px", width: "45%", maxWidth: "40rem" }}
      >
        <Grid align="center">
          <Avatar sx={{ bgcolor: blue[500] }}>
            <AdminPanelSettingsIcon fontSize="large" />
          </Avatar>
          <Typography mt={1} variant="h3" fontSize="large">
            Admin Login
          </Typography>
        </Grid>

        <Stack mt={4} spacing={3}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="UserName"
            placeholder="Enter Username"
            required
            size="large"
          />
          <FormControl variant="outlined" >
          <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={password}  
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          <Button
            onClick={signin}
            variant="contained"
            fullWidth
            sx={{ fontSize: "1.5rem" }}
            size="large"
          >
            Sign In
          </Button>
          {/* <Button
            onClick={signup}
            variant="contained"
            fullWidth
            sx={{ fontSize: "1.5rem" }}
            size="large"
          >
            Create Account
          </Button> */}
        </Stack>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
