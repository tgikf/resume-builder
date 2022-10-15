import { useState } from 'react';
import { Box, Typography, AppBar, Toolbar, SwipeableDrawer, Card, CardContent, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import SupportIcon from '@mui/icons-material/Support';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { muiTheme } from './defaults';
import JSON5 from 'json5'

import './App.css';
import HelpDialog from './components/instructions/HelpDialog'
import GeneratePdfButton from './components/GeneratePdfButton'
import ResumePage from './components/ResumePage';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Sidebar from './components/Sidebar'
import HighlightList from './components/HighlightList'

import EXPERIENCE from '../content/experience'
import HIGHLIGHTS from '../content/highlights';
import COORDINATES from '../content/coordinates'
import EDUCATION from '../content/education'
import CERTIFICATIONS from '../content/certifications'

const theme = createTheme(muiTheme);

const App = (): JSX.Element => {
  const [resumeContent, setResumeContent] = useState({ coordinates: COORDINATES, highlights: HIGHLIGHTS, experience: EXPERIENCE, education: EDUCATION, certifications: CERTIFICATIONS });
  const [dialogOpen, setDialogOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <HelpDialog open={dialogOpen} handleClose={() => setDialogOpen(false)} />
      <AppBar position="sticky">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
          {/* @ts-ignore */}
          <Button variant="outlined" startIcon={<SupportIcon />} onClick={() => setDialogOpen(true)} color="onPrimary">
            Getting Started
          </Button>
          <GeneratePdfButton />
        </Toolbar>
      </AppBar>
      <Box sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
        <Box className="inputPanel">
          <CodeMirror
            height="calc(100vh - 64px)"
            value={JSON5.stringify(resumeContent, null, 2)}
            extensions={[javascript()]}
            onChange={(value) => { setResumeContent(JSON5.parse(value)) }}
          />
        </Box>
        <Box>

          <Box sx={{ minWidth: '210mm', minHeight: '297mm' }}>
            <Box id="resumeRoot" >
              <ResumePage
                sidebar={<Sidebar coordinates={resumeContent.coordinates}><HighlightList highlights={resumeContent.highlights || []} /></Sidebar>}
              >
                <WorkExperience experience={resumeContent.experience || []} />
                <Education education={resumeContent.education || []} />
                <Certifications certifications={resumeContent.certifications || []} />
              </ResumePage>
            </Box>
          </Box></Box>

      </Box>
    </ThemeProvider>
  );
};

export default App