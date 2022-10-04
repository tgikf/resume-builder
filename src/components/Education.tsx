import { Box, Typography } from '@mui/material';
import { EducationEntry } from '../types'

const Education = (props: { education: EducationEntry[] }): JSX.Element => props.education.length > 0 && (
  <Box>
    <Typography variant="h4" color="primary.dark">
      Education
    </Typography>
    {props.education.map((e, i) => (
      <Box key={`edu${e.title}${i}`}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">{e.title}</Typography>
          <Typography variant="h6">{e.date}</Typography>
        </Box>
        <Typography variant="h6">{e.subtitle}</Typography>
        <Typography variant="body1">{e.institution}</Typography>
      </Box>
    ))}
  </Box>
);


export default Education;
