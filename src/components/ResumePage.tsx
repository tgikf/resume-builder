import { JSX } from '@emotion/react/types/jsx-dev-runtime';
import { Box } from '@mui/material';

import { SIDE_MARGIN } from '../defaults';

const ResumePage = (props: {
  sidebar: JSX.Element;
  children: JSX.Element | JSX.Element[];
}): JSX.Element => (
  <Box
    sx={{
      width: '210mm',
      height: '297mm',
      display: 'flex'
    }}
  >
    <Box
      id="sideBar"
      sx={{
        height: 1,
        width: 0.29,
        boxSizing: 'border-box',
        backgroundColor: 'primary.dark',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: SIDE_MARGIN,
      }}
    >
      {props.sidebar}
    </Box>
    <Box
      sx={{
        height: 1,
        width: 0.71,
        boxSizing: 'border-box',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: SIDE_MARGIN,
      }}
    >
      {props.children}
    </Box>
  </Box>
);

export default ResumePage;
