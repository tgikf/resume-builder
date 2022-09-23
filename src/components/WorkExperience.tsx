import React from 'react';
import { Box, Typography } from '@mui/material';
import MarkdownContent from './common/MarkdownContent';
import EXPERIENCE from '../../content/experience'

const WorkExperience = (): JSX.Element => (
  <Box>
    <Typography variant="h4" color="primary.dark">
      Work Experience
    </Typography>
    {EXPERIENCE.map((e, i) => (
      <Box key={`ex${i}`} sx={{ marginTop: i > 0 ? 1.5 : 0 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6">{e.role}</Typography>
          <Typography variant="h6">{e.period}</Typography>
        </Box>
        <Typography variant="h6">
          {e.employer}, {e.department}, {e.location}
        </Typography>
        {e.responsibilities.length > 1 ? (
          <ul style={{ marginTop: 1, marginBottom: 1 }}>
            {e.responsibilities.map((r, i) => (
              <li key={`li${i}`}>
                <MarkdownContent textVariant="body2" content={r} />
              </li>
            ))}
          </ul>
        ) : (
          <MarkdownContent
            textVariant="body2"
            content={e.responsibilities[0]}
            sx={{ marginTop: 0.5, marginBottom: 0.5 }}
          />
        )}
      </Box>
    ))}
  </Box>
);

export default WorkExperience;
