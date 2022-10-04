import { JSX } from '@emotion/react/types/jsx-dev-runtime';
import { Box, Stack, Typography } from '@mui/material';
import MuiIcon from './common/MuiIcon'

const Sidebar = (props: {
  coordinates: { name: string, others: { iconKey: string, label: string }[] };
  children?: JSX.Element | JSX.Element[];
}): JSX.Element => (
  <>
    <Box>
      <Typography variant="h2" color="onPrimaryDark.default">
        {props.coordinates?.name}
      </Typography>
      <Stack sx={{ marginTop: 2 }}>
        {props.coordinates?.others?.length > 0 && props.coordinates.others.map((e, i) => (
          <Typography
            component={Stack}
            direction="row"
            color="onPrimaryDark.default"
            key={`elem${i}`}
          >
            <MuiIcon iconKey={e.iconKey} />
            {e.label}
          </Typography>
        ))}
      </Stack>
    </Box>
    {props.children}
  </>)


export default Sidebar;
