import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  useMediaQuery,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { useTheme } from '@mui/material/styles';
import CodeEditor from '@uiw/react-textarea-code-editor';
import {CoordinatesExampleEditor, HighlightsExampleEditor, ExperienceExampleEditor, EducationExampleEditor, CertificationsExampleEditor} from './exampleEditors'

const HelpDialog = (props: { open: boolean, handleClose: () => void }) => {
  const { open, handleClose } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      fullWidth={true}
      maxWidth="xl"
    >
      <DialogTitle id="responsive-dialog-title">
        <Typography variant="h4" component="div">
          Getting Started
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <Card variant="outlined" sx={{ flex: '1 0 26%', minWidth: '400px' }}>
          <CardContent>
            <Typography variant="h5">How does this work?</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              The Basics
            </Typography>
            <Typography variant="body1" paragraph={true}>
              This app helps you quickly create a modern looking resume based on
              your own data. To generate your resume, you simply need to supply
              your data in the pre-defined JSON structure inside the editor.
            </Typography>
            <Typography variant="body1" paragraph={true}>
              Work with the example provided or read the details below for more
              information. Once you're happy with what the resume looks like,
              click the download button to export it as PDF.
            </Typography>
            <Accordion elevation={5}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2">Coordinates</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  The coordinates property consists of your name and a list of
                  key contact details you'd like to highlight (e.g., e-mail
                  address, phone number, etc.). For details on the available
                  icons and their usage with <code>iconKey</code>, refer to the
                  Icon card.
                </Typography>
                <CoordinatesExampleEditor />
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={5}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2">Highlights</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  The highlights property contains a list of categories for
                  which you can provide an icon, a title, and the relevant
                  keywords (e.g., key skills, languages, etc.). For details on
                  the available icons and their usage with <code>iconKey</code>,
                  refer to the Icon card.
                </Typography>
                <HighlightsExampleEditor />
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={5}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2">Experience</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  The experience property contains a list of positions held,
                  including the respective employer, department, location (all
                  optional), the period and a list of responsibilities.{' '}
                </Typography>
<ExperienceExampleEditor />
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={5}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2">Education</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  The education property contains a list of education entries,
                  including the education title and a subtitle, the awarding
                  institution, and the graduation date.
                </Typography>
                <EducationExampleEditor />
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={5}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2">Certifications</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  The certifications property contains a list of certification
                  entries, including the certification title and a subtitle, the
                  awarding institution, and the completion date.{' '}
                </Typography>
<CertificationsExampleEditor />
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ flex: '1 0 26%', minWidth: '400px' }}>
          <CardContent>
            <Typography variant="h5">Using icons</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Choose from over 2100 Material UI icons
            </Typography>
            <Typography variant="body1" paragraph={true}>
              Where applicable (currently the Coordinates and Highlights
              sections), Material UI icons can be used by supplying the
              respective <code>iconKey</code>. Use the{' '}
              <Link
                href="https://mui.com/material-ui/material-icons/"
                target="_blank"
              >
                search function
              </Link>{' '}
              to find the icon of your choice and use the icon name as{' '}
              <code>iconKey</code>. For instance, to use the @ icon, use{' '}
              <code>iconKey: 'AlternateEmail'</code>
            </Typography>
            <Box
              component="img"
              sx={{
                maxWidth: '100%',
                marginTop: '1rem',
              }}
              alt="eMail Icon"
              src="emailIcon.png"
            />
          </CardContent>
          <CardActions>
            <Button
              href="https://mui.com/material-ui/material-icons/"
              target="_blank"
            >
              Material UI Icons
            </Button>
          </CardActions>
        </Card>
        <Card variant="outlined" sx={{ flex: '1 0 26%', minWidth: '400px' }}>
          <CardContent>
            <Typography variant="h5">About this project</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Brought to you by{' '}
              <Link href="https://github.com/tgikf" target="_blank">
                github.com/tgikf
              </Link>
            </Typography>
            <Typography variant="body1" paragraph={true}>
              Experimenting (i.e., struggling) with Microsoft Word and online
              design tools, I had a hard time coming up with appealing yet
              space-efficient resume layouts. Hence, I came up with a simple React-based resume generator.
            </Typography>
            <Typography variant="body1" paragraph={true}>
              Not only does it help me keep my own resume neat, it's also come
              in really handy when friend's ask me for my resume template. That
              being said, it's far from perfect and might or might not struggle
              to adapt to long content. My apologies to the long-named ones{' '}
              <SentimentSatisfiedAltIcon
                fontSize="inherit"
                sx={{ verticalAlign: 'middle', opacity: '0.8' }}
              />
              .
            </Typography>
            <Typography variant="body1" paragraph={true}>
              Data you provide inside this app is only stored on your own machine. The PDF is generated by your own browser. Your data is never sent or exported anywhere and will be deleted when you clear your browser history.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://github.com/tgikf" target="_blank">
              Source Code on GitHub
            </Button>
          </CardActions>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default HelpDialog;
