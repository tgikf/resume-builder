import { JSX } from '@emotion/react/types/jsx-dev-runtime';
import { Box, Stack, Typography, Link } from '@mui/material';
import { SIDE_MARGIN } from '../defaults';
import HighlightList from './HighlightList';

const Sidebar = (props: {
  showHighlights: boolean;
  sidebarContent: { [key: string]: { icon: JSX.Element; label: string | JSX.Element } };
}): JSX.Element => (
  <Box
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
    id="sideBar"
  >
    <Box>
      <Typography variant="h2" color="onPrimaryDark.default">
        {props.sidebarContent.name.label}
      </Typography>
      <Stack sx={{ marginTop: 2 }}>
        {Object.keys(props.sidebarContent)
          .filter((key) => key !== 'name')
          .map((e, i) => (
            <Typography
              component={Stack}
              direction="row"
              color="onPrimaryDark.default"
              key={`elem${i}`}
            >
              {props.sidebarContent[e].icon}
              {props.sidebarContent[e].label}
            </Typography>
          ))}
      </Stack>
    </Box>

    {props.showHighlights && <HighlightList />}
  </Box>
);

export default Sidebar;
