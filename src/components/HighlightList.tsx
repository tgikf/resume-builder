import { Box, Stack, Typography } from '@mui/material';
import * as Icons from '@mui/icons-material'
import MuiIcon from './common/MuiIcon'
import { HighlightEntry } from '../types'

const HighlightList = (props: { highlights: HighlightEntry[] }): JSX.Element => {

  const renderableHighlights = props.highlights.map(h => {
    const { iconKey, title, content } = h
    const icon = Icons[iconKey as keyof typeof Icons]
    return { icon, title, content }
  })

  return props?.highlights?.length > 0 && (
    <Stack spacing={3}>
      {props.highlights.map((highlight) => (
        <Box key={`hl${highlight.title}`}>
          <Typography
            component={Stack}
            direction="row"
            sx={{ fontWeight: 'bold' }}
            color="onPrimaryDark.default"
          >
            <MuiIcon iconKey={highlight.iconKey} />
            {highlight.title}
          </Typography>
          <Typography variant="body1" color="onPrimaryDark.default">
            {highlight.content}
          </Typography>
        </Box>
      ))}
    </Stack>);
}

export default HighlightList;
