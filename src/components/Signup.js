import { useState } from "react";
import { auth, db } from "../firebase/config";
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

export const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        db.collection("SignedUpUsersData")
          .doc(cred.user.uid)
          .set({
            Name: name,
            Email: email,
            Password: password,
            Contact: contact,
          })
          .then(() => {
            setName("");
            setEmail("");
            setPassword("");
            setContact("");
            setError("");
            navigate("/services");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
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
                Welcome, Please create an account to continue.
              </Typography>
            </Stack>
            <Stack spacing={3}>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
                placeholder="Enter Email"
                required
                size="large"
              />

              <TextField
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                label="Contact"
                placeholder="Enter Email"
                required
                size="large"
              />
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                placeholder="Enter Email"
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
                onClick={signup}
                variant="contained"
                fullWidth
                sx={{ fontSize: "1.5rem" }}
                size="large"
              >
                Create Account
              </Button>

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
};

// <div className='container'>
//     <br />
//     <h2>Sign up</h2>
//     <br />
//     <form autoComplete="off" className='form-group' onSubmit={signup}>
//         <label htmlFor="name">Name</label>
//         <input type="text" className='form-control' required
//             onChange={(e) => setName(e.target.value)} value={name} />
//         <br />
//         <label htmlFor="contact">Contact</label>
//         <input type="text" className='form-control' required
//             onChange={(e) => setContact(e.target.value)} value={contact} />
//         <br />
//         <label htmlFor="email">Email</label>
//         <input type="email" className='form-control' required
//             onChange={(e) => setEmail(e.target.value)} value={email} />
//         <br />
//         <label htmlFor="passowrd">Password</label>
//         <input type="password" className='form-control' required
//             onChange={(e) => setPassword(e.target.value)} value={password} />
//         <br />
//         <button type="submit" className='btn btn-success btn-md mybtn'>Submit</button>
//     </form>
//     {error && <span className='error-msg'>{error}</span>}
//     <br />
//     <span>Already have an account? Login
//         <Link to="/"> Here</Link>
//     </span>
// </div>

{
  /* <Box
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
        User Sign up
      </Typography>
    </Grid>

    <Stack mt={4} mb={1} spacing={3}>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
        placeholder="Enter Email"
        required
        size="large"
      />
      <TextField
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        label="Contact"
        placeholder="Enter Email"
        required
        size="large"
      />
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        placeholder="Enter Email"
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
        onClick={signup}
        variant="contained"
        fullWidth
        sx={{ fontSize: "1.5rem" }}
        size="large"
      >
        Create Account
      </Button>
    </Stack>
    <span>
      Already have an account? <Link to="/"> Login</Link>
    </span>
  </Paper>
</Box>; */
}
