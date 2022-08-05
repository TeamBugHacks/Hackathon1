import { useEffect, useInsertionEffect, useState } from "react";
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
import firebase from "firebase/compat/app";

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

  // useEffect(() => {
  //   auth.onAuthStateChanged().then(() => {
  //     navigate("/services");
  //   });
  // }, []);

  

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
        elevation={2}
        sx={{ width: { sm: "90%, 100%" }, overflow: "hidden" }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Stack
            sx={{
              flex: 1,
              padding: { xs: "1rem 2rem", sm: " 1rem 0", md: "1rem 4rem" },
              alignSelf: "center",
              maxWidth: { xs: "100%", sm: "80%", md: "55%" },
              maxHeight: { xs: "100%", sm: "50%" },
              minWidth: { xs: "100%", sm: "20%" },
              margin: { sm: "0 auto" },
            }}
            spacing={3}
          >
            <Stack spacing={1}>
              <Typography
                sx={{
                  alignSelf: "start",
                  justifySelf: "start",
                  fontSize: "1.5rem",
                }}
              >
                Logo
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontSize: "1.25rem", color: "#888" }}
              >
                Welcome back, Please login to your account.
              </Typography>
            </Stack>
            <Stack>
              <Button
                onClick={() =>
                  auth.signInWithRedirect(
                    new firebase.auth.GoogleAuthProvider()
                  )
                }
                variant="contained"
                fullWidth
                sx={{ fontSize: "1.5rem" }}
                size="large"
              >
                Sign in with Google
              </Button>
            </Stack>

            <Typography variant="h4" textAlign="center" fontSize="small">
              OR
            </Typography>

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
              <Stack direction="row" spacing={3}>
                <Button
                  onClick={login}
                  variant="contained"
                  fullWidth
                  sx={{ fontSize: "1.5rem" }}
                  size="large"
                >
                  Sign In
                </Button>
                <Link
                  to="/sign-up"
                  color="primary.main"
                  sx={{ fontSize: "1.5rem", width: "3.5rem" }}
                  size="large"
                >
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ width: "2.5rem" }}
                    size="large"
                  >
                    Sign Up
                  </Button>
                </Link>
              </Stack>
              <span>By signining in your agree to our Terms & Conditions</span>
            </Stack>
          </Stack>
          <Stack
            sx={{ flex: 1, display: { sm: "none", md: "block", xs: "none" } }}
          >
            {/* <img
              src="https://images.unsplash.com/photo-1533122250115-6bb28e9a48c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt=""
            /> */}
            <img
              src="https://images.unsplash.com/photo-1605106702842-01a887a31122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </Stack>
        </Stack>
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
