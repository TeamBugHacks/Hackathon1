import { useState } from "react";
import { auth } from "../firebase/config";
import { Link, useNavigate } from "react-router-dom";
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
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/services");
      })
      .catch((e) => alert(e.message));
  };



  const [values, setValues] = useState({
    weight: "",
    weightRange: "",
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
            User Login
          </Typography>
        </Grid>

        <Stack mt={4} mb={1} spacing={3}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Enter email"
            required
            size="large"
          />
          <FormControl variant="outlined">
            <InputLabel required htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            onClick={login}
            variant="contained"
            fullWidth
            sx={{ fontSize: "1.5rem" }}
            size="large"
          >
            Sign In
          </Button>
        </Stack>

        <span>
          Don't have an account? <Link to="/sign-up"> Register</Link>
          
        </span>
      </Paper>
    </Box>
  );

  // return (
  //     <div className='container'>
  //         <br />
  //         <h2>Login</h2>
  //         <br />
  //         <form autoComplete="off" className='form-group' onSubmit={login}>
  //             <label htmlFor="email">Email</label>
  //             <input type="email" className='form-control' required
  //                 onChange={(e) => setEmail(e.target.value)} value={email} />
  //             <br />
  //             <label htmlFor="password">Password</label>
  //             <input type="password" className='form-control' required
  //                 onChange={(e) => setPassword(e.target.value)} value={password} />
  //             <br />
  //             <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
  //         </form>
  //         {error && <span className='error-msg'>{error}</span>}
  //         <br/>
  //         <span>Don't have an account? Register
  //             <Link to="/sign-up"> Here</Link>
  //         </span>
  //     </div>
  // )
};
