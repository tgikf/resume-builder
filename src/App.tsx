import React, { useState } from 'react';
import { render } from 'react-dom';

import { JSX } from '@emotion/react/types/jsx-dev-runtime';
import { Box, Button, Container, Grid, Link } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { muiTheme } from './defaults';
import { drawDOM, exportPDF } from '@progress/kendo-drawing';
import './App.css';
import ResumePage from './components/ResumePage';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmail from '@mui/icons-material/AlternateEmail';

const theme = createTheme(muiTheme);

const generatePdf = async () => {
  //workaround to ensure SVGs in the sidebar have the correct color
  const svgChildren = document.querySelectorAll('#sideBar svg *');
  svgChildren.forEach((path) => path.setAttribute('fill', '#e3e4e4'));

  const element = document.getElementById('resumeRoot');
  const group = await drawDOM(element, {
    paperSize: 'A4',
    scale: 0.75,
  });

  const pdf = await exportPDF(group, {
    author: 'Resume export by tgikf',
    creator: 'Resume export by tgikf',
    producer: 'Resume export by tgikf',
    subject: 'Resume export by tgikf',
    title: 'Resume export by tgikf',
  });
  const res = await fetch(pdf);
  const blob = await res.blob();

  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const App = (): JSX.Element => {
  const [sidebarContent, setSidebarContent] = useState({
    name: { label: 'Dwight Schrute' },
    email: {
      icon: (
        <AlternateEmail
          sx={{ marginRight: 0.7, fontWeight: 'bold' }}
          marker="sideBarSvg"
        />
      ),
      label: 'dschrute@gmail.com',
    },
    phone: {
      icon: <PhoneIcon sx={{ marginRight: 0.7 }} marker="sideBarSvg" />,
      label: '+123 456 78 90',
    },
    github: {
      icon: <GitHubIcon sx={{ marginRight: 0.7 }} marker="sideBarSvg" />,
      label: 'github.com/dschrute',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: 'flex',
          backgroundColor: 'background.default',
          minHeight: '100vh',
          maxHeight: '100%',
          minWidth: '100%',
        }}
      >
        <Grid container spacing={0}>
          <Grid item md={12} lg={12} xl={4}>
            <Button
              variant="contained"
              sx={{ maxWidth: 150, marginBottom: 1 }}
              onClick={generatePdf}
            >
              Export as PDF
            </Button>
          </Grid>
          <Grid item md={12} lg={12} xl={8}>
            <Box id="resumeRoot">
              <ResumePage
                sidebarContent={sidebarContent}
                showSideBarHighlights={true}
              >
                <WorkExperience />
                <Education />
                <Certifications />
              </ResumePage>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App