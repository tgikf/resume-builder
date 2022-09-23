import React from 'react';
import { JSX } from '@emotion/react/types/jsx-dev-runtime';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import { SIDE_MARGIN } from '../defaults';
import { SidebarContent } from '../types';

const ResumePage = (props: {
  showSideBarHighlights: boolean;
  sidebarContent: SidebarContent;
  children: JSX.Element | JSX.Element[];
}): JSX.Element => (
  <Box
    sx={{
      width: '210mm',
      height: '297mm',
      marginBottom: 1,
      display: 'flex',
    }}
  >
    <Sidebar showHighlights={true} sidebarContent={props.sidebarContent} />
    <Box
      sx={{
        height: 1,
        width: 0.71,
        boxSizing: 'border-box',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: SIDE_MARGIN,
      }}
    >
      {props.children}
    </Box>
  </Box>
);

export default ResumePage;
