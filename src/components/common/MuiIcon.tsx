import * as Icons from '@mui/icons-material'

const MuiIcon = (props: {iconKey: string}) => {
  const RenderableIcon = Icons[props.iconKey as keyof typeof Icons] || Icons['Error'];
  return <RenderableIcon sx={{ marginRight: 0.7 }} marker="sideBarSvg" />
}

export default MuiIcon