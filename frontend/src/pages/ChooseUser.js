import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';
import { ROLES } from '../roles';

const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const password = "zxc"

  const { status, currentUser, currentRole } = useSelector(state => state.user);;

  const [loader, setLoader] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const navigateHandler = (role) => {
    if (visitor === 'guest') {
      const fields = role === 'Student'
        ? { rollNum: '1', studentName: 'Demo Student', password }
        : { email: 'demo@demo', password };
      setLoader(true);
      dispatch(loginUser(fields, role));
    } else {
      navigate(`/${role}login`);
    }
  }

  useEffect(() => {
    if (status === 'success' || currentUser !== null) {
      navigate(`/${currentRole}/dashboard`);
    }
  }, [status, currentRole, navigate, currentUser]);

  const rolesToShow = ROLES.filter((r) => r !== 'Guest');

  return (
    <StyledContainer>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          {rolesToShow.map((role) => (
            <Grid item xs={12} sm={6} md={4} key={role}>
              <StyledPaper elevation={3} onClick={() => navigateHandler(role)}>
                <Box mb={2}>
                  <AccountCircle fontSize="large" />
                </Box>
                <StyledTypography>{role}</StyledTypography>
                Login as {role} to explore TCMS.
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>
      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: linear-gradient(to bottom, #411d70, #19118b);
  height: 120vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: #1f1f38;
  color:rgba(255, 255, 255, 0.6);
  cursor:pointer;

  &:hover {
    background-color: #2c2c6c;
    color:white;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 10px;
`;