import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Certifications = (): JSX.Element => (
  <Box>
    <Typography variant="h4" color="primary.dark">
      Certifications
    </Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h6">
        AWS Certified Solutions Architect – Associate
      </Typography>
      <Typography variant="h6">Jul 19</Typography>
    </Box>
    <Typography variant="body1">
      Amazon Web Services, Credential ID 46YT4BG1M11QQJKN
    </Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 1,
      }}
    >
      <Typography variant="h6">
        Microsoft Azure Fundamentals (AZ-900)
      </Typography>
      <Typography variant="h6">Mar 22</Typography>
    </Box>
    <Typography variant="body1">Microsoft, Credential ID I162-1993</Typography>
  </Box>
);

export default Certifications;

