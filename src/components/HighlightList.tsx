import React from 'react';
import { JSX } from '@emotion/react/types/jsx-dev-runtime';
import { Box, Stack, Typography } from '@mui/material';
import HIGHLIGHTS from '../../content/highlights';

const HighlightList = (): JSX.Element => (
  <Stack spacing={3}>
    {HIGHLIGHTS.map((highlight) => (
      <Box key={`hl${highlight.title}`}>
        <Typography
          component={Stack}
          direction="row"
          sx={{ fontWeight: 'bold' }}
          color="onPrimaryDark.default"
        >
          <highlight.icon sx={{ marginRight: 0.7 }} />
          {highlight.title}
        </Typography>
        <Typography variant="body1" color="onPrimaryDark.default">
          {highlight.content}
        </Typography>
      </Box>
    ))}
  </Stack>
);

export default HighlightList;
