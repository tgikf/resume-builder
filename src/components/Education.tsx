import React from 'react';
import { JSX } from '@emotion/react/types/jsx-dev-runtime';
import { Box, Typography } from '@mui/material';

const Education = (): JSX.Element => (
  <Box>
    <Typography variant="h4" color="primary.dark">
      Education
    </Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h6">
        Bachelor of Science (Honours) Business Information Systems
      </Typography>
      <Typography variant="h6">Feb 20</Typography>
    </Box>
    <Typography variant="h6">First Class Honours (GPA 4.15)</Typography>
    <Typography variant="body1">University of Portsmouth</Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 1,
      }}
    >
      <Typography variant="h6">
        Swiss Confederate Certificate of Competence in IT
      </Typography>
      <Typography variant="h6">Jul 13</Typography>
    </Box>
    <Typography variant="h6">Focus Application Development</Typography>
    <Typography variant="body1">UBS AG</Typography>
  </Box>
);

export default Education;
