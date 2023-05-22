"use client";

import useUser from "csc-start/hooks/useUser";
import Link from "next/link";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

const ActionsFooter = () => {
  const { user, loading } = useUser();
  if (loading) {
    return <Box sx={{ flexGrow: 1 }}>
    <FacebookCircularProgress />
    <br />
    <BorderLinearProgress variant="determinate" value={50} />
  </Box>;
  }
  if (!user) {
    // user is not logged in
    return (
      <div className="flex justify-between mt-5">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    );
  }
  // user is logged in
  return (
    <div className="flex justify-between">
      <Link href="/profile">Profile</Link>
      <Link href="/logout">Logout</Link>
    </div>
  );
};

export default ActionsFooter;
